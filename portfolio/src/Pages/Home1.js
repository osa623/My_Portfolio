
//All the dependencies 
import React, { useState,useEffect } from 'react';
import '../custom/style.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../custom/stareffect.css';
import Marquee from "react-fast-marquee";
import emailjs from '@emailjs/browser';
import Countup from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faMailForward} from '@fortawesome/free-solid-svg-icons';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

//social media icons

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';


// Main-Image files
import namelogo from '../assests/logo_1.png';
import sample from '../assests/sample.png';
import about from '../assests/about.png';
import mytools from '../assests/my tools.png';
import myworks from '../assests/my works.png';
import socialcircle from '../assests/social circle.png';
import bwlogo from '../assests/bwlogo.png';

//sections images


import moonbg from '../assests/moonbg.png';
import moonbackground from '../assests/moonbackground.png';
import earthimage from '../assests/earthimage.png';
import astronut from '../assests/astronut.png';



//mobile app images

import callbook from '../assests/mobile Apps/callbook.png';
import shilpadotlk from '../assests/mobile Apps/Shilpadotlk.png';
import paycue from '../assests/mobile Apps/paycue.png';

//Dev-tools image files

import html from '../assests/devtools/html.png';
import css from '../assests/devtools/css.png';
import js from '../assests/devtools/js.png';
import tailwind from '../assests/devtools/tailwind css.png';
import react from '../assests/devtools/react.png';
import node from '../assests/devtools/node.png';
import kotlin from '../assests/devtools/kotlin.png';
import next from '../assests/devtools/next.js.png';
import flutter from '../assests/devtools/flutter.png';
import php from '../assests/devtools/php.png';
import mongodb from '../assests/devtools/mongodb.png';
import androidstudio from '../assests/devtools/android studio.png';
import aftereffects from '../assests/devtools/after effects.png';
import adobepp from '../assests/devtools/premiere pro.png';
import illustrator from '../assests/devtools/illustrator.png';
import photoshop from '../assests/devtools/photoshop.png';

// Effect backgrounds
import Stareffect from '../utils/Stareffect';
import Typewritereffect from '../utils/Typewritereffect';
import Typewrittermobile from '../utils/Typewrittermobile';

//video files
import samplevideo from '../assests/Comp 1.mp4'





const Home1 = () => {

  //count animation
const [CounterOn, setCounterOn] = useState(false);

// navigation bar mobile res
const [nav, setNav] = useState(false);


//email sending part 

const [formSubmit, setFormSubmit] = useState(false);

const handleSubmit = (event) => {
  event.preventDefault();

  emailjs.sendForm('service_0xi9jwq', 'template_ua7ckvq', event.target, 'goVOCoAqSw4rEeUqN')
    .then((result) => {
        console.log(result.text);
        setFormSubmit(true);

        setTimeout(() => {
          setFormSubmit(false);
        }, 3000);
    }, (error) => {
        console.log(error.text);
    });
};

   const handleNav = () => {
    setNav(!nav);
   }


   //icon


   // Initialize AOS
   useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);



  
// devtool image array
  const devtools = [
    {name:'HTML', path: html },
    {name:'CSS', path: css},
    {name:'JS', path: js},
    {name:'NODE', path: node},
    {name:'TAILWIND', path: tailwind},
    {name:'REACT', path: react},
    {name:'KOTLIN', path: kotlin},
    {name:'NEXT', path: next},
    {name:'FLUTTER', path: flutter},
    {name:'PHP', path: php},
    {name:'Mongo DB', path: mongodb},
    {name:'Android Studio', path: androidstudio},
    {name:'After effects', path: aftereffects},
    {name:'Premiere Pro', path: adobepp},
    {name:'Illustrator', path: illustrator},
    {name:'Illustrator', path: photoshop}


    
  
  ];
    
  return (
    <main className='relative h-auto w-full bg-secondary '>
      <Stareffect/>
      <section className='relative flex-col h-auto w-full' id='home'>

        <div className='flex flex-col h-auto w-full justify-between lgs:justify-center'>
                <div className='hidden mds:flex lgs:flex lgs:justify-center bg-secondary mds:justify-center sms:justify-start cursor-pointer p-5'>
                  <img src={namelogo} alt='Logo' style={{ 
                    
                    width: '250px' }} />

                </div>
                <div className='flex lgs:w-full mds:w-full mds:justify-center bg-secondary lgs:justify-center mds:items-center lgs:p-2'>
                    <ul className='hidden mds:flex mds:w-[75vw] lgs:flex text-sm gap-10 font-kanit z-50'>
                                  <li className='hover-effect'>
                                  <span className='hover-effect-text'><a href='#home'>Home</a></span>
                                   </li>
                                  <li className='hover-effect'>
                                  <span className='hover-effect-text'><a href='#mobile-apps'>Mobile Apps</a></span>
                                   </li>
                                  <li className='hover-effect'>
                                    <span className='hover-effect-text'><a href='#web-apps'>Web Desings</a></span>
                                  </li>
                                  <li className='hover-effect'>
                                    <span className='hover-effect-text'><a href='#social-circle'>Social Circle</a></span>
                                  </li>
                    </ul>
                 </div>

          </div> 
          <div className='flex h-auto w-full justify-between'>  

          <div className='hidden sms:flex items-center md:justify-center sm:justify-start w-auto cursor-pointer p-5'>
                  <img src={namelogo} alt='Logo' style={{ 
                    
                    width: '300px' }} />

                </div>

                  <div className='flex h-auto w-auto justify-center items-center'>
                    <div className="mds:hidden lgs:hidden transition-transform w-[15vw] " onClick={handleNav} style={{
                             transitionDuration:'200s'
                     }}>
                         {nav ? <AiOutlineClose size={30} color="#FFFFFF" /> : <AiOutlineMenu size={30} color="#FFFFFF" />}
                    </div>
                  </div>
            
             <div className={
                        nav
                          ? 'fixed flex-col space-y-10 left-0 top-0 w-[75%] sms:w-100 md:w-[40%] h-full border-r rounded-r-3xl border-r-gray-400 bg-secondary ease-in-out duration-500 z-50'
                          : 'fixed flex-col space-y-10 left-[-100%] top-0 w-[75%] sm:w-[50%] md:w-[40%] h-full ease-in-out duration-500'
                      } 
                    >
              <ul className="p-4 font-russoone text-primary items-center justify-center">
                        <div className="flex items-center justify-center">
                          <img src={namelogo} alt="bwlogo" className="h-10 w-auto m-4" />
                        </div>
                              <li className="p-4 border-b border-gray-600 text-center"><a href='/home'>Home</a></li>
                              <li className="p-4 border-b border-gray-600 text-center"><a href='/reviews'>Mobile Apps</a></li>
                              <li className="p-4 border-b border-gray-600 text-center"><a href='/articles'>Web Designs</a></li>
                              <li className="p-4 border-b border-gray-600 text-center"><a href='/about'>Social Circle</a></li>
              </ul>
              <div className='absolute flex sms:bottom-20 w-full h-auto gap-6 items-center justify-center p-3'>
                     <div className='flex h-0.5 w-[80vw] bg-primary mx-1'/>
                     <span class="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="currentColor"
                                                  class="text-gray-400  hover:scale-150 transition-transform"
                                                  viewBox="0 0 320 512">
                                                  <path
                                                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                </svg>
                                      </span>
                                      <span class="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer ">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="currentColor"
                                                  class="text-gray-400  hover:scale-150 transition-transform"
                                                  viewBox="0 0 448 512">
                                                      <path
                                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                                </svg>
                                      </span>
                                      <span class="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor"
                                                      class="text-gray-400  hover:scale-150 transition-transform"
                                                      viewBox="0 0 448 512">
                                                      <path
                                                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                                    </svg>
                                       </span>
                                       <span class="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer">
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        class="text-gray-400 hover:scale-150 transition-transform "
                                                        viewBox="0 0 640 512">
                                                        <path
                                                          d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                                                      </svg>
                                       </span>
                                       <span class="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          fill="currentColor"
                                                          class="text-gray-400  hover:scale-150 transition-transform"
                                                          viewBox="0 0 496 512">
                                                          <path
                                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                                        </svg>
                                         </span>
                      <div className='flex h-0.5 w-[80vw] bg-primary mx-1'/>
              </div>
          
              </div>                
              </div>
              <div className='flex flex-col sms:justify-center items-center mds:justify-start mds:w-full mds:h-auto lgs:h-auto lgs:bg-gradient-to-b from-secondary mds:bg-gradient-to-b from-secondary to-transparent sms:h-auto mr-auto overflow-hidden pl-2'>

                {/* Elements in when the scale size is small */}

                      <div className='sm:hidden  flex flex-col w-full h-auto bg-transparent items-center justify-center p-2'>
                          <img src={sample} alt='' style={{
                            width:'420px'
                          }}/>
                      
                      </div>

                {/* Elements in when the scale size is medium and large */}

                      <div className='hidden lgs:flex mds:flex flex-col  mds:w-auto mds:h-auto lgs:pt-2 lgs:h-auto mds:justify-start lgs:justify-start lgs:mb-1 mds:m-10 lgs:overflow-hidden z-40'>
                        
                        

              
                         <h2 className='text-center font-russoone font-bold lgs:w-[100vw] mds:w-auto text-primary' style={{
                             fontSize: 'calc(2vw + 1rem)',
                             height:'50px'
                          }}>{''}<span className='text-4xl'>Imagine. Build. Achieve.</span>{''}</h2> 
                          
                       
                          <h2 className='text-center font-russoone font-bold lgs:w-[100vw] mds:w-auto text-fontbasic' style={{
                             fontSize: 'calc(5vw + 2rem)',
                             height:'100px'
                          }}>{''}<span className='text-wrap text-baseprimary'>Full Stack</span>{' '}DEV</h2>

                          <div className='flex justify-center'>
                            <div className='flex bg-primary h-2 lgs:w-[40vw] mds:w-[50vw] lgs:mt-10 rounded-full' data-aos='flip-left'/>
                            </div>
                          <Typewritereffect/>

                          <div className='flex h-auto w-full justify-center lgs:p-2'>
                                <motion.div
                                initial={{width:'0'}}
                                whileInView={{width:'25vw'}}
                                transition={{duration:'2', ease:'easeInOut', delay:'0.3'}}
                                className='flex flex-row  lgs:h-[8vh] bg-primary  justify-center items-center rounded-full mds:w-1/2 lgs:w-1/4'>
                                   <motion.div
                                   initial={{opacity:0}}
                                   whileInView={{opacity:1}}
                                   transition={{duration:'4', ease:'easeInOut', delay:'0.3'}}
                                   className='flex h-auto w-auto lgs:space-x-5 mds:p-5 mds:space-x-2'>
                                      <FontAwesomeIcon icon={faFacebook} alt='' className='lgs:h-8 mds:h-5 w-auto cursor-pointer  transform transition-transform duration-500 ease-in-out hover:scale-125'/>
                                      <FontAwesomeIcon icon={faInstagram} alt='' className='lgs:h-8 mds:h-5 w-auto cursor-pointer  transform transition-transform duration-150 ease-in-out hover:scale-125'/>
                                      <FontAwesomeIcon icon={faGithub} alt='' className='lgs:h-8  mds:h-5 w-auto cursor-pointer  transform transition-transform duration-150 ease-in-out hover:scale-125'/>
                                      <FontAwesomeIcon icon={faDiscord} alt='' className='lgs:h-8 mds:h-5 w-auto cursor-pointer  transform transition-transform duration-150 ease-in-out hover:scale-125'/>
                                      <FontAwesomeIcon icon={faLinkedin} alt='' className='lgs:h-8 mds:h-5 w-auto cursor-pointer  transform transition-transform duration-150 ease-in-out hover:scale-125'/>
                                  </motion.div>
                                </motion.div>
                          </div>

                      </div>



                <div className='hidden sms:flex flex-col justify-start items-center sms:w-full sms:h-auto  mds:w-full mds:h-auto mds:mr-auto sms:mr-0  overflow-hidden mds:pl-2 space-y-1'>
                   
                    {/* Elements in when the scale size is small */}


                              <div className='sm:hidden flex items-center justify-center w-full h-auto'>
                                <h2 className='font-russoone text-primary' style={{
                                  fontSize:'110px'
                                }}>I'M</h2>
                                    <div className='flex flex-col w-auto h-auto'>
                                      <h2 className='font-russoone text-5xl text-[#fdd122]'>Osanda</h2>
                                      <h2 className='font-russoone  text-primary' style={{
                                          fontSize:'30px'
                                        }}>uthukumarana</h2>
                                    </div>  
          
                              </div>

                              <div className='sm:hidden flex bg-baseprimary w-40 h-1 rounded-2xl'/>

                              <div className='sm:hidden flex flex-col w-[90vw] h-auto items-center justify-start'>
                                      <h1 className='flex font-russoone text-center text-primary ' style={{
                                        fontSize:'65px',
                                        height:'60px'
                                      }}>Front-end</h1>
                                      <h2 className='flex  font-russoone text-[#fdd122]' style={{
                                        fontSize:'70px',
                                        
                                        
                                      }}>
                                        Developer
                                      </h2>
                              </div>
                              <div className='sm:hidden flex bg-primary w-40 h-1 rounded-2xl'/>
                              
                              <div className='sm:hidden flex flex-col w-[30vw] h-auto items-center justify-start'>
                                      <h1 className='flex font-londrina text-center text-primary ' style={{
                                        fontSize:'70px',

                                        
                                      }}>AND</h1>
                              </div>
                              <div className='sm:hidden flex bg-baseprimary w-40 h-1 rounded-2xl'/>

                              <div className='sm:hidden flex w-auto items-center justify-start space-x-5' data-aos='fade-up'>

                                      <Typewrittermobile/>
                              </div>    
                              <div className='sm:hidden flex flex-col w-auto h-auto items-start justify-center p-5' data-aos='zoom-in' data-aos-delay='800'>
                                      <button className='flex bg-gradient-to-t from-[#28D146] to-[#5FFC7B] rounded-3xl w-[50vw] h-[5vh] text-3xl text-[#3e3737] font-bold font-bebasneue items-center justify-center'>{''}<span>
                                          <FontAwesomeIcon icon={faPhone} className='p-1 mr-2 text-primary' style={{
                                            width:'25px',
                                            height:'auto'
                                          }}/>
                                        
                                        </span>{''}Contact me</button>      
                              </div>    


                           
                                        
                        </div> 
                        </div>
                </section>
      
      {/*<div className='hidden mds:flex h-[20vh] w-full bg-transparent'/>  => additional one*/} 
     
      <section className='flex mds:flex-row mds:h-auto sms:h-auto max-w-full border-none items-center justify-start cursor-default mds:mt-10 lgs:mt-20 overflow-hidden'>
                  
                  <div className='hidden sms:flex flex-col w-full h-auto bg-primary  items-center space-y-4'>
                        <div className='flex flex-col h-auto w-[75vw] ml-2 items-center pt-10'>
                                  <img src={about} alt=''style={{
                    
                                  }} 
                                  data-aos='flip-up'/>
                          </div>

                        <div className='flex flex-col h-auto w-[75vw] ml-2 items-start justify-center pt-5'>
                            <p className=' w-auto items-center text-secondary text-center font-poppins font-light text-md'>{''}<span className='font-poppins text-2xl font-bold text-secondary'>I</span>{''} am a {''}<span className='font-londrina text-xl font-bold text-[#133b5c]'>Front-End Developer</span>{' '},Currently an undergraduate at SLIIT. have a strong foundation in web development, crafting frontend and robust backend systems,along with experience in mobile app development. My goal is to expand my expertise and leverage cutting-edge technologies for impactful solutions.I also enjoy creating automobile content and editing videos , showcasing my versatility and creativity</p> 
                         </div>
                        <div className='flex h-auto w-auto items-center justify-center'>
                            <button className='bg-[#ffb700] flex  w-20 h-20 rounded-xl items-center justify-center text-xl font-russoone space-x-2 mb-2 cursor-pointer border-2 shadow-xl hover:border-black'>
                            <h2 className='font-londrina text-4xl text-secondary'>CV</h2>
                                  <div className='flex h-auto w-auto'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                              </svg>
                                 </div>
                      </button>
                        </div>

                  </div>
                
            {/*medium and large screen size configurations*/}      
                      
                  <div className='hidden mds:flex lgs:flex h-auto w-auto'> 
                      <div className='flex lgs:w-[40vw] mds:w-[50vw] lgs:h-auto p-2 z-40 lgs:ml-10 rounded-full lgs:justify-center overflow-hidden' data-aos='fade-right'>
                      <video src={samplevideo} autoPlay loop muted playsInlin/>
                      </div>
                      
                      <div className='flex flex-col lgs:w-[60vw] lgs:justify-start mds:w-[50vw] items-center lgs:h-auto p-2 lgs:space-y-5'>
                          <div className='h-auto lgs:w-[30vw] justify-center items-center mds:p-4'>
                                      <img src={about} alt=''style={{
                        
                                      }} 
                                      data-aos='flip-up'/>
                              </div>
                              <div className='h-auto lgs:w-[45vw]  lgs:items-start lgs:justify-center lgs:pt-5 mds:p-2'>
                                     <p className=' w-auto cursor-pointer  text-fontsecondary font-dmsans font-light text-left lgs:text-lg mds:text-sm' style={{
                                 
                                     }} data-aos='fade-left'>{''}<span className='font-dmsans text-3xl font-bold text-primary'>I AM</span>{''} Osanda Muthukumarana, currently an undergraduate at SLIIT, has a strong foundation in Web Development, crafting Dynamic Front-End Interfaces and Robust Back-End Systems. With experience in Mobile Application Development, I aim to leverage cutting-edge technologies for impacful solution.Beyond technical skills, I enjoys creating Automobile Content and Editing Videos showcasing my versatility and creativity. My dedication to both technology and creative expression allows me to approach projects holistically, ensuring they are functional and engaging. As I continue to grow, I strive to contribute significantly to the tech industry and automotive content creation.</p> 
                              </div>
                              <button class="group relative lgs:h-12 lgs:w-[15vw] mds:w-[20vw] mds:h-8  overflow-hidden rounded-xl bg-white lgs:text-lg mds:text-md shadow mds:m-5" data-aos='fade-up' data-aos-delay='250'>
                                     <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                     <span class="relative text-black font-russoone group-hover:text-white hover:font-bold transition-all duration-[100ms] hover:ease-out">My Resume</span>
                              </button>
                              
                            

                      </div>

                   </div>   

      </section>
      
      <div className='hidden sms:flex md:h-[10vh] max-w-full justify-center items-center m-5'>
          <div className='flex h-1 w-[60vw] bg-primary rounded-3xl' data-aos='flip-left'/>
      </div> 
      


        <section className='flex sms:h-auto max-w-full items-center justify-center overflow-hidden lg:mt-5'>

      
                {/* small size screen configs */}
                  
                <div className='hidden sms:flex flex-col bg-primary w-full h- items-center justify-center space-y-3'>
                  <div className='flex items-center justify-center h-auto w-[75vw] mt-5'>
                      <img src={mytools} alt='' data-aos='flip-down' data-aos-delay='400'/>
                  </div>

                  <div className='flex flex-col items-center justify-center'>
                      <p className='w-[75vw] h-auto text-center font-poppins font-light text-md'>These are the main tools and languages I use to create projects, building responsive and efficient applications with strong front-end and back-end foundations for tailored solutions</p>
                  </div>

                  <div className='flex flex-col w-full h-auto items-center justify-center'>
                      <div className='grid grid-flow-row grid-cols-4 gap-4 p-5'>
                        {devtools.map((brand,index) =>(
                            <div key={index} className='border-2 border-secondary rounded-xl pt-2'>
                              <img src={brand.path}
                                  alt={brand.name}
                                  className='w-30 h-30 ' style={{
                                    objectFit:'contain'
                                  }} data-aos='flip-down'/>
                                  
                                  </div>

                        ))}
                      </div>
                  </div>
                </div>

                {/* medium and large screen configs */}

                <div className='hidden lgs:flex mds:flex h-auto w-full'>
                      <div className='flex flex-col h-auto lgs:w-[40vw] mds:w-[50vw] lgs:justify-center mds:items-center lgs:items-center lgs:space-y-2'>
                            <div className='flex items-center lgs:w-[30vw] mds:w-[40vw] justify-center  h-auto mt-5 lgs:p-5'>
                                <img src={mytools} alt='' data-aos='flip-down' data-aos-delay='400'/>
                            </div>
                            <div className='flex flex-col items-center justify-center lgs:w-[35vw] mds:p-5'>
                                <p className=' h-auto text-center font-dmsans text-primary font-light lgs:text-lg mds:text-sm' data-aos='fade-right'>{''}<span className='lgs:text-3xl mds:text-2xl font-bold'>These</span>{''} are the main tools and languages I use to create projects, building responsive and efficient applications with strong front-end and back-end foundations for tailored solutions. I leverage modern frameworks and libraries to ensure scalability and performance, while maintaining clean, maintainable code. My approach is rooted in best practices and continuous learning to stay updated with the latest industry trends, ensuring each project not only meets but exceeds client expectations.</p>
                            </div>

                      </div>
                      <div className='flex flex-col h-auto lgs:w-[60vw] mds:w-[50vw] justify-center items-center'>
                            <div className='flex lgs:h-[20vh] lgs:w-[50vw] mr-5'>
                                  <Marquee className='overflow-hidden'>
                                      {devtools.map((brand, index) =>(
                                          
                                          <div key={index} className='flex flex-col items-center justify-center rounded-l-full '  data-aos='fade-up'>
                                              
                                              <img src={brand.path} className='lgs:w-[8vw] mds:w-[10vw]' alt='tools array'/>
                                              
                                              
                                          </div>
                                      ))};
                              
                                  </Marquee>
                                  
                            </div>
                            <div className='flex lgs:h-[20vh] lgs:w-[50vw] mr-5'>
                                  <Marquee direction='right' className=''>
                                      {devtools.map((brand, index) =>(
                                          
                                          <div key={index} className='flex flex-col items-center justify-center rounded-l-full'  data-aos='fade-down'>
                                              
                                              <img src={brand.path} alt=''className='lgs:w-[8vw] mds:w-[10vw]'/>
                                              
                                              
                                          </div>
                                      ))};
                              
                                  </Marquee>
                                  
                            </div>


                      </div>
    

                </div>

                 
                </section>

                <div className='relative flex mds:h-[15vh] lgs:h-[10vh] max-w-full'/> 

                <section className='relative h-auto max-w-full overflow-hidden'>
                    <div className=' hidden sms:flex flex-col h-auto max-w-full items-center justify-center pt-5 space-y-5'>\

                                {/*Image for large and medium screen models*/}

                                <div className='hidden md:flex h-auto w-full items-center justify-center'>
                                      <img src={myworks} alt='' style={{
                                        width:'500px'
                                      }} data-aos='zoom-in' data-aos-delay='300'/>
                                </div> 

                                {/*Image for small screen models*/}

                                <div className='hidden sms:flex h-auto w-[75vw] items-center justify-center'>
                                      <img src={myworks} alt='' style={{
                                        width:'500px'
                                      }} data-aos='zoom-in' data-aos-delay='300'/>
                                </div> 

                                {/*Image for small screen models*/}

                                <div className='hidden sms:flex h-auto w-full items-start justify-center space-x-2 overflow-hidden' data-aos='zoom-out' data-aos-delay='350'>
                                  <h2 className='flex items-start justify-start text-7xl font-russoone text-baseprimary lg:mb-20'>T</h2>
                                  <p className='flex w-[75vw] h-auto text-md  text-justify text-primary font-poppins'>hese are some of the web applications and mobile applications I've built, showcasing my skill in creating responsive and innovative solutions.</p>
                                </div>

                                <div className='sm:hidden flex flex-col h-auto w-full items-center justify-center bg-primary p-5 space-y-5'>
                                      <div className='flex flex-col bg-primary w-full h-auto border-double border-secondary border-4 rounded-xl items-center justify-start p-2 space-y-5 overflow-hidden' data-aos='flip-right'>
                                        <h2 className='flex text-justify font-londrina font-bold text-5xl text-baseprimary bg-secondary rounded-lg p-2'>CallBook</h2>
                                        
                                          <img src={callbook} alt='' style={{
                                            width:'300px'
                                          }}/>

                                        <p className='flex w-[75vw] font-poppins text-center text-secondary text-md '>
                                        Callbook is a simple mobile app for organizing and accessing all your contacts in one place. Easily manage your network with an intuitive interface.
                                        </p>

                                        <button className='flex bg-baseprimary text-primary font-poppins justify-center p-1 w-[50vw] h-auto text-xl rounded-full'>
                                          Check This Out
                                        </button>

                                      </div>
                                      <div className='flex flex-col bg-primary w-full h-auto border-double border-secondary border-4 rounded-xl items-center justify-start p-2 space-y-5' data-aos='flip-left'>
                                        <h2 className='flex text-justify font-londrina font-bold text-5xl text-[#ffd024] bg-secondary rounded-lg p-2'>Shilpa.lk</h2>
                                        
                                          <img src={shilpadotlk} alt='' style={{
                                            width:'300px'
                                          }}/>

                                        <p className='flex w-[75vw] font-poppins text-center text-secondary text-md '>
                                        Shilpa.lk is a smart and user-friendly student course management platform. Students can easily log in to purchase courses, while teachers can log in to promote their courses and reach a broader audience.
                                        </p>

                                        <h2 className='flex bg-[#d12626]  text-primary font-poppins justify-center p-1 w-[50vw] h-auto text-xl rounded-full'>
                                        Not Available Yet
                                        </h2>

                                      </div>
                                      
                                      <div className='flex flex-col bg-primary w-full h-auto border-double border-secondary border-4 rounded-xl items-center justify-start p-2 space-y-5'data-aos='flip-up'>
                                        <h2 className='flex text-justify font-londrina font-bold text-5xl text-[#69164e] bg-primary shadow-2xl rounded-lg p-2'>PayCue</h2>
                                        
                                          <img src={paycue} alt='' style={{
                                            width:'200px'
                                          }}/>

                                        <p className='flex w-[75vw] font-poppins text-center text-secondary text-md '>
                                        PayCue Payment Planner is a streamlined app for managing your finances. Create, update, and delete payment plans with ease, keeping your budget on track.                            </p>

                                        <button className='flex bg-[#69164e] text-primary font-poppins justify-center p-1 w-[50vw] h-auto text-xl rounded-full'>
                                        <a href='https://github.com/osa623/Payment-Planner-Mobile-Application/tree/master'>Check This Out</a> 
                                        </button>

                                    </div>
                                    <div className='flex h-auto w-full items-center justify-center'>
                                          <h2 className='flex text-xl font-poppins font-semibold text-[#69164e]'>
                                              See more
                                          </h2>
                                    </div>
                                
                                  </div>               
                    </div>

                    
                                {/*componenets for medium and large screen models*/}
                   
                    <div className='hidden mds:flex lgs:flex flex-col h-auto w-full items-center justify-center pt-5 space-y-3'>
                                <div className='flex h-auto mds:w-[40vw] lgs:w-[35vw] items-center justify-center'>
                                      <img src={myworks} alt='' data-aos='zoom-in' data-aos-delay='300'/>
                                </div>  
                                <div className='flex h-auto w-full items-start justify-center space-x-2 overflow-hidden' id='mobile-apps' data-aos='zoom-out' data-aos-delay='350'>
                                  <p className='mds:w-[50vw] lgs:w-[60vw] h-auto lgs:text-lg  text-center text-primary font-dmsans'>{''}<span className='text-2xl'>These</span>{''} are some of the web applications and mobile applications I've built, showcasing my skill in creating responsive and innovative solutions.</p>
                                </div>

                                <div className='flex h-auto w-full items-start justify-center space-x-2 overflow-hidden' data-aos='zoom-in' data-aos-delay='350'>
                                  <h2 className='mds:w-[50vw] lgs:w-[60vw] h-auto lgs:text-4xl  text-center text-primary font-russoone'>Mobile Applications</h2>
                                </div>


                                
                                <div className='flex h-auto w-full items-center justify-center bg-transparent p-5 space-x-5'>
                                      <div className='flex flex-col bg-transparent mds:w-[30vw] lgs:w-[30vw] lgs:h-auto lgs:p-10 mds:p-5   border-double border-primary border-2 rounded-xl items-center lgs:justify-start  p-2 space-y-5 overflow-hidden' data-aos='flip-right'>
                                              <h2 className='flex text-justify font-londrina font-bold text-5xl text-baseprimary cursor-default rounded-lg p-2'>CallBook</h2>
                                              
                                                <img src={callbook} alt='' className='hover:scale-125 transform transition-transform duration-100 ease-in-out' style={{
                                                  width:'175px'
                                                }}/>

                                              <p className='flex lgs:w-[25vw] font-dmsans text-center text-primary lgs:text-md mds:text-sm '>
                                              Callbook is a simple mobile app for organizing and accessing all your contacts in one place. Easily manage your network with an intuitive interface.
                                              </p>

                                              <button class="group relative lgs:h-12 lgs:w-[15vw]  mds:w-[20vw] mds:h-8  overflow-hidden rounded-xl bg-white lgs:text-lg mds:text-md shadow mds:m-5" data-aos='fade-up' data-aos-delay='250'>
                                                <div class="absolute inset-0 w-3 bg-baseprimary transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                                <span class="relative text-black font-russoone group-hover:text-white hover:font-bold transition-all duration-[100ms] hover:ease-out">Check this out {''}<FontAwesomeIcon icon={faGithub} alt=' ' className='relative'/>{''}</span>                      
                                              </button>
                                        

                                      </div>
                                      <div className='flex flex-col bg-transparent mds:w-[30vw]  lgs:w-[30vw]  lgs:h-auto lgs:p-10 mds:p-5  border-double border-primary border-2 rounded-xl items-center justify-start p-2 space-y-5 overflow-hidden' data-aos='flip-left'>
                                                  <h2 className='flex text-justify font-londrina font-bold text-5xl text-[#ffd024] bg-transparent cursor-default  rounded-lg p-2'>Shilpa.lk</h2>
                                                  
                                                    <img src={shilpadotlk} alt='' className='hover:scale-125 transform transition-transform duration-100 ease-in-out' style={{
                                                      width:'175px'
                                                    }}/>

                                                  <p className='flex lgs:w-[25vw] font-dmsans text-center text-primary lgs:text-md mds:text-sm'>
                                                  Shilpa.lk is a smart and user-friendly student course management platform. Students can easily log in to purchase courses, while teachers can log in to promote their courses.
                                                  </p>

                                                  <button class="group relative lgs:h-12 lgs:w-[15vw] mds:w-[20vw] mds:h-8  overflow-hidden rounded-xl bg-white lgs:text-md mds:text-sm shadow mds:m-5" data-aos='fade-up' data-aos-delay='250'>
                                                      <div class="absolute inset-0 w-3 bg-fontbasic transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                                      
                                                      <span class="relative text-black font-russoone group-hover:text-white hover:font-bold transition-all duration-[100ms] hover:ease-out">Not Available Yet {''}<FontAwesomeIcon icon={faGithub} alt=' ' className='relative'/>
                                                        <div className='relative h-auto w-auto justify-center'>
                                                                        
                                                        </div>
                                                     
                                                      {''}</span>                      
                                                  </button> 


                                      </div>
                                      
                                      <div className='flex flex-col bg-transparent mds:w-[30vw]  lgs:w-[30vw]  lgs:h-auto lgs:p-10 mds:p-5   border-double border-primary border-2 rounded-xl items-center justify-start p-2 space-y-5 overflow-hidden'data-aos='flip-up'>
                                                        <h2 className='flex text-justify font-londrina font-bold text-5xl text-[#69164e] cursor-default bg-transparent shadow-2xl rounded-lg p-2'>PayCue</h2>
                                                        
                                                          <img src={paycue} alt='' className='hover:scale-125 transform transition-transform duration-100 ease-in-out' style={{
                                                            width:'175px'
                                                          }}/>

                                                        <p className='flex lgs:w-[25vw] font-dmsans text-center text-primary lgs:text-md mds:text-sm '>
                                                        PayCue Payment Planner is a streamlined app for managing your finances. Create, update, and delete payment plans with ease, keeping your budget on track.                            </p>
                                                        
                                                        <button class="group relative lgs:h-12 lgs:w-[15vw] mds:w-[20vw] mds:h-8  overflow-hidden rounded-xl bg-white lgs:text-lg mds:text-md shadow mds:m-5" data-aos='fade-up' data-aos-delay='250'>
                                                                <div class="absolute inset-0 w-3 bg-[#69164e] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                                                <span class="relative text-black font-russoone group-hover:text-white hover:font-bold transition-all duration-[100ms] hover:ease-out">Check this out {''}<FontAwesomeIcon icon={faGithub} alt=' ' className='relative'/>{''}</span>                      
                                                        </button> 

                                    </div>
                                
                                </div>
                                <div className='flex flex-col h-auto w-auto'>
                                <div className='flex h-auto w-full items-start justify-center space-x-2 overflow-hidden' id='web-apps' data-aos='zoom-in' data-aos-delay='350'>
                                  <h2 className='mds:w-[50vw] lgs:w-[60vw] h-auto lgs:text-4xl  text-center text-primary font-russoone'>Web Applications</h2>
                                </div>
                                <div className='flex h-auto w-full items-center justify-center bg-transparent p-5 space-x-5'>
                                      <div className='flex flex-col bg-transparent mds:w-[30vw] lgs:w-[30vw] lgs:h-auto lgs:p-10 mds:p-5   border-double border-primary border-2 rounded-xl items-center lgs:justify-start  p-2 space-y-5 overflow-hidden' data-aos='flip-right'>
                                              <h2 className='flex text-justify font-londrina font-bold text-5xl text-[#69164e] cursor-default rounded-lg p-2'>Baos Wheels</h2>
                                              
                                                <img src={callbook} alt='' className='hover:scale-125 transform transition-transform duration-100 ease-in-out' style={{
                                                  width:'175px'
                                                }}/>

                                              <p className='flex lgs:w-[25vw] font-dmsans text-center text-primary lgs:text-md mds:text-sm '>
                                              Baos Wheels is an automotive entertainment platform where you can watch reviews, read articles, and explore a wealth of content related to cars and the auto industry.
                                              </p>

                                              <button class="group relative lgs:h-12 lgs:w-[15vw]  mds:w-[20vw] mds:h-8  overflow-hidden rounded-xl bg-white lgs:text-lg mds:text-md shadow mds:m-5" data-aos='fade-up' data-aos-delay='250'>
                                                <div class="absolute inset-0 w-3 bg-[#69164e] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                                <span class="relative text-black font-russoone group-hover:text-white hover:font-bold transition-all duration-[100ms] hover:ease-out">Check this out {''}<FontAwesomeIcon icon={faEarth} alt=' ' className='relative pl-1'/>{''}</span>                      
                                              </button>
                                        

                                      </div>
                                      <div className='flex flex-col bg-transparent mds:w-[30vw]  lgs:w-[30vw]  lgs:h-auto lgs:p-10 mds:p-5  border-double border-primary border-2 rounded-xl items-center justify-start p-2 space-y-5 overflow-hidden' data-aos='flip-left'>
                                                  <h2 className='flex text-justify font-londrina font-bold text-5xl text-[#ffd024] bg-transparent cursor-default  rounded-lg p-2'>Chocomate</h2>
                                                  
                                                    <img src={shilpadotlk} alt='' className='hover:scale-125 transform transition-transform duration-100 ease-in-out' style={{
                                                      width:'175px'
                                                    }}/>

                                                  <p className='flex lgs:w-[25vw] font-dmsans text-center text-primary lgs:text-md mds:text-sm'>
                                                  ChocoMate is a chocolate factory website where you can explore and purchase a wide variety of delectable chocolate products. From handcrafted truffles to rich chocolate bars.
                                                  </p>

                                                  <button class="group relative lgs:h-12 lgs:w-[15vw] mds:w-[20vw] mds:h-8  overflow-hidden rounded-xl bg-white lgs:text-md mds:text-sm shadow mds:m-5" data-aos='fade-up' data-aos-delay='250'>
                                                      <div class="absolute inset-0 w-3 bg-fontbasic transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                                      
                                                      <span class="relative text-black font-russoone group-hover:text-white hover:font-bold transition-all duration-[100ms] hover:ease-out">Check this out {''}<FontAwesomeIcon icon={faGithub} alt=' ' className='relative'/>
                                                        <div className='relative h-auto w-auto justify-center'>
                                                                        
                                                        </div>
                                                     
                                                      {''}</span>                      
                                                  </button> 


                                      </div>
                                      
                                      <div className='flex flex-col bg-transparent mds:w-[30vw]  lgs:w-[30vw]  lgs:h-auto lgs:p-10 mds:p-5   border-double border-primary border-2 rounded-xl items-center justify-start p-2 space-y-5 overflow-hidden'data-aos='flip-up'>
                                                        <h2 className='flex text-justify font-londrina font-bold text-5xl text-[#afadae] cursor-default bg-transparent shadow-2xl rounded-lg p-2'>Clickmate</h2>
                                                        
                                                          <img src={paycue} alt='' className='hover:scale-125 transform transition-transform duration-100 ease-in-out' style={{
                                                            width:'175px'
                                                          }}/>

                                                        <p className='flex lgs:w-[25vw] font-dmsans text-center text-primary lgs:text-md mds:text-sm '>
                                                        ClickMate is a photography management system where you can hire photographers, purchase photo collections, and customize photo albums.</p>
                                                        
                                                        <button class="group relative lgs:h-12 lgs:w-[15vw] mds:w-[20vw] mds:h-8  overflow-hidden rounded-xl bg-white lgs:text-lg mds:text-md shadow mds:m-5" data-aos='fade-up' data-aos-delay='250'>
                                                                <div class="absolute inset-0 w-3 bg-[#afadae] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                                                <span class="relative text-black font-russoone group-hover:text-white hover:font-bold transition-all duration-[100ms] hover:ease-out">Check this out {''}<FontAwesomeIcon icon={faGithub} alt=' ' className='relative'/>{''}</span>                      
                                                        </button> 

                                    </div>
                                
                                </div>

                                </div>




                       </div>

      </section>

      <div className='hidden md:flex h-[5vh] max-w-full'/> 

   <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      <section className='relative h-auto max-w-full overflow-hidden'>

        {/*small screen configs */}

              <div className='sm:hidden flex flex-col h-auto w-auto items-center space-y-4'>
                <div className='flex flex-col w-[75vw] h-auto items-center justify-center space-y-4 p-2'>
                                <img src={socialcircle} alt='' style={{
                                  width:'500px'
                                }} data-aos='fade-right' data-aos-delay='300'/>
                 </div>
                 <div className='flex h-auto w-[90vw] items-start justify-center space-x-1 cursor-default ' data-aos='zoom-in' data-aos-delay='350'>
                                <h2 className='flex items-start justify-start text-7xl font-russoone text-baseprimary lg:mb-10'>D</h2>
                                <p className='flex w-[90vw] h-auto text-md text-justify text-primary font-poppins font-light '>ev life aside, Baos Wheels is where my passion for automobiles shines. As an automobile content creator, I share insightful reviews, captivating stories, and the latest trends in the automotive industry, including mechanical explanations to engage enthusiasts and curious minds alike.</p>
                 </div>
                 <div className='flex flex-col h-a w-full items-center justify-center space-y-8 bg-primary p-2' data-aos='flip-down' data-aos-delay='200'>
                                <img src={bwlogo} alt='' style={{
                                  width:'150px',
                            
                                }} className='rounded-full border-2 shadow-2xl shadow-baseprimary border-secondary' data-aos='flip-right'/>
                              <div className='flex flex-col h-auto w-[25vw] items-center justify-center space-y-1' data-aos='zoom-in'>
                                    <div className='flex h-auto w-auto items-center justify-center'>
                                      <h2 className='flex text-secondary text-7xl font-russoone text-center'>{CounterOn && <Countup start={0} end={45000} duration={2} delay={0.2}/>}</h2>
                                      <h2 className='flex text-secondary text-7xl font-russoone text-center'>+</h2>
                                    </div>
                                    <h2 className='flex text-[#3a3a3a] text-6xl font-russoone font-bold text-center'>Supporters</h2>
                                    <h2 className='flex text-secondary w-[75vw] text-2xl font-londrina font-light text-center'>Have gathered from all the main and popular platforms</h2>
                              </div>
                              <div className='flex h-[10vh] w-auto items-center justify-center space-x-5'>
                                  <button className='bg-transparent border-blue-700 w-10 h-10 rounded-xl items-center justify-between text-primary font-russoone' data-aos='fade-left' data-aos-delay='300'> 
                                  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/facebook-new.png" alt="facebook-new" className='hover:scale-125 transition-transform' style={{transitionDuration:'0.5s'}}/>          
                                      </button>
                                  <button className='w-10 h-10 text-xl rounded-xl text-center text-primary font-russoone ' data-aos='fade-left' data-aos-delay='300'>
                                  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/tiktok--v1.png" alt="tiktok--v1" className='hover:scale-125 transition-transform' style={{transitionDuration:'0.5s'}}/>
                                  </button>
                                  <button className='w-10 h-10 text-xl rounded-xl text-center text-primary font-russoone' data-aos='fade-left' data-aos-delay='350'>
                                  <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/instagram-new--v1.png" alt="instagram-new--v1" className='hover:scale-125 transition-transform' style={{transitionDuration:'0.5s'}}/>
                                  </button>
                                  <button className='w-10 h-10 text-xl rounded-xl text-center text-primary font-russoone' data-aos='fade-left' data-aos-delay='400'>
                                  <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/youtube-play.png" alt="youtube-play" className='hover:scale-125 transition-transform' style={{transitionDuration:'0.5s'}}/>
                                  </button>
                                  <button className='w-10 h-10 text-xl rounded-xl text-center text-primary font-russoone' data-aos='fade-left' data-aos-delay='450'>
                                  <img width="50" height="50" src="https://img.icons8.com/ios/50/domain--v1.png" alt="domain--v1" className='hover:scale-125 transition-transform' style={{transitionDuration:'0.5s'}}/>
                                  </button>
                              </div>
                  </div>
                        
              </div>

              
        {/*medium and large screen configs */}
      
              <div className='hidden mds:flex lgs:flex w-auto h-auto mds:z-30'>
                        <div className='flex h-[60vh] max-w-full items-center justify-start space-x-3' id='social-circle'>
                          <div className='flex flex-col w-[35vw] h-auto items-center justify-center space-y-4 p-2'>
                              <img src={socialcircle} alt='' style={{
                              }} data-aos='fade-right' data-aos-delay='300'/>
                              <div className='flex h-auto w-[30vw] items-start justify-center space-x-1 cursor-default ' data-aos='zoom-in' data-aos-delay='350'>
                                <p className='lgs:w-[30vw] h-auto lgs:text-md mds:text-sm text-justify text-primary font-dmsans font-light '>{''}<span className='font-bold text-3xl'>Dev</span>{''} life aside, Baos Wheels is where my passion for automobiles shines. As an automobile content creator, I share insightful reviews, captivating stories, and the latest trends in the automotive industry, including mechanical explanations to engage enthusiasts and curious minds alike.</p>
                              </div>
                          </div>
                          <div className='flex lgs:h-auto lgs:w-[60vw] mds:h-auto  mds:w-[60vw] mds:p-5 items-center lgs:p-5 justify-center space-x-8 border-4 border-gray-600 bg-primary rounded-xl' data-aos='flip-down' data-aos-delay='200'>
                                <img src={bwlogo} alt='' style={{
                                  width:'150px',
                            
                                }} className='rounded-full border-2 border-secondary mds:h-auto' data-aos='flip-right'/>
                              <div className='flex flex-col h-auto lgs:w-[25vw] mds:w-[20vw] items-center justify-center' data-aos='zoom-in'>
                                    <div className='flex h-auto w-[30vw] items-center justify-center'>
                                      <h2 className='flex text-secondary lgs:text-7xl mds:text-4xl font-russoone text-center'>{CounterOn && <Countup start={0} end={45000} duration={2} delay={0.2}/>}</h2>
                                      <h2 className='flex text-secondary lgs:text-7xl mds:text-4xl font-russoone text-center'>+</h2>
                                    </div>
                                    <h2 className='flex text-[#3a3a3a] lgs:text-4xl mds:text-2xl font-russoone font-bold text-center'>Supporters</h2>
                                    <h2 className='flex text-secondary lgs:w-[22vw] mds:w-[25vw] lgs:text-2xl mds:text-lg font-dmsans text-center'>Have gathered from all the main and popular platforms</h2>
                              </div>
                              <div className='flex flex-col h-auto w-[15vw] items-center justify-center space-y-2'>
                                  <button className=' bg-blue-700 w-[10vw] lgs:h-[4vh] mds:h-[5vh] lgs:text-xl mds:text-sm rounded-xl text-center text-primary font-russoone' data-aos='fade-left' data-aos-delay='250'>Facebook</button>
                                  <button className=' bg-secondary w-[10vw] h-[4vh] mds:h-[5vh] lgs:text-xl mds:text-sm rounded-xl text-center text-primary font-russoone' data-aos='fade-left' data-aos-delay='300'>Tiktok</button>
                                  <button className=' bg-red-600 w-[10vw] lgs:h-[4vh] mds:h-[5vh] lgs:text-xl mds:text-sm rounded-xl text-center text-primary font-russoone' data-aos='fade-left' data-aos-delay='350'>Youtube</button>
                                  <button className=' bg-pink-700 w-[10vw] lgs:h-[4vh] mds:h-[5vh] lgs:text-xl mds:text-sm rounded-xl text-center text-primary font-russoone' data-aos='fade-left' data-aos-delay='400'>Instagram</button>
                                  <button className=' bg-gray-700 w-[10vw] lgs:h-[4vh] mds:h-[5vh] lgs:text-xl mds:text-sm rounded-xl text-center text-primary font-russoone' data-aos='fade-left' data-aos-delay='450'>Web</button>
                              </div>
                          </div>
                        </div>
              </div>  
                              
      </section>
    </ScrollTrigger> 


    <section className='relative  h-auto max-w-full overflow-hidden'>
            <div className='flex flex-col lgs:h-[120vh] w-full'>   
              
              {/*medium and larger screen responsiveness */}
                    <div className='absolute hidden mds:flex lgs:flex bottom-0 lgs:w-full h-auto z-30'>
                      <img src={moonbg} alt='' style={{
                        
                        
                      }}/>
                       </div>
                       <div className='absolute hidden sms:flex bottom-0 max-w-full h-auto z-30'>
                      <img src={moonbg} alt='' style={{
                        width:'auto',
                        height:'350px'
                        
                      }}/>
                       </div>
                    <div className='absolute flex-col bottom-0 bg-gradient-to-t from-secondary to-transparent w-full h-[60vh] z-30'>
                          <div className='flex flex-col w-full h-[50vh] bg-transparent items-center justify-end mt-50'>
                                      <img src={namelogo} alt='' style={{


                                      }} className='w-80 md:max-w-xl  cursor-pointer'/>

                                  <div className='flex h-[5vh] w-[25vw] items-center justify-center bg-transparent space-x-5'>

                                      <span class="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="currentColor"
                                                  class="text-gray-400  hover:scale-150 transition-transform"
                                                  viewBox="0 0 320 512">
                                                  <path
                                                    d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                </svg>
                                      </span>
                                      <span class="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer ">
                                                <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="currentColor"
                                                  class="text-gray-400  hover:scale-150 transition-transform"
                                                  viewBox="0 0 448 512">
                                                      <path
                                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                                </svg>
                                      </span>
                                      <span class="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer">
                                                    <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      fill="currentColor"
                                                      class="text-gray-400  hover:scale-150 transition-transform"
                                                      viewBox="0 0 448 512">
                                                      <path
                                                        d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                                    </svg>
                                       </span>
                                       <span class="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer">
                                                      <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        class="text-gray-400 hover:scale-150 transition-transform "
                                                        viewBox="0 0 640 512">
                                                        <path
                                                          d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                                                      </svg>
                                       </span>
                                       <span class="[&>svg]:h-5 [&>svg]:w-5 cursor-pointer">
                                                        <svg
                                                          xmlns="http://www.w3.org/2000/svg"
                                                          fill="currentColor"
                                                          class="text-gray-400  hover:scale-150 transition-transform"
                                                          viewBox="0 0 496 512">
                                                          <path
                                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                                        </svg>
                                         </span>

                                  </div>
                                  <div className='flex w-full sm:w-[40vw] md:w-[60vw] h-auto bg-transparent items-center justify-center'>
                                  <h2 className='text-primary text-center pt-5 font-mono font-thin'>
                                    2024{' '}<span className='font-russoone cursor-pointer'>Osanda Muthukumarana.</span>{''} All rights reserved.
                                  </h2>
                                </div>

                          </div>
                    </div>
                    <div className='absolute hidden md:flex bottom-5 max-w-full h-auto z-20'>
                      <img src={moonbackground} alt=''/>
                    </div>
                    <div className='absolute  sm:hidden flex bottom-0 max-w-full h-auto z-20'>
                      <img src={moonbackground} alt='' style={{
                        width:'auto',
                        height:'380px'
                      }}/>
                    </div>

                    <div className='flex lgs:flex-col h-auto w-auto'>
 
                                      <form onSubmit={handleSubmit} class="mx-auto mt-16 lgs:max-w-xl sms:mt-20 border-2 lgs:p-10 mds:p-12 rounded-2xl bg-fontsecondary bg-opacity-80 z-50">
                                                 
                                                <h2 className='flex lgs:w-[30vw] h-auto text-start font-russoone text-6xl'>Let's Talk</h2>
                                                
                                                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                                                  
                                                  <div class="sm:col-span-2">
                                                    <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                                                    <div class="mt-2.5">
                                                      <input type="text" name="user_name" id="username" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                                    </div>
                                                  </div>
                                                  <div class="sm:col-span-2">
                                                    <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                                    <div class="mt-2.5">
                                                      <input type="email" name="user_email" id="useremail" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                                    </div>
                                                  </div>
                                                  <div class="sm:col-span-2">
                                                    <label for="message" class="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                                    <div class="mt-2.5">
                                                      <textarea name="message" id="message" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                                    </div>
                                                  </div>
                                                  <div class="flex gap-x-4 sm:col-span-2">
                                                    <div class="flex h-6 items-center">
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className='flex w-full h-auto justify-center items-center lgs:mt-5 overflow-hidden'>

                                                      <button type='submit' class="group relative lgs:h-12 lgs:w-[15vw] mds:w-[20vw] mds:h-8  overflow-hidden rounded-xl bg-white lgs:text-lg mds:text-md shadow mds:m-5">
                                                                      <div class="absolute inset-0 w-3 bg-[#afadae] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                                                      <span class="relative text-black font-russoone group-hover:text-white hover:font-bold transition-all duration-[100ms] hover:ease-out">Send Message {''}<FontAwesomeIcon icon={faMailForward} alt=' ' className='relative'/>{''}</span>                      
                                                      </button> 

                                                </div>

                                      </form>
                                      <div className='absolute hidden mds:flex lgs:flex max-w-full h-auto top-40 right-0 z-40' style={{
                                                 animationDuration:'20s'
                                                 }}>
                                                      <img src={astronut} alt='' style={{
                                                       width:'400px',
                                                       }}/>
                                             </div>
                                             
                                      {formSubmit && (
                                            <div className='absolute hidden mds:flex lgs:flex w-auto h-auto top-10 right-12' style={{
                                              animationDuration:'20s'
                                              }}>
                                                   <div className='flex bg-primary lgs:w-[25vw] h-auto justify-center lgs:border-2 border-[#ec3434] rounded-3xl lgs:p-4'>
                                                     <p className='lgs:text-center font-semibold font-dmsans '>Thank you for reaching out to me! I appreciate your message and will get back to you as soon as possible.</p>
                                                   </div>

                                          </div>

                                       )}


                    </div>




                          <motion.div
                          initial={{bottom:'-400px'}}
                          whileInView={{bottom:'50px'}}
                          transition={{duration:'3.0',ease:'easeInOut', delay:'0.3'}}
                          className='absolute min-w-sm h-auto animate-spin animate-duration-300 lgs:max-w-4xl lgs:min-w-2xl md:max-w-2xl' style={{
                            animationDuration:'400s'
                          }}>
                            <img src={earthimage} alt='' style={{
                              width:'750px',
                             
                            }}/>
                          </motion.div>

                                
            </div>  
            
         
 

    </section>
    
      
    </main>
  );
}

export default Home1;