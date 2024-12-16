
//All the dependencies 
import React, { useState,useEffect } from 'react';
import '../custom/style.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../custom/stareffect.css';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//social media icons

import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


// Main-Image files

import namelogo from '../assests/logo_1.png';

//sections images


import portMain from '../assests/portMain.png';
import osandaTop from '../assests/osandaTop.png';
import osandaBottom from '../assests/osandaBottom.png';



//project files
import upperBackground from '../assests/upperBackground.png';
import lowerBackground from '../assests/lowerBackground.png';






const HeroSection = () => {




  //count animation
const [CounterOn, setCounterOn] = useState(false);

// navigation bar mobile res
const [nav, setNav] = useState(false);


//email sending part 

const [formSubmit, setFormSubmit] = useState(false);
const [formData, setFormData] = useState({
  user_name: '',
  user_email: '',
  message: ''
});
const [formError, setFormError] = useState('');

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = (event) => {
  event.preventDefault();

  const { user_name, user_email, message } = formData;

  // Validate the form fields
  if (!user_name || !user_email || !message) {
    setFormError('Please fill in all fields');
    return;
  }

  emailjs.sendForm('service_0xi9jwq', 'template_ua7ckvq', event.target, 'goVOCoAqSw4rEeUqN')
    .then((result) => {
      console.log(result.text);
      setFormSubmit(true);
      setFormError('');
      setFormData({ user_name: '', user_email: '', message: '' });

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

    
  return (
    <main className='relative  h-auto w-[100vw] flex flex-col overflow-hidden  bg-gradient-to-r from-primary via-gray-200 to-gray-400  '>

      
                <section className='flex overflow-hidden flex-col h-screen w-full z-20' id='home'>
                




                <div className='flex flex-row h-[5rem] w-full  bg-transparent z-50'>
           
                <div className='flex  h-auto w-[100vw] justify-center lgs:justify-center'>
      
   
                
                      <div className='hidden mds:flex lgs:flex lgs:w-[20vw] lgs:justify-center bg-transparent mds:justify-center sms:justify-start cursor-pointer p-5'>
                        <img src={namelogo} alt='Logo' className='lgs:scale-150'/>

                      </div>
                      <div className='flex mds:w-full lgs:w-[60vw] mds:justify-center bg-transparent lgs:justify-center mds:items-center lgs:p-2'>
                          <ul className='hidden mds:flex mds:w-[75vw] lgs:flex text-sm gap-10 font-kanit items-center justify-center z-50'>
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
                      <div className='flex mds:w-full lgs:w-[20vw] mds:justify-center lgs:space-x-5 bg-transparent lgs:items-center lgs:justify-center mds:items-center lgs:p-2'>
                          <FontAwesomeIcon icon={faGithub} className='h-8' />
                          <FontAwesomeIcon icon={faFacebook} className='h-8' />
                          <FontAwesomeIcon icon={faInstagram} className='h-8' />
                          <FontAwesomeIcon icon={faYoutube} className='h-8' />
                      </div>

                </div> 

         
                

                </div>

              {/* New Code Segment 001 */}

                <div className='flex flex-col items-center justify-center w-[100vw] h-full overflow-hidden'>
        
                   <div className='absolute flex top-0 h-auto lgs:w-[100vw] bg-transparent overflow-hidden' style={{
                    

                   }}>
                      <div className='flex lgs:w-[100vw] lgs:h-auto bg-transparent overflow-hidden'>

                         <img src={upperBackground} alt=''/>

                      </div>

                      <div className='absolute flex z-30 bg-transparent lgs:items-center lgs:justify-center lgs:w-full lgs:h-[20rem] lgs:mt-20'>

                         <div className='flex h-[40vh] w-[80vw] bg-transparent items-center justify-center '>
                             <div className='flex lgs:h-[25vh] lgs:w-[60vw] bg-primary lgs:rounded-full items-center justify-center border-8' style={{
                              boxShadow:'inset 0px 5px 20px rgba(0,0,0,0.5)'
                             }}>
                              
                                <div className='flex lgs:h-[15vh] lgs:w-[40vw] bg-gray-400 lgs:rounded-full'>

                                </div>

                             </div>

                         </div>

                      </div>
                  </div>
                  



                  <div className='absolute flex top-0 h-screen w-full bg-transparent overflow-hidden z-30 items-end justify-center'>

                    <div className='flex lgs:h-[90vh] mds:h-h/3 w-auto bg-transparent'>
                        <img src={portMain} alt=''/>
                    </div>
                    

                  </div>

                  <div className='absolute -bottom-10   h-auto w-[100vw] z-40 bg-transparent' style={{
                    

                  }}>
                   <img src= {lowerBackground} alt=''/>

                 </div>

                  <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.0 }}
                  
                  className='absolute flex -top-10 h-screen w-full bg-transparent z-40 items-end justify-center'>

                    <div className='flex w-full items-center justify-center' >
                      <img src= {osandaTop} alt='' className='' data-aos-='fade-up' data-aos-delay='300'/>

                    </div>


                  </motion.div>

                  <div className='absolute flex top-0 h-auto w-[100vw] z-20 bg-transparent'>
                      <div className='flex lgs:w-[100vw] lgs:h-auto bg-transparent'>

                         

                      </div>
                  </div>

                  <motion.div
                     initial={{ opacity: 0, y: 200 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 2.0 }}
                  className='absolute flex -top-10 h-screen w-full bg-transparent z-20 items-end justify-center'>

                      <div className='flex w-full items-center justify-center'>
                        <img src= {osandaBottom} alt='' className=''  data-aos-='fade-up' data-aos-delay='300'/>

                      </div>


                  </motion.div>


                </div>


                </section>

    
      
    </main>
  );
}

export default HeroSection;