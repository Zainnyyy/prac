import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import ha from '../../assets/ha.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt='' />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={ha} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Currently in my second year of IT studies at WIT, constantly evolving my toolkit to create more impactful and efficient web solutions.</p>
                        <p></p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>JavaScrip</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Python</p><hr style={{width:"50%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>4+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                 <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                 <div className="about-achievement">
                    <h1>15+</h1>
                    <p>LEARND</p>
                </div>
            </div>
        </div>
    
    )
}

export default About