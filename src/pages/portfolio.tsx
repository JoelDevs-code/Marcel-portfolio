// import { useState } from 'react'
import '../App.css'; import '../dist/style.css';
import '../css/portfolio.css';
import '../assets/fonts/flaticon/css/all.css';
import '../assets/fonts/flaticon/css/all.min.css';

import '../assets/fonts/flaticon/icomoon/style.css'


import project_img from '../assets/images/proj.png';

import Resume from "/Resume.pdf"

// importing project images
import sandwich_ai from "../assets/images/projects-img/p4.png"
import handitt_car from "../assets/images/projects-img/p1.jpg"
import handitt_soc from "../assets/images/projects-img/p2.jpg"
import marcel_logo from "../assets/images/projects-img/p3.jpg"
import studyland from "../assets/images/projects-img/xcvb.jpg"
import sandwichlp from "../assets/images/projects-img/xcvf.jpg"
import folafilms from "../assets/images/projects-img/fola.jpg"
import nrc from "../assets/images/projects-img/train-landing.jpg"

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
      url:"https://sandwich-two.vercel.app/", target: "_blank",
      img: sandwich_ai, service: "Landing Page"
    },
    {
      name: "Handitt_ca", 
      url:"https://www.behance.net/gallery/255425691/Social-media-Design-Carousel", 
      img: handitt_car, service: "Social media carousel"
    },
    {
      name: "Sandwich AI", 
      url:"https://sandwich-one-phi.vercel.app/", target: "_blank",
      img: sandwichlp, service: "Sandwich_ai Landing page"
    },
    {
      name: "StudyHub",
      url:"https://studyhub-landing-page-five.vercel.app/", target: "_blank",
      img: studyland, service: "StudyHub Landing Page"
    },
    {
      name: "Fola Films",
      url:"https://www.behance.net/gallery/257087975/Fola-Films", target: "_blank",
      img: folafilms, service: "Brand Design / Visual Identity"
    },
    {
      name: "Nigeria Railway Coperation", 
      url:"", target: "_blank",
      img: nrc, service: "NRC Landing Page"
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

          <div className='resume-x h-full flex justify-evenly bg-white items-center py-3'>
            <div className="resume--me-text py-5">
              <h2>Resume</h2>
              <h4><span>iDesign,</span> <span>{'<iCode />'}</span></h4>
                <a href="/Resume.pdf" download={Resume}>
                  <button className='flex items-center gap-1 cursor-pointer border my-2 px-1 py-1'>
                    <span>Download resume</span><i className='fa fa-download'></i>
                  </button>
                </a>
            </div>
            <iframe className='resume-frame' src="/Resume.pdf#toolbar=0" width="400px" ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default portfolio
