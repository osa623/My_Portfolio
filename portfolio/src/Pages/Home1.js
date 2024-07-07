import React, { useEffect } from 'react';
import '../custom/style.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../custom/stareffect.css';
import Marquee from "react-fast-marquee";

// Main-Image files
import namelogo from '../assests/logo_1.png';
import sample from '../assests/sample.png';
import welcome from '../assests/welcome.png';
import about from '../assests/about.png';

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


  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []);


  const devtools = [
    {name:'html', path: html },
    {name:'css', path: css},
    {name:'js', path: js},
    {name:'node', path: node},
    {name:'tailwind', path: tailwind},
    {name:'react', path: react},
    {name:'kotlin', path: kotlin}
    
  
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
          <div className='absolute flex right-0 bottom-0 justify-center items-center bg-primary rounded-l-full w-[35vw] h-[35vw] overflow-hidden' data-aos='fade-left'>
            <div className='absolute right-0 flex justify-center items-center bg-baseprimary rounded-l-full w-[34vw] h-[33vw] overflow-hidden' data-aos='fade-left'>
              <img src={sample} alt='Sample' style={{ width: '450px' }} data-aos='zoom-in' />
            </div>
          </div>
        </div>
      </section>

     
      <section className='flex h-[40vh] max-w-full bg-primary items-center justify-start cursor-default space-x-3 mt-2'data-aos='flip-up'>
  
          <div className='flex flex-col h-auto w-[25vw] ml-5 items-center '>
                  <img src={about} alt=''style={{
    
                   }} 
                  data-aos='zoom-in'/>
           </div>
           <div className='flex h-auto max-w-[65vw] space-x-1' data-aos='flip-up' data-aos-delay='200'>
              <h2 className='flex items-start justify-start text-6xl font-russoone text-baseprimary'>"I</h2>
              <p className='flex w-[50vw] items-center justify-between font-kanit text-lg'>am a full stack developer focused on the MERN stack, currently an undergraduate at SLIIT. have a strong foundation in web development, crafting frontend and robust backend systems,along with experience in mobile app development. My goal is to expand my expertise and leverage cutting-edge technologies for impactful solutions.I also enjoy creating automobile content and editing videos , showcasing my versatility and creativity</p>
              <h2 className='flex items-start justify-end text-6xl font-russoone text-baseprimary rotate-180'>"</h2>
           </div>
           <div className='flex h-auto max-w-[10vw]' data-aos='flip-down' data-aos-delay='1000'>
             <button className='bg-[#ffb700] w-[10vw] h-[6vh] rounded-xl text-xl font-russoone border-2 shadow-xl hover:border-black'>
                My Resume
             </button>
          </div>
        
      </section>
      
      <div className='relative flex h-[10vh] max-w-full'/> 
      
      <section className='flex h-[40vh] max-w-full bg-primary items-center justify-start cursor-default space-x-3 mt-2'data-aos='flip-down' data-aos-delay='300'>
        <div className='flex max-h-30 w-[60vw] ml-2'>
           <Marquee>
              {devtools.map((brand, index) =>(
                  <div key={index} className='flex flex-col grid-flow-row items-center justify-center '>
                      
                      <img src={brand.path} alt='' style={{
                        width:'150px',
                        objectFit:'inherit'
                      }}/>
                      
                      <h2 className='font-russoone text-md text-secondary text-center'>{brand.name}</h2>
                  </div>
              ))};
       
          </Marquee>
          
        </div>
      </section>

      
    </main>
  );
}

export default Home1;
