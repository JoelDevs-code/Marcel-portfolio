// import { useState } from 'react'
import '../App.css'; import '../dist/style.css';
import '../css/portfolio.css';
import '../assets/fonts/flaticon/css/all.css';
import '../assets/fonts/flaticon/css/all.min.css';

import '../assets/fonts/flaticon/icomoon/style.css'


import project_img from '../assets/images/proj.png';

// importing project images
import sandwich_ai from "../assets/images/projects-img/p4.png"
import handitt_car from "../assets/images/projects-img/p1.jpg"
import handitt_soc from "../assets/images/projects-img/p2.jpg"
import marcel_logo from "../assets/images/projects-img/p3.jpg"

function portfolio() {

  const projects$list = [
    {
      name: "Marcel Logo Design", 
      url:"https://www.behance.net/gallery/255424223/Marcel-Designs-Logo", 
      img: marcel_logo, service: "Brand, Visual Identity", target: "_blank"
    },
    {
      name: "Handit_ca", 
      url:"https://www.behance.net/gallery/256179749/Handitt-social-media-design", 
      img: handitt_soc, service: "Social media design", target: "_blank"
    },
    {
      name: "Sandwich AI", 
      url:"https://sandwichai.co/", target: "_blank",
      img: sandwich_ai, service: "Landing Page"},
    {
      name: "Handitt_ca", 
      url:"https://www.behance.net/gallery/255425691/Social-media-Design-Carousel", 
      img: handitt_car, service: "Social media carousel"
    },
  ]


  return (
    <>
      <section className="portfolio--page-sec w-full shadow">
        <div className="portfolio-page-sec-wrapper flex flex-col"> 

          <div className='portfolio-x flex justify-evenly shadow bg-white items-center'>
            <div className="portfolio--me-text py-1" data-aos="fade-left">
              <h2>My Projects</h2><h4>Check out some of my latest projects.</h4>
                <span>
                  I enjoy turning ideas and complex problems into simple, functional, 
                  and visually engaging digital experiences. Explore some of my 
                  recent design and development projects, showcasing my skills in UI/UX design, 
                  branding, and front-end development.
                </span>
            </div>
            <div className="portfolio--me-image pt-4"><img src={project_img} width={250} data-aos="fade-right" /></div>
          </div>

          <div>

            <div className="project--section w-full" id='projects'>
              <div className="project--setcion--container w-full py-2">
                
                <div className="project--setcion--header flex items-center gap-1 w-full justify-evenly" data-aos="fade-up">
                  <hr /><span className='text-gray-400'>SOME OF MY PROJECTS</span><hr />
                </div>

                <div>
                  <div className="project--grid--section">
                    <div className="project--grid--section-wrapper flex flex-wrap justify-center py-4 gap-2">
                      {projects$list.map((projects, index)=>(
                        <a href={projects.url} title='View Project' className='proj-cd' target={projects.target} data-aos="fade-up">
                          <div className="project--card mb-4 px-1 py-1 flex flex-col gap-1" key={index}>
                            <div className="project--card_img cursor-pointer"><img src={projects.img}/></div>
                            <div className="project--card_txt">
                              <h4 className='font-bold text-gray-400'>{projects.name}</h4>
                              <span className='text-gray-400'>{projects.service}</span>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
             </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default portfolio
