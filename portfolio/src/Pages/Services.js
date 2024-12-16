import React from 'react'


//background images
import lowerBackground3 from '../assests/lowerBackground3.png';
import backEnd from '../assests/Services/backEnd.png';
import mobileAppDevelopment from '../assests/Services/mobileAppDevelopment.png';
import uxui from '../assests/Services/uxui.png';
import webDevelopment from '../assests/Services/webDevelopment.png';


const Services = () => {

const services = [

  {
    id: 1,
    name: "Backend & API Development",
    description: "Develop secure and scalable backend systems with APIs to handle data and power web or mobile applications.",
    image: backEnd,
    gradient: "from-baseprimary to-transparent",
    border: "border-blue-400",
    gradientOverlay: "from-baseprimary via-baseprimary to-transparent",
    buttonBg: "bg-baseprimary",
    buttonBorder: "border-blue-400",
    buttonText: "See More",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Create cross-platform mobile apps that run smoothly on both Android and iOS, providing intuitive user experiences.",
    image: mobileAppDevelopment,
    gradient: "from-theme01 to-transparent",
    border: "border-pink-400",
    gradientOverlay: "from-theme01 via-theme01 to-transparent",
    buttonBg: "bg-theme01",
    buttonBorder: "border-pink-400",
    buttonText: "See More",
  },
  {
    id: 3,
    name: "UI/UX Design and Prototyping",
    description: "Design engaging user interfaces and prototypes to ensure seamless and visually appealing user interactions.",
    image: uxui,
    gradient: "from-orange-600 to-transparent",
    border: "border-orange-400",
    gradientOverlay: "from-orange-600 via-orange-600 to-transparent",
    buttonBg: "bg-orange-600",
    buttonBorder: "border-orange-400",
    buttonText: "See More",
  },
  {
    id: 4,
    name: "Web Development",
    description: "Build responsive and visually appealing websites using modern frameworks to deliver fast and user-friendly experiences",
    image: webDevelopment,
    gradient: "from-blue-600 to-transparent",
    border: "border-blue-400",
    gradientOverlay: "from-blue-600 via-blue-600 to-transparent",
    buttonBg: "bg-blue-600",
    buttonBorder: "border-blue-400",
    buttonText: "See More",
  },
];


  return (
    <section className='relative flex-col flex bg-gray-100 lgs:h-[60rem] lgs:w-[100vw] items-center justify-center'>

                                    <div className='flex flex-col bg-transparent w-full lgs:h-[15rem] lgs:items-center justify-center'>

                                    <h2 className='flex lgs:text-8xl font-dmsans text-gray-800' style={{
                                        fontWeight:'200'
                                    }}>
                                        SERVICES
                                    </h2>  

                                    <div className='flex lgs:w-[80vw] h-auto items-center justify-center lgs:mt-6 lgs:space-x-4'>

                                    <div className=' bg-gray-800 lgs:w-[30vw] lgs:h-0.5'/>  
                                    <div className='bg-gray-800 rounded-full lgs:h-3 lgs:w-3'/>
                                    <div className='bg-gray-800 rounded-full lgs:h-3 lgs:w-3'/>
                                    <div className=' bg-gray-800 lgs:w-[30vw] lgs:h-0.5 '/>  

                                    </div>

                                    </div>

                                     <div className='flex lgs:w-[100vw] lgs:auto items-center justify-center lgs:space-x-10'>


                                 {services.map((tools)=>(

                                        <div className='group flex flex-col bg-primary lgs:w-[18rem] mds:w-[18rem] lgs:h-[30rem] mds:h-[18rem] sms:w-[20rem] sms:h-[20rem] overflow-hidden  border-2  cursor-pointer rounded-xl transition-transform duration-700 ease-in-out hover:scale-110 hover:shadow-[inset_0_0px_5px_rgba(0,0,0,0.2),_0_0px_20px_rgba(255,223,0,0.5)]' data-aos='fade-up' data-aos-delay='300'
                                        style={{
                                            boxShadow:'0px 10px 10px rgba(0,0,0,0.5)'
                                        }}>
                                                            
                                        <div className='flex lg:w-[18rem] lgs:h-[20rem]'>

                                            <div className='flex w-auto h-auto z-20 lgs:h-[20rem]'>
                                                <img src= {tools.image} alt='' className='object-cover'/>
                                            </div>

                                            <div className='absolute lgs:h-[20rem] mds:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[18rem]  bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center lgs:w-[20rem]  z-30'/>

                                        </div>

                                                <div className='absolute lgs:h-[30rem] mds:w-[18rem] lgs:w-[18rem] mds:h-[18rem] sms:w-[20rem] sms:h-[18rem]  bg-gradient-to-t from-black via-transparent to-transparent flex flex-col items-center justify-center z-40'>
                                                
                                                        <div className='flex lgs:h-[15rem] lgs:w-[18rem] bg-transparent'/>
                                                        <div className='flex lgs:h-[15rem] lgs:w-[18rem] bg-gradient-to-t from-secondary via-secondary to-transparent'>

                                                        <div className='flex flex-col h-auto lgs:w-full  rounded-xl items-center cursor-default justify-center mds:space-y-2 sms:space-y-4'>
                                                                <h2 className='flex flex-col font-russoone lgs:w-[15rem] sms:w-[15rem] lgs:space-y-2 text-center font-thin items-center justify-center text-primary text-2xl sms:text-3xl overflow-hidden'>
                                                                {tools.name}{''}
                                                                <div className='bg-yellow-500  w-1/4 h-[0.15rem]  group-hover:w-3/4 transition-all ease-in-out duration-1000'/>
                                                                </h2>
                                                                <h2 className='flex flex-col font-ibmplexsans lgs:w-[15rem] mds:w-[15rem] lgs:mt-2 text-center text-primary lgs:text-sm sms:text-sm overflow-hidden'>
                                                                {tools.description}
                                                                </h2>

                                                        </div>


                                                </div>
                                                

                                        </div>

                                        <div className='lgs:h-[10rem] mds:w-[18rem] mds:h-[18rem] sms:w-[18rem] bg-secondary sms:h-[18rem] flex flex-col items-center justify-center lgs:w-[20rem]  z-30'>



                                        </div>

                                        </div>



                                 ))}


                                     </div>
                                     <div className='flex lgs:w-[100vw] lgs:h-[10rem] bg-transparent'/>

                                                           <div className='absolute -bottom-10   h-auto w-[100vw] z-50 bg-transparent' style={{
                                                             
                                         
                                                           }}>
                                                            <img src= {lowerBackground3} alt=''/>
                                         
                                                          </div>

            
    </section>
  )
}

export default Services;
