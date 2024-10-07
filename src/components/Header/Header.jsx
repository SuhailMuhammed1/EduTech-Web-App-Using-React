import React from 'react'
import './Header.css'
import logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';

function Header() {
    const nav_titles = [{
        path: '/', display: 'Home'
    },
    {
        path: '/services', display: 'Services'
    },
    {
        path: '/courses', display: 'Courses'
    },
    {
        path: '/about-us', display: 'About Us'
    },]
  return (
    <header className='header'>
        <div className='container'>
            <div className="nav_container">
                <div className="logo">
                    <div className="logo-img">
                        <img src={logo} alt="" />
                        <h2>EduTech</h2>
                    </div>
                </div>
                <div className="navigation">
                    <ul className='menu'>
                        {
                            nav_titles.map((item)=>(
                                <li className='nav_item'><Link to={item.path}>{item.display}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
