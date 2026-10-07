import Hero from './componets/Hero/Hero'
import About from './componets/About/About'
import Services from './componets/Services/Services'
import MyWork from './componets/MyWork/MyWork'
import Contact from './componets/Contact/Contact'
import Footer from './componets/Footer/Footer'
import Navbar from './componets/Navbar/Navbar'
import Veil from './componets/Veil/Veil'

const App = () => (
  <div>
    <Veil />
    <Navbar />
    <Hero />
    <About />
    <Services />
    <MyWork />
    <Contact />
    <Footer />
  </div>
)

export default App
