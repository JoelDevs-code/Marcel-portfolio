// import { useState } from 'react'
import '../App.css'; import '../dist/style.css';
import '../css/contact.css';
import '../assets/fonts/flaticon/css/all.css';
import '../assets/fonts/flaticon/css/all.min.css';

import '../assets/fonts/flaticon/icomoon/style.css'

import Form from "../components/contact-form"

// import me from "../assets/images/me.jfif"

function contact() {


  return (
    <>
      <section className="contact--page-sec w-full bg-white">
        <div className="contact-page-sec-wrapper flex bg-white">

          <div className="contact-wrpp-col bg-white flex items-center">

            <div className="contact-text_links">
             <div className="contact-text py-2" data-aos="fade-right">
                <h2 className='text-5xl'>Contact me.</h2>
                <span>Get in touch with me via social media or send me an email.</span>
              </div>
              <div className="social--contact--btn flex items-center gap-2" data-aos="fade-up">
                <a href="">
                  <button><i className='fab fa-x-twitter fa-beat'></i></button>
                </a>
                <a href="">
                  <button><i className='fab fa-facebook-f fa-beat'></i></button>
                </a>
                <a href="">
                  <button><i className='fab fa-instagram fa-beat'></i></button>
                </a>
                <a href="">
                  <button><i className='fab fa-linkedin-in fa-beat'></i></button>
                </a>
              </div>
            </div>
            {/* <Form /> */}

            {/* <div className="contact-image"><img src={me} width={350} /></div> */}
          </div>

          <Form />

        </div>
      </section>
    </>
  )
}

export default contact
