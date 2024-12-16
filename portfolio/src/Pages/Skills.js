import React, { useEffect, useRef, useState } from 'react'

//background images
import lowerBackground1 from '../assests/lowerBackground1.png';

//Dev-tools image files

import html from '../assests/devtools/html.png';
import css from '../assests/devtools/css.png';
import java from '../assests/devtools/java.png';
import js from '../assests/devtools/js.png';
import tailwind from '../assests/devtools/tailwind css.png';
import boostrap from '../assests/devtools/bootstrap.png';
import react from '../assests/devtools/reactjs.png';
import vue from '../assests/devtools/vue.png';
import node from '../assests/devtools/node-js.png';
import kotlin from '../assests/devtools/kotlin.png';
import next from '../assests/devtools/next.js.png';
import flutter from '../assests/devtools/flutter.png';
import php from '../assests/devtools/php.png';
import mongodb from '../assests/devtools/mongodb.png';
import mySql from '../assests/devtools/mysql-database.png';
import docker from '../assests/devtools/docker.png';
import github from '../assests/devtools/github.png';
import androidstudio from '../assests/devtools/android.png';
import aftereffects from '../assests/devtools/after effects.png';
import adobepp from '../assests/devtools/premiere pro.png';
import illustrator from '../assests/devtools/illustrator.png';
//import photoshop from '../assests/devtools/photoshop.png';



const Skills = () => {

  const [lightOn , setLightOn] = useState(false);
  const sectionRef = useRef(null);
  

  const devtools = [
    { name: 'HTML', path: html },
    { name: 'CSS', path: css },
    { name: 'Java', path: java },
    { name: 'JS', path: js },
    { name: 'Tailwind CSS', path: tailwind },
    { name: 'Bootstrap', path: boostrap },
    { name: 'React', path: react },
    { name: 'Vue', path: vue },
    { name: 'Node.js', path: node },
    { name: 'Kotlin', path: kotlin },
    { name: 'Next.js', path: next },
    { name: 'Flutter', path: flutter },
    { name: 'PHP', path: php },
    { name: 'MongoDB', path: mongodb },
    { name: 'MySQL', path: mySql },
    { name: 'Docker', path: docker },
    { name: 'GitHub', path: github },
    { name: 'Android Studio', path: androidstudio },
    { name: 'After Effects', path: aftereffects },
    { name: 'Premiere Pro', path: adobepp },
    { name: 'Illustrator', path: illustrator },

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setLightOn(false);
          } else {
            setLightOn(true);
          }
        });
      },
      { threshold: 0.7 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer when component is unmounted
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  



  return (
    <section className='relative flex-col flex bg-gray-800 lgs:h-[40rem] lgs:w-[100vw]' ref={sectionRef}>


        
        <div className='flex h-auto lgs:w-full justify-center items-center lgs:mt-6'>
        <div
        onClick={() => setLightOn(!lightOn)}
        className={`relative inline-block w-16 h-8 cursor-pointer rounded-full transition-all duration-300 ${
          lightOn ? 'bg-gray-200' : 'bg-orange-700'
        }`}
      >
        {/* Circle for the switch */}
        <div
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
            lightOn ? 'translate-x-0' : 'translate-x-8'
          }`}
        ></div>
      </div>

    </div>

    <div className='flex  bg-gray-800 lgs:h-[10rem] lgs:w-[100vw]'/>
            
          

        <div className='flex h-auto w-auto'>

        <div className='flex h-auto lgs:w-[20vw] justify-center items-center'>
            <h2 className='font-dmsans text-6xl lgs:text-center text-gray-300 lgs:-rotate-90'>
                   TECHNOLOGIES FRAMEWORKS
            </h2>
            

        </div>

        <div className='flex h-auto lgs:w-[5vw] justify-center items-center'>
            <div className='flex bg-primary w-0.5 h-3/4'/>
        </div>
                
        <div className='flex flex-col h-auto lgs:w-[50vw] items-center justify-center'>
          {!lightOn && (
            <div className='flex flex-col'>
              
            <div className='grid lgs:grid-cols-7 items-center justify-center'>
            {devtools.slice(0, 7).map((tools, index) => (
                <div key={index} className="flex flex-col items-center justify-center m-4">
                  <img src={tools.path} alt={`${tools.name} icon`} className="lgs:w-12 lgs:h-12 mds:h-6 mds:w-6 object-cover" />
                </div>
            ))}

         </div>
         <div className='grid lgs:grid-cols-7 items-center justify-center'>
                   {devtools.slice(7, 14).map((tools, index) => (
                       <div key={index} className="flex flex-col items-center justify-center m-4">
                         <img src={tools.path} alt={`${tools.name} icon`} className="lgs:w-12 lgs:h-12 mds:h-6 mds:w-6 object-cover" />
                       </div>
                   ))}
   
             </div>
             <div className='grid lgs:grid-cols-7 items-center justify-center'>
                   {devtools.slice(14, 21).map((tools, index) => (
                       <div key={index} className="flex flex-col items-center justify-center m-4">
                         <img src={tools.path} alt={`${tools.name} icon`} className="lgs:w-12 lgs:h-12 mds:h-6 mds:w-6 object-cover" />
                       </div>
                   ))}
   
             </div>
         </div>

          )}
           {lightOn && (
            <div className='flex flex-col lgs:opacity-60'>
              
             <div className='grid lgs:grid-cols-7 items-center justify-center'>
             {devtools.slice(0, 7).map((tools, index) => (
                 <div key={index} className="flex flex-col items-center justify-center m-4">
                   <img src={tools.path} alt={`${tools.name} icon`} className="lgs:w-12 lgs:h-12 mds:h-6 mds:w-6 object-cover" />
                 </div>
             ))}

          </div>
          <div className='grid lgs:grid-cols-7 items-center justify-center'>
                    {devtools.slice(7, 14).map((tools, index) => (
                        <div key={index} className="flex flex-col items-center justify-center m-4">
                          <img src={tools.path} alt={`${tools.name} icon`} className="lgs:w-12 lgs:h-12 mds:h-6 mds:w-6 object-cover" />
                        </div>
                    ))}
    
              </div>
              <div className='grid lgs:grid-cols-7 items-center justify-center'>
                    {devtools.slice(14, 21).map((tools, index) => (
                        <div key={index} className="flex flex-col items-center justify-center m-4">
                          <img src={tools.path} alt={`${tools.name} icon`} className="lgs:w-12 lgs:h-12 mds:h-6 mds:w-6 object-cover" />
                        </div>
                    ))}
    
              </div>
          </div>

          )}
         

         {/* <div className='grid lgs:grid-cols-3 items-center justify-center'>
                {devtools.slice(3, 6).map((tools, index) => (
                    <div key={index} className="flex flex-col items-center justify-center m-4">
                      <img src={tools.path} alt={`${tools.name} icon`} className="w-12 h-12" />
                    </div>
                ))}

          </div>
          <div className='grid lgs:grid-cols-3 items-center w-full justify-center'>
                {devtools.slice(6, 10).map((tools, index) => (
                    <div key={index} className="flex flex-col items-center justify-center m-4">
                      <img src={tools.path} alt={`${tools.name} icon`} className="w-12 h-12" />
                    </div>
                ))}

          </div>*/}
        </div>

        <div className='flex h-auto lgs:w-[5vw] justify-center items-center'>
            <div className='flex bg-primary w-0.5 h-3/4'/>
        </div>

        <div className='flex h-auto lgs:w-[20vw] items-center justify-center'>
        <p className='font-dmsans text-primary text-center text-md lgs:w-[15vw]'>
             I use a range of technologies to build scalable and user-friendly applications. On the frontend, I work with React, Next.js, and Flutter, while leveraging Node.js, Express, and MongoDB for backend development. I also utilize Tailwind CSS and Bootstrap for responsive, clean designs, ensuring high performance and seamless user experiences.
            </p>

       </div>


        </div>

       

        {!lightOn && (
        <div className="flex bg-gray-800 lgs:h-[30rem] lgs:w-[100vw] items-center justify-center">
          <div
            className="flex bg-gradient-to-t from-primary via-yellow-400 to-yellow-400 drop-shadow-lg lgs:w-[40vw] lgs:h-[2rem] rounded-t-full border-b-8 border-gray-500 lgs:mb-16"
            style={{
              boxShadow:
                '0px -80px 200px rgba(255,255,0,1) , 0px 1px 20px rgba(255,255,255,0.5) , 0px 10px 20px rgba(0,0,0,0.5)',
            }}
          ></div>
        </div>
      )}

      {/* Section 2: Visible when lightOn is true */}
      {lightOn && (
        <div className="flex bg-gray-800 lgs:h-[30rem] lgs:w-[100vw] items-center justify-center">
        <div
          className="flex bg-gradient-to-t from-primary via-yellow-100 to-yellow-100 drop-shadow-lg lgs:w-[40vw] lgs:h-[2rem] rounded-t-full border-b-8 border-gray-500 lgs:mb-16"
          style={{
            boxShadow:
              '0px 25px 15px rgba(0,0,0,0.3)',
          }}
        ></div>
      </div>
      )}
                         <div className='absolute -bottom-10   h-auto w-[100vw] z-40 bg-transparent' style={{
                           
       
                         }}>
                          <img src= {lowerBackground1} alt=''/>
       
                        </div>
            
    </section>
  )
}

export default Skills;
