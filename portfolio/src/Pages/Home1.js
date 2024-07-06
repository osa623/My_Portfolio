import React, { useEffect } from 'react';
import '../custom/style.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../custom/stareffect.css';

// Image files
import namelogo from '../assests/logo_1.png';
import sample from '../assests/sample.png';
import welcome from '../assests/welcome.png';
import about from '../assests/about.png'

// Effect backgrounds
import Stareffect from '../utils/Stareffect';
import Typewritereffect from '../utils/Typewritereffect';

const Home1 = () => {

  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []);
    
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
                <h2 className='font-kanit text-3xl text-primary font-bold'>Front-End Developer &</h2>
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

      <section className='flex h-[40vh] max-w-full bg-primary items-center justify-start' data-aos='fade-up'>
        <div className='flex flex-col h-auto max-w-[35vw] m-10 items-center'>
          <div className='h-0.5 w-[25vw] bg-secondary ' data-aos='fade-right'/>
          <img src={about} alt=''style={{
            width:'40vw',
            
          }} 
          data-aos='zoom-in'/>
          <div className='h-0.5 w-[25vw] bg-secondary' data-aos='fade-left'/>
        </div>
        <div className='flex flex-col h-auto max-w-[65vw]' data-aos='flip-up' data-aos-delay='200'>
          <p className='flex w-[50vw] items-center justify-between font-kanit text-lg'>"I'm passionate about web development, specializing in HTML, CSS, JavaScript, and frameworks like React. Currently pursuing my undergraduate studies at the Sri Lanka Institute of Information Technology (SLIIT), I focus on creating engaging user interfaces and seamless web experiences.My goal is to continuously expand my knowledge and apply the latest technologies to deliver efficient and impactful solutions in both web and mobile development."</p>
        </div>
      </section>
      <section className='relative flex h-screen w-full'>
 
      </section>
    </main>
  );
}

export default Home1;
