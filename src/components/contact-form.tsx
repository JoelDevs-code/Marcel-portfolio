// import { useState } from 'react'
import '../App.css'; import '../dist/style.css';
import '../css/form.css'
import '../assets/fonts/flaticon/css/all.css';
import '../assets/fonts/flaticon/css/all.min.css';

import '../assets/fonts/flaticon/icomoon/style.css'


function contact$form() {
  return (
    <>
      <form className="contact--form flex flex-col gap-2" id="contact-form" data-aos="fade-left">
        
        <div className='flex flex-col gap-1'>
          <div className="input-col-wrapper flex flex-col gap-5">
            <label htmlFor="" className="text-gray-400">
              <i className="fa-regular fa-user"></i> <span>Full Name</span>
            </label>
            <input type="text" className="text-gray-400 text-sm" placeholder="eg. bulus joel" />
          </div>
          <div className="input-col-wrapper flex flex-col gap-5">
            <label htmlFor="" className="text-gray-400">
              <i className="fa-regular fa-envelope"></i> <span>Email Address</span>
            </label>
            <input type="text" className="text-gray-400 text-sm" placeholder="example@mail.com" />
          </div>
        </div>

        <div className='flex flex-col gap-1'>
          <div className="input-col-wrapper flex flex-col gap-5">
            <label htmlFor="" className="text-gray-400">Message</label>
            <textarea name="contact-message" className='text-gray-400 text-sm' placeholder='message here......' id=""></textarea>
          </div>
          <button className="submit-contact text-black flex items-center gap-5 cursor-pointer">
            <span>Submit</span><i className="fa fa-arrow-right text-xs"></i>
          </button>
        </div>
      </form>
    </>
  )
}

export default contact$form