import React,{useEffect} from 'react';
import '../custom/style.css'; 
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../custom/stareffect.css'

// Image files
import namelogo from '../assests/logo_1.png';
import sample from '../assests/sample.png';
import welcome from '../assests/welcome.png';
import Stareffect from '../utils/Stareffect';



const Home = () => {

  useEffect(()=>{
    Aos.init({
      duration:2000
    })
  })


  return (
    <main className='relative flex-col h-auto w-full'>
      <Stareffect/>
      <section className='flex flex-col h-auto w-full bg-secondary '>
        <div className='sticky flex w-full h-auto justify-center items-start bg-secondary pl-5'>
          <img src={namelogo} alt='' style={{ width: '250px' }} />
        </div>
        <div className='flex flex-col justify-center items-center p-2'>
        
          <ul className='flex text-sm gap-10 font-kanit'>
            <li className='hover-effect'>Home</li>
            <li className='hover-effect'>Mobile Apps</li>
            <li className='hover-effect'>Web Designs</li>
            <li className='hover-effect'>Social Circle</li>
          </ul>
        </div>
      </section>
      <section className='relative flex h-auto w-full bg-secondary pb-2 pt-2'>
        <div className='flex flex-col justify-center items-center w-full h-[65vh] mr-auto overflow-hidden pl-2 rounded-xl' data-aos='fade-right'>
              <img className='absolute left-0 top-0 mt-10 ml-10' src={welcome} alt='' style={{
                width:'600px'
              }} data-aos='zoom-in'/>
               <Stareffect/>
        </div>
        
        

        <div className='absolute flex right-0 justify-center items-center bg-primary rounded-l-full w-[35vw] h-[35vw] overflow-hidden' data-aos='fade-left'>
          <div className='absolute right-0 flex justify-center items-center bg-baseprimary rounded-l-full w-[34vw] h-[33vw] ml-auto overflow-hidden' data-aos='fade-left'>
            <img src={sample} alt='' style={{ width: '450px'}} data-aos='zoom-in'/>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
