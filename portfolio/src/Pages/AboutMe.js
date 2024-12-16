import React from 'react'
//background images
import lowerBackground1 from '../assests/lowerBackground1.png';


const AboutMe = () => {
  return (
    <section className='relative flex-col flex bg-gray-800 lgs:h-[30rem] lgs:w-[100vw]'>

        <div className='flex  bg-gray-800 lgs:h-[20rem] lgs:w-[100vw]'/>
            
          

        <div className='flex h-auto w-auto'>

        <div className='flex h-auto lgs:w-[20vw] justify-center items-center'>
            <h2 className='font-dmsans text-9xl text-gray-300 lgs:-rotate-90'>
                    ME
            </h2>
        </div>

        <div className='flex h-auto lgs:w-[5vw] justify-center items-center'>
            <div className='flex bg-primary w-0.5 h-3/4'/>
        </div>
                
        <div className='flex h-auto lgs:w-[50vw] items-center justify-center'>
            <p className='font-dmsans text-primary text-center text-lg lgs:w-[60vw]'>
            Hey I am Osanda Muthukumarana, a full-stack developer and enthusiastic software engineer who is presently enrolled at the Sri Lankan Institute of Information Technology (SLIIT).I have a solid background in both front-end and back-end development, and my area of expertise is creating scalable, effective, and intuitive solutions. My passion for solving problems and my desire to use cutting-edge tools and frameworks to create useful apps have motivated me throughout my technological journey.I'm constantly excited to pick up new skills, work with others, and take on challenges that test my creativity. I try to contribute significantly to the field of software development, whether it is through creating dynamic web apps, investigating cutting-edge technologies, or educating the public.
            </p>
        </div>

        <div className='flex h-auto lgs:w-[5vw] justify-center items-center'>
            <div className='flex bg-primary w-0.5 h-3/4'/>
        </div>

        <div className='flex h-auto lgs:w-[20vw]'>
            
       </div>


        </div>

       

       <div className='flex bg-gray-800 lgs:h-[50rem] lgs:w-[100vw] '/>
                         <div className='absolute -bottom-10   h-auto w-[100vw] z-40 bg-transparent' style={{
                           
       
                         }}>
                          <img src= {lowerBackground1} alt=''/>
       
                        </div>
            
    </section>
  )
}

export default AboutMe
