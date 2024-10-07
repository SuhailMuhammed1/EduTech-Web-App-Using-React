import React from 'react'
import './Courses.css'
import ai from '../../../assets/img/ai.png'
import dg from '../../../assets/img/dg.png'
import cb from '../../../assets/img/hacking.png'
import sd from '../../../assets/img/sd.png'

function Courses() {
    const cousre_details = [{
        name: 'AI Development', 
        description: 'Master AI Development',
        img: ai,
    },
    {
        name: 'Digital Marketing', 
        description: 'Master Digital Marketing!!!',
        img: dg,
    },
    {
        name: 'Cyber Security', 
        description: 'Master Cyber Security!!!',
        img: cb,
    },
    {
        name: 'Software Development', 
        description: 'Master Software Development!!!',
        img: sd,
    }]
  return (
    <div className="container course-container">
        <div className="course-top">
            <h2 className="section_title">Our Free Courses</h2>
            <p>The Top Trending Free Courses With Free Certification</p>
              <div className="course-wrapper">
                  {
                      cousre_details.map((item, index) => (
                          <div className="course-item" key={index}>
                              <span className='course-icon'>
                                  <img src={item.img} alt="" />
                              </span>
                              <div className="course-content">
                                  <h4>{item.name}</h4>
                                  <p>{item.description}</p>
                              </div>
                          </div>
                      ))
                  }
              </div>
        </div>
    </div>
  )
}

export default Courses
