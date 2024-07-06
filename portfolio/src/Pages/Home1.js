import React, { useEffect } from 'react';
import '../custom/style.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../custom/stareffect.css';

// Image files
import namelogo from '../assests/logo_1.png';
import sample from '../assests/sample.png';
import welcome from '../assests/welcome.png';
import Stareffect from '../utils/Stareffect';

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
        <div className='flex flex-col items-center justify-center w-full'>
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
          <div className='absolute left-0 w-auto h-[60vh] ml-10'>
            <img className='top-0' src={welcome} alt='Welcome' style={{ width: '500px' }} data-aos='zoom-in' />
            <h2 className='flex font-russoone text-3xl text-primary'>My name is Osanda Muthukumarana</h2>
          </div>
          <div className='absolute flex right-0 bottom-0 justify-center items-center bg-primary rounded-l-full w-[35vw] h-[35vw] overflow-hidden' data-aos='fade-left'>
            <div className='absolute right-0 flex justify-center items-center bg-baseprimary rounded-l-full w-[34vw] h-[33vw] overflow-hidden' data-aos='fade-left'>
              <img src={sample} alt='Sample' style={{ width: '450px' }} data-aos='zoom-in' />
            </div>
          </div>
        </div>
      </section>

      <section className='relative top-0 h-[50vh] w-full bg-primary'>
        
      </section>
      <section className='relative flex h-screen w-full'>
      </section>
    </main>

    
  );
}

export default Home1;
