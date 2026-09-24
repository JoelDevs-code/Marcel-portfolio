import { useEffect} from "react";

import AOS from "aos";
import "aos/dist/aos.css";


import { Routes, Route } from 'react-router-dom';
import './App.css'; import './dist/style.css';
import '../src/assets/fonts/flaticon/css/all.css';
import '../src/assets/fonts/flaticon/css/all.min.css';
import './assets/fonts/flaticon/icomoon/style.css';


import Resume from "./pages/resume";
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';

import Header from "../src/components/header"
import Project from "../src/components/project"
import Footer from "../src/components/footer"
import me from "../src/assets/images/me.jfif"

import ai_icon from "../src/assets/images/AI.ico"
import ps_icon from "../src/assets/images/ps.ico"
import fg_icon from "../src/assets/images/e.jpg"



function App() {

  useEffect(() => {AOS.init({duration: 1000, once: true, easing: "ease-in-out",});}, []);


  const design_icon = [{name: ai_icon},{name: ps_icon},{name:fg_icon}];

  const service_card = [
    {
      name: "UI Designs",
      icon: "fab fa-figma fa-beat-fade",
      text: 
      `
        I Design intuitive, accesible and beatuful visuals,
        creating a powerful design system that are User
        friendly and gives an individual brand indentity.
      `
    },
    {
      name: "Front-end Development",
      icon: "fas fa-code fa-beat-fade",
      text: 
      `
        I build responsive, user-friendly websites with clean 
        and efficient code, creating seamless digital experiences 
        that look great and perform smoothly across all devices..
      `
    }
  ]

  return (
    <>

      <main className="main--web--section" id='main' aria-label='portolio web'>
        <section className="main--web--section--wrapper w-full px-0 py-0 h-full">
          <Header />
          
          <Routes>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='portfolio' element={<Portfolio />}></Route>
            <Route path='resume' element={<Resume />}></Route>

            <Route path='' element={

              <>

                <div className="hero--section bg-white w-full shadow" id='hero_section'>
                  <div className="hero--section-container w-full items-center gap-1 flex justify-between">
                
                    <div className="hero--caption-one flex flex-col gap-1">
                      <div className="hero--caption-text flex flex-col gap-2" data-aos="fade-left">
                        <h1 className='font-bold text-5xl'>designer</h1>
                        <p>I'm a Product designer specilizing in UI designs and visual identities.</p>
                      </div>
                      <div className="hero--caption-icons flex items-center gap-1 justify-evenly" data-aos="fade-left">
                        {
                          design_icon.map((designIcon, index)=>(
                            <div className='img-ov' key={index}>
                              <img src={designIcon.name} alt="Design soeftwares" draggable="false" />
                            </div>
                          ))
                        }
                      </div>
                    </div>

                    <div className="hero--main--image">
                      <img src={me} width={420} loading='lazy' draggable="false" data-aos="fade-up" />
                    </div>

                    <div className="hero--caption-two flex flex-col gap-1">
                      <div className="hero--caption-text flex flex-col gap-2" data-aos="fade-right">
                        <h1 className='font-bold text-5xl'>{"< coder />"}</h1>
                        <p>I'm a Front-end developer who builds clean and efficient code.</p>
                      </div>
                      <div className="hero--caption-icons px-1 py-1" data-aos="fade-right">
                        <span>console.<em className='font-normal text-amber-500'>log</em></span>
                        <label className='text-amber-500'>
                          ({<span contentEditable= "true" className='text-green-500'>"log message"</span>});
                        </label>
                      </div>
                    </div>

                  </div>
               </div>


                <div className="project--section w-full" id='projects'>
                  <div className="project--setcion--container w-full py-2">
                    <div className="project--setcion--header flex items-center gap-1 w-full justify-evenly" data-aos="fade-up">
                      <hr /><span className='text-gray-400'>SOME OF MY PROJECTS</span><hr />
                    </div>
                    <Project />
                  </div>
                </div>


                <div className="about--section bg-white shadow w-full" id='about'>
                  <div className="about--setcion--container w-full flex items-center justify-evenly">
                    <div className="about--me-text py-1" data-aos="fade-right">
                      <h2>about me</h2><h4>I'm a UI Designer and a React dev.</h4>
                      <span>
                        i enjoy turning complex problems into simple solution, I'm
                        a disciple and follower of christ i love music and when i'm not dragging pixels 
                        or hunting bugs you can find me on the pitch playing football.
                      </span>
                    </div>
                    <div className="about--me-image pt-2"><img src={me} width={200} data-aos="fade-left"/></div>
                  </div>
                </div>

                <div className="services--section w-full" id='projects'>
                  <div className="services--setcion--container w-full py-2">
                    <div className="services--setcion--header flex items-center gap-1 w-full justify-evenly" data-aos="fade-up">
                      <hr /><span className='text-gray-400'>MY SERVICES</span><hr />
                    </div>
                    <div className="service--card--grid flex items-center flex-wrap gap-5 justify-evenly py-5">
                      {
                        service_card.map((servcard, index)=>(
                          <div className="service--card bg-white shadow flex flex-col gap-1 px-2 py-2" key={index} data-aos="fade-up">
                            <div className="service--card--icon"><i className={servcard.icon}></i></div>
                            <div className="service--card--text">
                              <h4>{servcard.name}</h4><span>{servcard.text}</span>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>

                {/* <Footer /> */}

              </>

            }>
            </Route>
          </Routes>

          <Footer />
        </section>
      </main>

    </>
  )
}

export default App
