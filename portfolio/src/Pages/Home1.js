import React, { useState,useEffect } from 'react';
import '../custom/style.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../custom/stareffect.css';
import Marquee from "react-fast-marquee";
import Countup from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { motion } from 'framer-motion';



// Main-Image files
import namelogo from '../assests/logo_1.png';
import sample from '../assests/sample.png';
import welcome from '../assests/welcome.png';
import about from '../assests/about.png';
import mytools from '../assests/my tools.png';
import myworks from '../assests/my works.png';
import socialcircle from '../assests/social circle.png';
import bwlogo from '../assests/bwlogo.png';

//sections images

import chocomate from '../assests/chocomate.png';
import rocketimage from '../assests/rocketimage.png';


//Dev-tools image files

import html from '../assests/devtools/html.png';
import css from '../assests/devtools/css.png';
import js from '../assests/devtools/js.png';
import tailwind from '../assests/devtools/tailwind css.png';
import react from '../assests/devtools/react.png';
import node from '../assests/devtools/node.png';
import kotlin from '../assests/devtools/kotlin.png';


// Effect backgrounds
import Stareffect from '../utils/Stareffect';
import Typewritereffect from '../utils/Typewritereffect';





const Home1 = () => {

  //count animation
const [CounterOn, setCounterOn] = useState(false);


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
    {name:'KOTLIN', path: kotlin}
    
  
  ];
    
  return (
    <main className='relative h-auto w-full bg-secondary'>
      <Stareffect/>
      <section className='relative flex-col h-auto w-full'>
        <div className='flex flex-col items-center justify-center w-full cursor-pointer'>
          <img src={namelogo} alt='Logo' style={{ width: '250px' }} />
        </div>
        <div className='flex flex-col justify-center items-center p-2'>
          <ul className='flex text-sm gap-10 font-kanit'>
            <li className='hover-effect'>Home</li>
            <li className='hover-effect'>Mobile Apps</li>
            <li className='hover-effect'>Web Designs</li>
            <li className='hover-effect'>Social Circle</li>
          </ul>
        </div>
        <div className='flex flex-col justify-center items-center w-full h-[65vh] mr-auto overflow-hidden pl-2'>

          <div className='flex flex-col justify-start items-center w-[65vw] h-[65vh] mr-auto overflow-hidden pl-2 space-y-2'>

            <div className='flex flex-col w-auto items-center justify-center'>
              <img src={welcome} alt='Welcome' style={{ width: '800px' }} data-aos='zoom-in' />
            </div>
            <div className='flex flex-col h-auto w-auto justify-start items-start'>
              <div className='flex w-auto items-center justify-start space-x-5' data-aos='fade-up'>
                <h2 className='font-poppins text-4xl text-primary'>I'm </h2>
                <h2 className='font-russoone text-6xl text-[#fdd122]'>Osanda Muthukumarana</h2>
              </div>
              <div className='flex w-auto items-center justify-start space-x-5' data-aos='fade-up'>
                <h2 className='font-kanit text-3xl text-primary font-bold'>Full-Stack Developer &</h2>
                <Typewritereffect/>
              </div>
              <div className='flex flex-col w-auto h-auto items-start justify-center pt-10' data-aos='zoom-in' data-aos-delay='800'>
                <button className='bg-[#ffc400] rounded-2xl w-[18vw] h-[5vh] font-bold font-kanit'>Contact me</button>      
              </div>
            </div>

          </div> 
        <div className='absolute flex right-0 bottom-0 justify-center items-center bg-primary border-5 border-gray-500 rounded-l-full w-[35vw] h-[35vw] overflow-hidden' data-aos='fade-left'>
           <div className='flex justify-center items-center bg-slate-700 rounded-full w-100 h-100'/>
              <img src={sample} alt='Sample' style={{ width: '450px' }} data-aos='zoom-in' />
            
          </div>
        </div>
      </section>
      
      <div className='flex h-[20vh] w-full bg-transparent'/>
     
      <section className='flex h-[40vh] max-w-full  border-none items-center justify-start cursor-default mt-10 overflow-hidden'>
        <motion.div
        initial={{marginLeft:'-1400px'}}
        whileInView={{marginLeft:'0px'}}
        transition={{duration:'1.5', ease:'easeInOut', delay:'0.3'}}
        className='flex h-[35vh] w-full bg-primary items-center justify-start space-x-5 mr-3 rounded-r-full shadow-lg shadow-[#ffb700] pr-10'>
          <div className='flex flex-col h-[20vh] w-[25vw] ml-5 items-center pt-10'>
                  <img src={about} alt=''style={{
    
                   }} 
                  data-aos='fade-right'/>
           </div>
           <div className='flex h-auto max-w-[65vw] space-x-3' data-aos='zoom-in' data-aos-delay='600'>
              <h2 className='flex items-start justify-start text-7xl font-russoone text-baseprimary '>I</h2>
              <p className='flex w-[50vw] items-center text-secondary justify-between font-lorniasolid font-light text-2xl'> am a full stack developer focused on the MERN stack, currently an undergraduate at SLIIT. have a strong foundation in web development, crafting frontend and robust backend systems,along with experience in mobile app development. My goal is to expand my expertise and leverage cutting-edge technologies for impactful solutions.I also enjoy creating automobile content and editing videos , showcasing my versatility and creativity</p>
           </div>
           <div className='flex h-auto max-w-[10vw]' data-aos='flip-down' data-aos-delay='1000'>
             <button className='bg-[#ffb700] w-[10vw] h-[6vh] rounded-xl text-xl font-russoone border-2 shadow-xl hover:border-black'>
                My Resume
             </button>

          </div>
        </motion.div>
        <motion.div
    initial={{ x: '0%' }}
    whileInView={{ x: '120%' }}
    transition={{ duration: 1.0, ease: 'easeInOut', delay: 0.3 }}
    className='flex h-[20vh] w-[30vw] items-center justify-center'>
    <img src={rocketimage} alt='' style={{}} />
</motion.div>
      </section>
      
      <div className='relative flex h-[10vh] max-w-full'/> 
      
      <section className='flex h-[40vh] max-w-full bg-transparent items-center justify-start cursor-default mt-2 overflow-hidden'>
        <div className='flex h-30 w-[60vw] pt-4 pb-4 ml-10 bg-primary rounded-xl border-4' data-aos='flip-down' data-aos-delay='300'>
           <Marquee>
              {devtools.map((brand, index) =>(
                  
                  <div key={index} className='flex flex-col grid-flow-row items-centerjustify-center'>
                      
                      <img src={brand.path} alt='' style={{
                        width:'150px',
                        objectFit:'inherit'
                      }}/>
                      
                      <h2 className='font-russoone text-md text-secondary text-center'>{brand.name}</h2>
                  </div>
              ))};
       
          </Marquee>
        </div>
        <div className='flex flex-col items-center w-[40vw] max-h-auto justify-center space-y-6'>
          <img src={mytools} alt=''
          style={{
            width:'400px'
          }} data-aos='fade-left' data-aos-delay='400'/>
           <div className='flex w-auto h-auto items-center justify-center space-x-1'data-aos='zoom-in' data-aos-delay='450'>
              <h2 className='flex items-start justify-start text-8xl font-russoone text-baseprimary lg:mb-20'>T</h2>
              <p className='flex w-[30vw] h-auto text-2xl items-center justify-start text-primary font-lorniasolid font-light'>hese are the main tools and languages I use to create projects, building responsive and efficient applications with strong front-end and back-end foundations for tailored solutions</p>
          </div>
        </div>
      </section>

      <div className='relative flex h-[15vh] max-w-full'/> 

      <section className='relative h-auto max-w-full'>
        <div className='flex flex-col h-auto max-w-full items-center justify-center pt-5 space-y-5'>
          <img src={myworks} alt='' style={{
            width:'500px'
          }} data-aos='zoom-in' data-aos-delay='300'/>
          <div className='flex h-auto w-full items-start justify-center space-x-2' data-aos='zoom-out' data-aos-delay='350'>
             <h2 className='flex items-start justify-start text-7xl font-russoone text-baseprimary lg:mb-20'>T</h2>
             <p className='flex w-[60vw] h-auto text-2xl text-justify text-primary font-lorniasolid font-light'>hese are some of the web applications I've built, showcasing my skill in creating responsive and innovative solutions. Each project reflects my commitment to using the latest technologies to deliver high-quality results tailored to meet client needs.</p>
          </div>
          <div className='flex flex-col h-auto w-full p-10' data-aos='fade-up' data-aos-delay='400'>
              <div className='sticky flex-col top-10 h-screen w-full bg-baseprimary rounded-lg'>
                <h2 className='font-kanit text-6xl text-primary'>Chocomate</h2>
                <img src={chocomate} alt=''/>

              </div>
              <div className='sticky flex top-10 h-screen w-full bg-[#c42121] rounded-lg'>
                <h2 className='font-kanit text-6xl text-primary'>Section 2</h2>
             </div>
             <div className='sticky flex-col top-10 h-screen w-full bg-baseprimary rounded-lg'>
                <h2 className='font-kanit text-6xl text-primary'>Section 3</h2>

            </div>
            <div className='sticky flex top-10 h-screen w-full bg-[#c42121] rounded-lg'>
                <h2 className='font-kanit text-6xl text-primary'>Section 4</h2>
            </div>
          </div>  
        </div>

      </section>

      <div className='flex h-[5vh] max-w-full'/> 

   <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      <section className='relative h-auto max-w-full overflow-hidden'>
        <div className='flex h-[40vh] max-w-full items-center justify-start space-x-3'>
           <div className='flex flex-col w-[35vw] h-auto items-center justify-center space-y-4 p-2'>
              <img src={socialcircle} alt='' style={{
                width:'400px'
              }} data-aos='fade-right' data-aos-delay='300'/>
               <div className='flex h-auto w-[30vw] items-start justify-center space-x-1 cursor-default' data-aos='zoom-in' data-aos-delay='350'>
                 <h2 className='flex items-start justify-start text-7xl font-russoone text-baseprimary lg:mb-10'>D</h2>
                 <p className='flex w-[30vw] h-auto text-lg text-justify text-primary font-kanit'>ev life aside, Baos Wheels is where my passion for automobiles shines. As an automobile content creator, I share insightful reviews, captivating stories, and the latest trends in the automotive industry, including mechanical explanations to engage enthusiasts and curious minds alike.</p>
              </div>
           </div>
           <div className='flex h-[30vh] w-[60vw] items-center justify-center space-x-8 border-4 border-gray-600 bg-primary rounded-xl' data-aos='flip-down' data-aos-delay='200'>
                <img src={bwlogo} alt='' style={{
                  width:'150px',
            
                }} className='rounded-full border-2 border-secondary' data-aos='flip-right'/>
              <div className='flex flex-col h-auto w-[25vw] items-center justify-center' data-aos='zoom-in'>
                    <div className='flex h-auto w-[30vw] items-center justify-center'>
                      <h2 className='flex text-secondary text-7xl font-russoone text-center'>{CounterOn && <Countup start={0} end={44000} duration={2} delay={0.2}/>}</h2>
                      <h2 className='flex text-secondary text-7xl font-russoone text-center'>+</h2>
                    </div>
                    <h2 className='flex text-[#3a3a3a] text-6xl font-russoone font-bold text-center'>Followers</h2>
                    <h2 className='flex text-secondary w-[22vw] text-2xl font-kanit text-center'>Have gathered from all the main and popular platforms</h2>
              </div>
              <div className='flex flex-col h-auto w-[15vw] items-center justify-center space-y-2'>
                  <button className=' bg-blue-700 w-[10vw] h-[4vh] text-xl rounded-xl text-center text-primary font-russoone' data-aos='fade-left' data-aos-delay='250'>Facebook</button>
                  <button className=' bg-secondary w-[10vw] h-[4vh] text-xl rounded-xl text-center text-primary font-russoone' data-aos='fade-left' data-aos-delay='300'>Tiktok</button>
                  <button className=' bg-red-600 w-[10vw] h-[4vh] text-xl rounded-xl text-center text-primary font-russoone' data-aos='fade-left' data-aos-delay='350'>Youtube</button>
                  <button className=' bg-pink-700 w-[10vw] h-[4vh] text-xl rounded-xl text-center text-primary font-russoone' data-aos='fade-left' data-aos-delay='400'>Instagram</button>
                  <button className=' bg-gray-700 w-[10vw] h-[4vh] text-xl rounded-xl text-center text-primary font-russoone' data-aos='fade-left' data-aos-delay='450'>Web</button>
              </div>
          </div>
        </div>
      </section>
    </ScrollTrigger>  

    <div className='flex h-[5vh] max-w-full'/>
      
    </main>
  );
}

export default Home1;