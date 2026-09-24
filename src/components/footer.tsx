// import { useState } from 'react'
import '../App.css'; import '../dist/style.css';

import '../assets/fonts/flaticon/css/all.css';
import '../assets/fonts/flaticon/css/all.min.css';
import '../assets/fonts/flaticon/icomoon/style.css'


function footer() {

    const nav_links = [
    {text: "Home", url: ""},
    {text: "About", url: "about"}, 
    {text: "Portfolio", url: "../home.tsx"},
    {text: "Resume", url: "../home.tsx"},
    {text: "Contact", url: "contact"},
  ]

  return (
    <>
      <div className="footer--section w-full bg-black" data-aos="fade-up">
        <div className="footer--section-wrapper flex flex-wrap items-center justify-between gap-1">

          <span className='text-white'>Bulus Joel | &copy; all rights reserved 2026</span>
          <ul className='flex gap-1 items-center flex-wrap'>
            <h4 className='text-white font-bold flex items-center gap-5'>
              <span>Quick Links </span><i className='fa fa-arrow-right'></i>
            </h4>
            {
              nav_links.map((navlinks, index)=>(
                <li className='inline-block px-1' key={index}>
                  <a className='text-white font-lg hover:text-gray-50' href={navlinks.url}>
                    <span>{navlinks.text}</span>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default footer