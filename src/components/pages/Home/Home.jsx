import React from 'react'
import meta from '../../../assets/img/meta.jpeg'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import './Home.css'
import Courses from '../Courses/Courses';
import Community from '../Community/Community';
import Plans from '../Plans/Plans';


function Home() {

    function handleClcik(){
        window.open('https://w3schools.com', '_blank');
    }

  return (
    <>
    <section>
        <div className="container">
            <div className="home_container">
                <div className="home_content">
                    <h2 className='section_title'>Learn Everything For Free!!</h2>
                    <p>Master Trending Technologies with Techflix AI, Invest Your Time and return skills</p>
                    <div className="home-btns">
                        <button className='register-btn' onClick={handleClcik}>Get Started</button>
                        <button className='register-btn' onClick={handleClcik}>Watch Now</button>
                    </div>
                </div>
                <div className="home-img">
                    <div className="home-img-wrapper">
                        <div className="box-01">
                            <div className="box-img">
                            <img src={meta} alt="" />
                            </div>
                        </div>
                        <div className="whatsapp-container">
                            <h5>500+ Students</h5>
                            <AiOutlineWhatsApp color='green'/>
                        </div>
                        <div className="support">
                            <h5>Active Support</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Courses/>
    <Community/>
    <Plans/>
    </>
  )
}

export default Home
