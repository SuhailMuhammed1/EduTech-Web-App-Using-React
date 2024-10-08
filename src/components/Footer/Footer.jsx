import React from 'react'
import './Footer.css'
import footer from '../../assets/img/footer.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_box">
                    <div className="logo">
                        <div className="logo-img">
                            <img src={footer} alt="" />
                        </div>
                        <h2>EduTech</h2>
                    </div>
                    <p>
                        Embrace the future of innovation and technology.
                    </p>
                </div>
                <div className="footer_box">
                    <h4 className='footer_title'>Company</h4>
                    <ul className='footer_links'>
                        <li><Link to='/courses'>Our Programs</Link></li>
                        <li><Link to='/services'>Our Plan</Link></li>
                        <li><Link to=''>Become a member</Link></li>
                    </ul>
                </div>
                <div className="footer_box">
                <h4 className='footer_title'>Quick Links</h4>
                    <ul className='footer_links'>
                        <li><Link to='/about-us'>About Us</Link></li>
                        <li><Link to='/contact-us'>Contact Us</Link></li>
                        <li><Link to='/support'>Support Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
