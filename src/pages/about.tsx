// import { useState } from 'react'
import '../App.css'; import '../dist/style.css';
import '../css/about.css';
import '../assets/fonts/flaticon/css/all.css';
import '../assets/fonts/flaticon/css/all.min.css';

import '../assets/fonts/flaticon/icomoon/style.css'

import Charts from "../components/barchart"

import me from "../assets/images/me.jfif"

import slide_1 from "../assets/images/projects-img/p1.jpg"
import slide_2 from "../assets/images/projects-img/p2.jpg"
import slide_3 from "../assets/images/projects-img/p3.jpg"

function about() {

  const gallarey_slide = [
    {img: slide_1, name: "slide-1"},{img: slide_2, name: "slide-2"},{img: slide_3, name: "slide-3"},
  ]

  return (
    <>
      <section className="about--page-sec w-full shadow">
        <div className="about-page-sec-wrapper flex flex-col gap-4"> 

          <div className='flex justify-evenly bg-white items-center'>
            <div className="about--me-text py-1" data-aos="fade-right">
              <h2>about me</h2><h4>I'm a UI Designer and a React dev.</h4>
                <span>
                  i enjoy turning complex problems into simple solution, I'm
                  a disciple and follower of christ i love music and when i'm not dragging pixels 
                  or hunting bugs you can find me on the pitch playing football.
                </span>
            </div>
            <div className="about--me-image pt-4"><img src={me} width={200} data-aos="fade-left" /></div>
          </div>
          <div className="about--gallarey shadow px-0">
            <div className='gallary--slidex py-1 flex items-center justify-evenly gap-1' data-aos="fade-up">
              {
                gallarey_slide.map((abtgallarey, index)=>(
                  <div className='gallary--container'>
                    <img  key={index} src={abtgallarey.img} alt="gallerey" />
                  </div>
                ))
              }
            </div>
          </div>

          <div className="chart--section w-full" id='projects'>
            <div className="chart--setcion--container w-full py-2 flex flex-col gap-4">
              <div className="chart--setcion--header flex items-center gap-1 w-full justify-evenly" data-aos="fade-up">
                <hr /><span className='text-gray-400'>MY SKILLS</span><hr />
              </div>
              <div className='chart-x-col flex justify-center py-3' data-aos="fade-up"><Charts /></div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default about
