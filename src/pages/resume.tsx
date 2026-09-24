// import { useState } from 'react'
import '../App.css'; import '../dist/style.css';
// import '../css/contact.css';
import '../assets/fonts/flaticon/css/all.css';
import '../assets/fonts/flaticon/css/all.min.css';

import '../assets/fonts/flaticon/icomoon/style.css'

import Resume from "/Resume.pdf"


function resume() {


  return (
    <>
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
    </>
  )
}

export default resume
