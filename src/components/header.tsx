// import { useState } from 'react'
import { useState } from "react";
// import {Link } from 'react-router-dom';
import '../App.css'; import '../dist/style.css';

import '../assets/fonts/flaticon/css/all.css';
import '../assets/fonts/flaticon/css/all.min.css';
import '../assets/fonts/flaticon/icomoon/style.css'

import main_logo from "../assets/images/logo.png"

function homePage(){window.location.href = "./"}


function header() {

  const nav_links = [
    {text: "Home", url: "/", target: "_self"}, 
    {text: "About", url: "about", target: "_self"}, 
    {text: "Portfolio", url: "portfolio", target: "_self"},
    {text: "Resume", url: "resume", target: "_blank"},
    {text: "Contact", url: "contact", target: "_self"},
  ]

  const social_links = [
    {name: "fab fa-x-twitter fa-shake", url: "https://x.com/JoeMacex"},
    {name: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/joel-bulus-177712293/"},
    {name: "fab fa-behance", url: "https://www.behance.net/joelbulus_iDesign"},
  ]

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <>
      <section className="main--header--section w-full bg-black" data-aos="fade-down">
        <div className="main--header--sec-wrapper w-full flex items-center justify-between">
          <div className="main--logo-img cursor-pointer" onClick={homePage} >
            <img src={main_logo} width={120}/>
          </div>
          <nav className={`main--navigation-container flex gap-4 ${menuOpen ? "mobile-menu-open" : ""}`}>
            <ul>
              {
                nav_links.map((navlink, index)=>(
                  <li className='inline-block px-1 text-xl text-white hover:text-gray-50' key={index}>
                    {/* <Link to={navlink.url} className='nav__links'><span>{navlink.text}</span></Link> */}
                    <a href={navlink.url} className='nav__links' target={navlink.target}><span>{navlink.text}</span></a>
                  </li>
                ))
              }
            </ul>
            <ul>
              {
                social_links.map((soclink, index)=>(
                  <li key={index} className='inline-block text-xl px-1 text-white hover:text-gray-50'>
                    <a href={soclink.url} target="_blank"><i className={soclink.name}></i></a>
                  </li>
                ))
              }
            </ul>
          </nav>
          <button className={`nav--toggle cursor-pointer ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            <i className="fa fa-bars text-white"></i>
          </button>
        </div>
      </section>
    </>
  )
}

export default header