import { useEffect, useRef } from 'react'

const LS = 3.8, LC = 2.5, WA = 0.37, WS = 1.66, LO = 0.85, CELLS = 96
const field = (x, y, t) =>
  (Math.sin(x + t * 0.6) * 0.5 + Math.sin(y * 0.85 - t * 0.45) * 0.45 +
    Math.sin((x + y) * 0.65 + t * 0.35) * 0.35 + Math.sin((x - y) * 0.95 - t * 0.55) * 0.25) * 0.5 + 0.5

const Contours = ({ color = '#dfe5e9', lineW = 1.2 }) => {
  const ref = useRef(null)

  useEffect(() => {
    const cv = ref.current
    const c = cv.getContext('2d')
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches
    const t0 = performance.now()
    let w = 0, h = 0, raf = 0, last = 0, visible = false

    const fit = () => {
      const r = Math.min(devicePixelRatio, 2)
      w = cv.clientWidth; h = cv.clientHeight
      cv.width = w * r; cv.height = h * r
      c.setTransform(r, 0, 0, r, 0, 0)
    }

    const draw = (now) => {
      raf = requestAnimationFrame(draw)
      if (!visible || !w || (now - last < 24 && last)) return
      last = now
      const t = still ? 0 : ((performance.now() - t0) / 1000) * WS
      const cols = w >= h ? CELLS : Math.max(8, Math.round((CELLS * w) / h))
      const rows = Math.max(8, Math.round((cols * h) / w))
      const sx = w / cols, sy = h / rows, asp = w / h
      const V = new Float32Array((cols + 1) * (rows + 1))
      for (let j = 0; j <= rows; j++)
        for (let i = 0; i <= cols; i++) {
          const nx = ((i / cols) * 2 - 1) * asp * LS, ny = ((j / rows) * 2 - 1) * LS
          V[j * (cols + 1) + i] = field(nx + Math.sin(ny * 0.8 + t * 0.7) * WA, ny + Math.cos(nx * 0.7 - t * 0.6) * WA, t) * LC
        }
      c.clearRect(0, 0, w, h)
      c.strokeStyle = color; c.lineWidth = lineW; c.globalAlpha = LO; c.beginPath()
      for (let L = 0.5; L < LC; L += 1)
        for (let j = 0; j < rows; j++)
          for (let i = 0; i < cols; i++) {
            const a = V[j * (cols + 1) + i], b = V[j * (cols + 1) + i + 1]
            const cc = V[(j + 1) * (cols + 1) + i + 1], d = V[(j + 1) * (cols + 1) + i]
            const k = (a > L ? 8 : 0) | (b > L ? 4 : 0) | (cc > L ? 2 : 0) | (d > L ? 1 : 0)
            if (!k || k === 15) continue
            const x0 = i * sx, y0 = j * sy
            const T = [x0 + sx * ((L - a) / (b - a)), y0], R = [x0 + sx, y0 + sy * ((L - b) / (cc - b))]
            const B = [x0 + sx * ((L - d) / (cc - d)), y0 + sy], Le = [x0, y0 + sy * ((L - a) / (d - a))]
            const s = (p, q) => { c.moveTo(p[0], p[1]); c.lineTo(q[0], q[1]) }
            switch (k) {
              case 1: case 14: s(Le, B); break
              case 2: case 13: s(B, R); break
              case 3: case 12: s(Le, R); break
              case 4: case 11: s(T, R); break
              case 6: case 9: s(T, B); break
              case 7: case 8: s(Le, T); break
              case 5: s(Le, T); s(B, R); break
              case 10: s(Le, B); s(T, R); break
              default: break
            }
          }
      c.stroke(); c.globalAlpha = 1
    }

    fit()
    addEventListener('resize', fit)
    const io = new IntersectionObserver((e) => { visible = e[0].isIntersecting })
    io.observe(cv)
    raf = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', fit); io.disconnect() }
  }, [color, lineW])

  return <canvas ref={ref} className="ct" aria-hidden="true" />
}

export default Contours
