
//All the dependencies 
import React, { useState,useEffect } from 'react';
import '../custom/style.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../custom/stareffect.css';
import Marquee from "react-fast-marquee";
import Countup from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';





// Main-Image files
import namelogo from '../assests/logo_1.png';
import sample from '../assests/sample.png';
import sample2 from '../assests/sample2.png';
import welcome from '../assests/welcome.png';
import about from '../assests/about.png';
import mytools from '../assests/my tools.png';
import myworks from '../assests/my works.png';
import socialcircle from '../assests/social circle.png';
import bwlogo from '../assests/bwlogo.png';

//sections images

import chocomate from '../assests/chocomate.png';
import rocketimage from '../assests/rocketimage.png';
import moonbg from '../assests/moonbg.png';
import moonbackground from '../assests/moonbackground.png';
import earthimage from '../assests/earthimage.png';
import astronut from '../assests/astronut.png';
import quoteimg from '../assests/quoteimg.png';



//Dev-tools image files

import html from '../assests/devtools/html.png';
import css from '../assests/devtools/css.png';
import js from '../assests/devtools/js.png';
import tailwind from '../assests/devtools/tailwind css.png';
import react from '../assests/devtools/react.png';
import node from '../assests/devtools/node.png';
import kotlin from '../assests/devtools/kotlin.png';
import next from '../assests/devtools/node.png';
import flutter from '../assests/devtools/kotlin.png';

// Effect backgrounds
import Stareffect from '../utils/Stareffect';
import Typewritereffect from '../utils/Typewritereffect';
import Typewrittermobile from '../utils/Typewrittermobile';





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
    {name:'KOTLIN', path: kotlin},
    {name:'NEXT', path: next},
    {name:'FLUTTER', path: flutter}

    
  
  ];
    
  return (
    <main className='relative h-auto w-full bg-secondary '>
      <Stareffect/>
      <section className='relative flex-col h-auto w-full'>
        <div className='flex items-center md:justify-center sm:justify-start w-auto cursor-pointer p-5'>
          <img src={namelogo} alt='Logo' style={{ 
            
            width: '250px' }} />

              <div className='md:hidden flex w-full h-auto bg-transparent items-center justify-end'>
                <svg class="h-8 w-8 text-primary hover:text-blue-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="21" y1="10" x2="3" y2="10" />  <line x1="21" y1="6" x2="3" y2="6" />  <line x1="21" y1="14" x2="3" y2="14" />  <line x1="21" y1="18" x2="3" y2="18" /></svg>
              </div>

        </div>
        <div className='flex justify-center items-center lg:p-2'>
              <ul className='hidden md:flex text-sm gap-10 font-kanit'>
                <li className='hover-effect'>Home</li>
                <li className='hover-effect'>Mobile Apps</li>
                <li className='hover-effect'>Web Designs</li>
                <li className='hover-effect'>Social Circle</li>
              </ul>
           
        </div>
        <div className='flex flex-col justify-center items-center md:w-full md:h-[65vh] sm:h-auto mr-auto overflow-hidden pl-2'>

          {/* Elements in when the scale size is smale */}

                <div className='sm:hidden flex flex-col w-full h-auto bg-transparent items-center justify-center p-2'>
                    <img src={sample2} alt='' style={{
                      width:'420px'
                    }}/>
                
                </div>


          <div className='flex flex-col justify-start items-center sm:w-full sm:h-auto  md:w-[65vw] md:h-[65vh] md:mr-auto sm:mr-0  overflow-hidden md:pl-2 space-y-1'>

             {/* Elements in when the scale size is medium and large */}
                <div className='hidden md:flex flex-col w-auto items-center justify-center'>
                  <img src={welcome} alt='Welcome' style={{ width: '800px' }} data-aos='zoom-in' />
                </div>

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
                                }}>Full Stack</h1>
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
                                <button className='bg-[#ffc400] rounded-3xl w-[50vw] h-[5vh] text-3xl font-bold font-bebasneue'>Contact me</button>      
                        </div>    



                      <div className='hidden md:flex flex-col h-auto w-auto justify-start items-start'>
                              <div className='flex w-auto items-center justify-start space-x-5' data-aos='fade-up'>
                                <h2 className='font-poppins text-4xl text-primary'>I'm </h2>
                                <h2 className='font-russoone text-6xl text-[#fdd122]'>Osanda Muthukumarana</h2>
                              </div>
                              


                              <div className='hidden md:flex w-auto items-center justify-start space-x-5' data-aos='fade-up'>
                                <h2 className='font-kanit text-3xl text-primary font-bold'>Full-Stack Developer &</h2>
                                <Typewritereffect/>
                              </div>
                              <div className='hidden md:flex flex-col w-auto h-auto items-start justify-center pt-10' data-aos='zoom-in' data-aos-delay='800'>
                                <button className='bg-[#ffc400] rounded-2xl w-[18vw] h-[5vh] font-bold font-kanit'>Contact me</button>      
                              </div>
                      </div>
                                  
                  </div> 
                  <div className='absolute hidden md:flex right-0 bottom-0 justify-center items-center bg-transparent border-5 border-gray-500 rounded-l-full w-[35vw] h-[35vw] overflow-hidden' data-aos='fade-left'>
                    
                        <img src={sample} alt='Sample' style={{ width: '800px' }} data-aos='zoom-in' />
                      
                    </div>
                  </div>
                </section>
      
      <div className='hidden md:flex h-[20vh] w-full bg-transparent'/>
     
      <section className='flex md:h-[40vh] sm:h-auto max-w-full border-none items-center justify-start cursor-default md:mt-10 overflow-hidden'>
                  
                  <div className='sm:hidden flex flex-col w-full h-auto bg-primary  items-center space-y-4'>
                        <div className='flex flex-col h-auto w-[75vw] ml-2 items-center pt-10'>
                                  <img src={about} alt=''style={{
                    
                                  }} 
                                  data-aos='flip-up'/>
                          </div>

                        <div className='flex flex-col h-auto w-[75vw] ml-2 items-start justify-center pt-5'>
                            <p className='flex w-auto items-center text-secondary text-center font-lorniasolid font-light text-2xl'>I am a full stack developer focused on the MERN stack, currently an undergraduate at SLIIT. have a strong foundation in web development, crafting frontend and robust backend systems,along with experience in mobile app development. My goal is to expand my expertise and leverage cutting-edge technologies for impactful solutions.I also enjoy creating automobile content and editing videos , showcasing my versatility and creativity</p> 
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
                  <motion.div
                  initial={{marginLeft:'-1400px'}}
                  whileInView={{marginLeft:'0px'}}
                  transition={{duration:'2.0', ease:'easeInOut', delay:'0.3'}}
                  className='hidden md:flex h-auto w-auto space-x-10'>

                  <div className='flex h-[35vh] w-full bg-primary items-center justify-start space-x-5 mr-3 rounded-r-full shadow-xl shadow-[#ffb700] pr-10'>
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

                    </div>
                    <img src={rocketimage} alt='' style={{
                      width:'500px'
                    }} />
                  </motion.div>

      </section>
      
      <div className='relative flex md:h-[10vh] max-w-full justify-center items-center m-5'>
          <div className='flex h-1 w-[60vw] bg-primary rounded-3xl'/>
      </div> 
      


        <section className='flex md:h-[60vh] sm:h-auto max-w-full items-center justify-center overflow-hidden'>

      
                {/* small size screen configs */}
                  
                <div className='sm:hidden flex flex-col bg-primary w-full h- items-center justify-center space-y-3'>
                  <div className='flex items-center justify-center h-auto w-[75vw] mt-5'>
                      <img src={mytools} alt='' data-aos='flip-down' data-aos-delay='400'/>
                  </div>

                  <div className='flex flex-col items-center justify-center'>
                      <p className='w-[75vw] h-auto text-center font-londrina font-light text-xl'>These are the main tools and languages I use to create projects, building responsive and efficient applications with strong front-end and back-end foundations for tailored solutions</p>
                  </div>

                  <div className='flex flex-col w-full h-auto items-center justify-center'>
                      <div className='grid grid-flow-row grid-cols-3 gap-4 p-5'>
                        {devtools.map((brand,index) =>(
                            <div key={index} className='border-2 border-secondary rounded-xl pt-2'>
                              <img src={brand.path}
                                  alt={brand.name}
                                  className='w-30 h-30 ' style={{
                                    objectFit:'contain'
                                  }} data-aos='flip-down'/>
                                  <h2 className='flex flex-col  font-londrina text-xl text-center text-secondary' data-aos='zoom-in'>{brand.name}</h2>
                                  </div>

                        ))}
                      </div>
                  </div>
                </div>

                {/* medium and large screen configs */}
                <motion.div
                      initial={{marginRight:'-2500px'}}
                      whileInView={{marginRight:'1000px'}}
                      transition={{duration:'2.0', ease:'easeInOut', delay:'0.3'}}
                      className='hidden md:flex h-auto w-full space-x-10'>  
                                <img src={rocketimage} alt='' style={{
                                  width:'500px',
                                  rotate:'180deg'
                                }}/>

                      <div className='flex h-[40vh] w-full bg-primary rounded-l-full p-10  shadow-xl shadow-[#ffb700]'>  
                          <div className='flex h-[30vh] w-[50vw] pt-4 pb-4 ml-10 bg-primary rounded-l-full '>
                            <Marquee className='rounded-l-full'>
                                {devtools.map((brand, index) =>(
                                    
                                    <div key={index} className='flex flex-col items-center justify-center rounded-l-full' data-aos='flip-down' data-aos-delay='700'>
                                        
                                        <img src={brand.path} alt='' style={{
                                          width:'150px',
                                        }}/>
                                        
                                        <h2 className='font-russoone text-md text-secondary text-center'>{brand.name}</h2>
                                    </div>
                                ))};
                        
                            </Marquee>
                          </div>
                          <div className='flex flex-col items-center w-[60vw] max-h-auto justify-center space-y-6 '>
                            <img src={mytools} alt=''
                            style={{
                              width:'400px'
                            }} data-aos='fade-left' data-aos-delay='400'/>
                            <div className='flex w-auto h-auto items-center justify-center space-x-1'data-aos='zoom-in' data-aos-delay='450'>
                                <h2 className='flex items-start justify-start text-8xl font-russoone text-baseprimary lg:mb-10'>T</h2>
                                <p className='flex w-[35vw] h-auto text-2xl items-center justify-start text-secondary font-lorniasolid font-light'>hese are the main tools and languages I use to create projects, building responsive and efficient applications with strong front-end and back-end foundations for tailored solutions</p>
                            </div>
                          </div>
                        </div>   
                </motion.div>   
                </section>

                <div className='relative flex md:h-[15vh] max-w-full'/> 

                <section className='relative h-auto max-w-full '>
                  <div className='flex flex-col h-auto max-w-full items-center justify-center pt-5 space-y-5'>\

                    {/*Image for large and medium screen models*/}

                    <div className='hidden md:flex h-auto w-full items-center justify-center'>
                          <img src={myworks} alt='' style={{
                            width:'500px'
                          }} data-aos='zoom-in' data-aos-delay='300'/>
                    </div> 

                    {/*Image for small screen models*/}

                    <div className='sm:hidden flex h-auto w-[75vw] items-center justify-center'>
                          <img src={myworks} alt='' style={{
                            width:'500px'
                          }} data-aos='zoom-in' data-aos-delay='300'/>
                    </div> 

                    {/*Image for large and medium screen models*/}

                    <div className='hidden md:flex h-auto w-full items-start justify-center space-x-2' data-aos='zoom-out' data-aos-delay='350'>
                      <h2 className='flex items-start justify-start text-7xl font-russoone text-baseprimary lg:mb-20'>T</h2>
                      <p className='flex w-[75vw] h-auto md:text-2xl text-justify text-primary font-lorniasolid font-light'>hese are some of the web applications I've built, showcasing my skill in creating responsive and innovative solutions. Each project reflects my commitment to using the latest technologies to deliver high-quality results tailored to meet client needs.</p>
                    </div>

                     {/*Image for small screen models*/}

                    <div className='sm:hidden flex h-auto w-full items-start justify-center space-x-2' data-aos='zoom-out' data-aos-delay='350'>
                      <h2 className='flex items-start justify-start text-7xl font-russoone text-baseprimary lg:mb-20'>T</h2>
                      <p className='flex w-[75vw] h-auto text-xl  text-justify text-primary font-lorniasolid font-light'>hese are some of the web applications I've built, showcasing my skill in creating responsive and innovative solutions.</p>
                    </div>



                    <div className='flex flex-col h-auto w-full p-10' data-aos='fade-up' data-aos-delay='400'>
                        <div className='sticky flex-col top-10 h-auto w-full bg-baseprimary rounded-lg'>
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

      <div className='hidden md:flex h-[5vh] max-w-full'/> 

   <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      <section className='relative h-auto max-w-full overflow-hidden z-30'>

        {/*small screen configs */}

              <div className='sm:hidden flex flex-col h-auto w-auto items-center space-y-4'>
                <div className='flex flex-col w-[75vw] h-auto items-center justify-center space-y-4 p-2'>
                                <img src={socialcircle} alt='' style={{
                                  width:'500px'
                                }} data-aos='fade-right' data-aos-delay='300'/>
                 </div>
                 <div className='flex h-auto w-[90vw] items-start justify-center space-x-1 cursor-default ' data-aos='zoom-in' data-aos-delay='350'>
                                <h2 className='flex items-start justify-start text-7xl font-russoone text-baseprimary lg:mb-10'>D</h2>
                                <p className='flex w-[90vw] h-auto text-xl text-justify text-primary font-lorniasolid font-light '>ev life aside, Baos Wheels is where my passion for automobiles shines. As an automobile content creator, I share insightful reviews, captivating stories, and the latest trends in the automotive industry, including mechanical explanations to engage enthusiasts and curious minds alike.</p>
                 </div>
                 <div className='flex flex-col h-a w-full items-center justify-center space-y-8 bg-primary p-2' data-aos='flip-down' data-aos-delay='200'>
                                <img src={bwlogo} alt='' style={{
                                  width:'150px',
                            
                                }} className='rounded-full border-2 shadow-2xl shadow-baseprimary border-secondary' data-aos='flip-right'/>
                              <div className='flex flex-col h-auto w-[25vw] items-center justify-center space-y-1' data-aos='zoom-in'>
                                    <div className='flex h-auto w-auto items-center justify-center'>
                                      <h2 className='flex text-secondary text-7xl font-russoone text-center'>{CounterOn && <Countup start={0} end={44000} duration={2} delay={0.2}/>}</h2>
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
      
              <div className='hidden md:flex w-auto h-auto'>
                        <div className='flex h-[60vh] max-w-full items-center justify-start space-x-3'>
                          <div className='flex flex-col w-[35vw] h-auto items-center justify-center space-y-4 p-2'>
                              <img src={socialcircle} alt='' style={{
                                width:'400px'
                              }} data-aos='fade-right' data-aos-delay='300'/>
                              <div className='flex h-auto w-[30vw] items-start justify-center space-x-1 cursor-default ' data-aos='zoom-in' data-aos-delay='350'>
                                <h2 className='flex items-start justify-start text-7xl font-russoone text-baseprimary lg:mb-10'>D</h2>
                                <p className='flex w-[30vw] h-auto text-2xl text-justify text-primary font-lorniasolid font-light '>ev life aside, Baos Wheels is where my passion for automobiles shines. As an automobile content creator, I share insightful reviews, captivating stories, and the latest trends in the automotive industry, including mechanical explanations to engage enthusiasts and curious minds alike.</p>
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
                                    <h2 className='flex text-[#3a3a3a] text-4xl font-russoone font-bold text-center'>Supporters</h2>
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
              </div>  
                              
      </section>
    </ScrollTrigger> 


    <section className='relative  h-[140vh] max-w-full  overflow-hidden'>
            <div className='flex flex-col h-[120vh] w-full'>   
              
              {/*medium and larger screen responsiveness */}
                    <div className='absolute hidden md:flex bottom-0 max-w-full h-auto z-30'>
                      <img src={moonbg} alt='' style={{
                        
                        
                      }}/>
                       </div>
                       <div className='absolute sm:hidden flex bottom-0 max-w-full h-auto z-30'>
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

                        <motion.div 
                        initial={{opacity:'0'}}
                        whileInView={{opacity:'100'}}
                        transition={{duration:'4.0', ease:'easeInOut', delay:'5.0'}}
                        className="absolute hidden md:flex top-2 left-5  lg:w-auto h-[40vh] z-40 overflow-hidden">
                           <div className=' bg-primary flex  w-auto lg:h-[30vh]  md:h-[25vh] rounded-full items-center p-10 justify-center space-x-3'>

                           <p className='flex lg:w-[15vw] h-auto lg:text-2xl md:text-xl font-londrina  cursor-default'>If you appreciate my Designing works and find it valuable,consider</p>
                           <p className='flex lg:w-[10vw] max:lg:h-[25vh] md:h-[20vh] lg:text-3xl md:text-2xl font-londrina lg:p-2 bg-[#ffb700] rounded-3xl text-center text-[#613215] cursor-pointer p-0'><a href='https://buymeacoffee.com/osandamuthukumarana'>Buy me a
                           <FontAwesomeIcon icon={faCoffee} className='mx-5 size-11 rounded-full bg-primary border-8' />
                           Coffee</a></p>
                           <p className='flex lg:w-[35vw] md:w-[50vw] h-auto  lg:text-2xl md:text-xl font-londrina  cursor-default'>Your support fuels my creativity and helps me continue crafting and sharing high-quality projects. Thank you for your generosity!</p>
                           </div>
                           <div className='flex w-[18vw] h-auto rounded-3xl' style={{
                            backgroundImage:`url(${quoteimg})`,
                            backgroundPosition:'center',
                            backgroundSize:'cover',
                            rotate:'-20deg',}}>
                           </div>
                          
                      
                        </motion.div>




                         <motion.div
                          initial={{right:'-500px'}}
                          whileInView={{right:'30px'}}
                          transition={{duration:'4.0',ease:'easeInOut', delay:'0.3'}}
                          className='absolute hidden md:flex max-w-full h-auto top-40  animate-bounce' style={{
                            animationDuration:'20s'
                          }}>
                            <img src={astronut} alt='' style={{
                              width:'500px',
                              rotatez:'120deg',
                            }}/>
                          </motion.div>

                          <motion.div
                          initial={{right:'-300px'}}
                          whileInView={{right:'0px'}}
                          transition={{duration:'4.0',ease:'easeInOut', delay:'0.3'}}
                          className='absolute sm:hidden flex max-w-full h-auto top-80  animate-bounce' style={{
                            animationDuration:'40s'
                          }}>
                            <img src={astronut} alt='' style={{
                              width:'300px',
                              rotatez:'120deg',
                            }}/>
                          </motion.div>




                          <motion.div
                          initial={{bottom:'-400px'}}
                          whileInView={{bottom:'50px'}}
                          transition={{duration:'3.0',ease:'easeInOut', delay:'0.3'}}
                          className='absolute min-w-sm h-auto animate-spin animate-duration-300 lg:max-w-4xl lg:min-w-2xl md:max-w-2xl' style={{
                            animationDuration:'400s'
                          }}>
                            <img src={earthimage} alt='' style={{
                              width:'900px',
                              rotatez:'120deg'
                            }}/>
                          </motion.div>

                                
            </div>  
            
            <motion.div
                          initial={{right:'-400px'}}
                          whileInView={{right:'0px'}}
                          transition={{duration:'4.0',ease:'easeInOut', delay:'0.3'}}
                          className='absolute sm:hidden flex max-w-full h-auto top-20 p-5  animate-bounce' style={{
                            animationDuration:'40s'
                          }}>
                       <div className='flex flex-col h-auto w-auto'>   
                        <div className='flex bg-primary h-auto w-[90vw] rounded-xl items-center justify-center p-2 space-x-2 z-30'>
                                  
                           <p className='flex w-auto h-[10vh] font-londrina cursor-default text-center' style={{
                            fontSize:'12px'
                           }}>If you appreciate my Designing works and find it valuable,consider</p>
                           <p className='flex font-londrina w-auto h-[10vh] text-sm  bg-[#ffb700] rounded-3xl text-center text-[#613215] cursor-pointer p-0'><a href='https://buymeacoffee.com/osandamuthukumarana'>Buy me a
                           <FontAwesomeIcon icon={faCoffee} className='mx-5 size-5 rounded-full bg-primary border-8' />
                           Coffee</a></p>
                           <p className='flex  font-londrina  w-auto h-[10vh]  cursor-default' style={{
                            fontSize:'12px'
                           }}>Your support fuels my creativity and helps me continue crafting and sharing high-quality projects. Thank you for your generosity!</p>
    
                              </div>
                              <div className='flex w-[60vw] h-[20vh] ml-20 rounded-3xl' style={{
                            backgroundImage:`url(${quoteimg})`,
                            backgroundPosition:'center',
                            backgroundSize:'cover',
                            rotate:'10deg',}}>
                           </div>
                        </div>  

                          </motion.div>
 

    </section>
    
      
    </main>
  );
}

export default Home1;