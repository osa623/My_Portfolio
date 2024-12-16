import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

//others
import lowerBackground2 from '../assests/lowerBackground2.png';

//project images
import baoswheels from '../assests/Projects/BaosWheels.png';
import bookingcom from '../assests/Projects/bookingcom.png';
import pixelplaza from '../assests/Projects/pixelplaza.png';
import medilink from '../assests/Projects/MediLink.png';
import fitnessMaster from '../assests/Projects/fitnessMaster.png';
import jobPortal from '../assests/Projects/jobFinder.png';
import pathFinder from '../assests/Projects/pathFinder.png';

//logos
import bwlogo from '../assests/mobile Apps/bwlogo.png';
import bookingcomlogo from '../assests/mobile Apps/bookingcom.png';
import pixelplazalogo from '../assests/mobile Apps/pixelplaza.png';
import medilinklogo from '../assests/mobile Apps/medilink.png';
import fitnessMasterLogo from '../assests/mobile Apps/Fitness Master.png';
import jobPortalLogo from '../assests/mobile Apps/Job Portal.png';
import pathFinderLogo from '../assests/mobile Apps/pathFinderLogo.png';


//font awesome icons
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';



const Projects = () => {

  const [showSecondSection, setShowSecondSection] = useState(false);

const projects01 = [
  {
    id: 1,
    name: "BookingCom",
    description: "A platform to find and book the best hotels for your travel needs.",
    image: bookingcom,
    logo: bookingcomlogo,
    gradient: "from-baseprimary to-transparent",
    border: "border-blue-400",
    gradientOverlay: "from-baseprimary via-baseprimary to-transparent",
    buttonBg: "bg-baseprimary",
    buttonBorder: "border-blue-400",
    buttonText: "See More",
  },
  {
    id: 2,
    name: "BaosWheels",
    description: "Your go-to source for automotive content like reviews, articles, and more.",
    image: baoswheels,
    logo: bwlogo,
    gradient: "from-theme01 to-transparent",
    border: "border-pink-400",
    gradientOverlay: "from-theme01 via-theme01 to-transparent",
    buttonBg: "bg-theme01",
    buttonBorder: "border-pink-400",
    buttonText: "See More",
  },
  {
    id: 3,
    name: "PixelPlaza",
    description: "An innovative shopping complex offering a complete online experience.",
    image: pixelplaza,
    logo: pixelplazalogo,
    gradient: "from-orange-600 to-transparent",
    border: "border-orange-400",
    gradientOverlay: "from-orange-600 via-orange-600 to-transparent",
    buttonBg: "bg-orange-600",
    buttonBorder: "border-orange-400",
    buttonText: "See More",
  },
  {
    id: 4,
    name: "MediLink",
    description: "A convenient medical appointment booking platform for patients.",
    image: medilink,
    logo: medilinklogo,
    gradient: "from-blue-600 to-transparent",
    border: "border-blue-400",
    gradientOverlay: "from-blue-600 via-blue-600 to-transparent",
    buttonBg: "bg-blue-600",
    buttonBorder: "border-blue-400",
    buttonText: "See More",
  },
];

const projects02 = [
    {
      id: 1,
      name: "JobPortal",
      description: "A platform to find and Post a Job of Famous Companies.",
      image: jobPortal,
      logo: jobPortalLogo,
      gradient: "from-baseprimary to-transparent",
      border: "border-blue-600",
      gradientOverlay: "from-blue-900 via-blue-900 to-transparent",
      buttonBg: "bg-blue-900",
      buttonBorder: "border-blue-600",
      buttonText: "See More",
    },
    {
      id: 2,
      name: "Fitness Master",
      description: "A platform to share fitness plans and track progress",
      image: fitnessMaster,
      logo: fitnessMasterLogo,
      gradient: "from-theme01 to-transparent",
      border: "border-green-400",
      gradientOverlay: "from-green-800 via-green-800 to-transparent",
      buttonBg: "bg-green-800",
      buttonBorder: "border-green-400",
      buttonText: "See More",
    },
    {
      id: 3,
      name: "PathFinder",
      description: "An app offering seamless vehicle parking and bus booking solutions",
      image: pathFinder,
      logo: pathFinderLogo,
      gradient: "from-gray-800 to-transparent",
      border: "border-gray-400",
      gradientOverlay: "from-gray-800 via-gray-800 to-transparent",
      buttonBg: "bg-gray-800",
      buttonBorder: "border-gray-400",
      buttonText: "See More",
    },
    {
      id: 4,
      name: "MediLink",
      description: "A convenient medical appointment booking platform for patients.",
      image: medilink,
      logo: medilinklogo,
      gradient: "from-blue-600 to-transparent",
      border: "border-blue-400",
      gradientOverlay: "from-blue-600 via-blue-600 to-transparent",
      buttonBg: "bg-blue-600",
      buttonBorder: "border-blue-400",
      buttonText: "See More",
    },
  ];



  return (
    <section className='relative staic bg-gray-100 h-auto max-w-full overflow-hidden'>

                <div className='flex flex-col bg-transparent w-full lgs:h-[20rem] lgs:items-center justify-center'>

                    <h2 className='flex lgs:text-8xl font-dmsans text-gray-800' style={{
                        fontWeight:'200'
                    }}>
                        PROJECTS
                    </h2>  
                   
                   <div className='flex lgs:w-[80vw] h-auto items-center justify-center lgs:mt-12 lgs:space-x-4'>
 
                      <div className=' bg-gray-800 lgs:w-[30vw] lgs:h-0.5'/>  
                      <div className='bg-gray-800 rounded-full lgs:h-3 lgs:w-3'/>
                      <div className='bg-gray-800 rounded-full lgs:h-3 lgs:w-3'/>
                      <div className=' bg-gray-800 lgs:w-[30vw] lgs:h-0.5 '/>  
 
                   </div>
 
                </div>

      {/*componenets for medium and large screen models*/}
    <div className='flex lgs:grid-cols-4 lgs:gap-12 lgs:items-center lgs:justify-center lgs:h-auto w-full'>

    {projects01.map((tool) => (
          <div
            key={tool.id}
            className="group flex flex-col lgs:h-[40rem] lgs:w-[20rem] overflow-hidden bg-primary rounded-xl"
            style={{
              boxShadow: "1px 5px 20px rgba(0,0,0,0.7)",
            }}
          >
            <div className="flex bg-transparent lgs:h-[30rem] lgs:w-full">
              <div
                className={`flex flex-col bg-gradient-to-b ${tool.gradient} overflow-hidden lgs:rounded-br-full items-center border-r-8 ${tool.border} lgs:h-full lgs:w-[20rem]`}
                style={{
                  backgroundImage: `url(${tool.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className={`flex flex-col bg-gradient-to-b ${tool.gradientOverlay} items-center overflow-hidden lgs:w-[20rem] lgs:h-[20rem] z-40`}
                >
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="flex z-50 lgs:h-[10rem] lgs:w-[10rem]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center bg-transparent lgs:h-full lgs:w-[10rem]">
                <h2 className="flex text-center -rotate-90 font-dmsans text-7xl font-thin">
                  {tool.name}
                </h2>
              </div>
            </div>
            <div className="flex flex-col bg-transparent overflow-hidden lgs:h-[10rem] lgs:w-full">
              <div className="flex items-center justify-center lgs:h-[5rem] bg-transparent">
                <h2 className="flex font-poppins text-sm items-center lgs:w-[15rem] text-center justify-center">
                  {tool.description}
                </h2>
              </div>
              <div className="flex lgs:h-[5rem] bg-transparent">
                <div className="flex bg-transparent lgs:h-[5rem] lgs:w-[5rem]"></div>
                <div
                  className={`flex ${tool.buttonBg} ${tool.buttonBorder} border-t-8 items-center lgs:space-x-5 justify-center lgs:h-[5rem] lgs:w-[15rem] lgs:rounded-tl-full`}
                >
                  <h2 className="flex text-primary font-dmsans text-sm hover:scale-105 cursor-pointer">
                    {tool.buttonText}
                  </h2>
                  <FontAwesomeIcon icon={faGithub} className='text-primary lgs:h-[2rem]'/>
                  <FontAwesomeIcon icon={faGlobe} className='text-primary lgs:h-[2rem]'/>
                </div>
              </div>
            </div>
          </div>
    ))}
    </div>

    <div className='flex h-auto lgs:w-full justify-center items-center'>
         <button
          onClick={() => setShowSecondSection(!showSecondSection)}
          className={`mt-10 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg ${
            showSecondSection ? 'hidden' : 'flex'
          }`}
        >
          See More
        </button>
    </div>


    <div className='flex bg-transparent w-full h-[5rem]'/>

    <div
        className={`flex lgs:grid-cols-4 lgs:gap-12 lgs:items-center bg-transparent lgs:justify-center lgs:h-auto w-full transform transition-all duration-500  ${
          showSecondSection ? 'lgs:h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >

   

    {projects02.map((tool) => (
          <div
            key={tool.id}
            className="group flex flex-col lgs:h-[40rem] lgs:w-[20rem] overflow-hidden bg-primary rounded-xl"
            style={{
              boxShadow: "1px 5px 20px rgba(0,0,0,0.7)",
            }}
          >
            <div className="flex bg-transparent lgs:h-[30rem] lgs:w-full">
              <div
                className={`flex flex-col bg-gradient-to-b ${tool.gradient} overflow-hidden lgs:rounded-br-full items-center border-r-8 ${tool.border} lgs:h-full lgs:w-[20rem]`}
                style={{
                  backgroundImage: `url(${tool.image})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className={`flex flex-col bg-gradient-to-b ${tool.gradientOverlay} items-center overflow-hidden lgs:w-[20rem] lgs:h-[20rem] z-40`}
                >
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="flex z-50 lgs:h-[10rem] lgs:w-[10rem]"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center bg-transparent lgs:h-full lgs:w-[10rem]">
                <h2 className="flex text-center -rotate-90 font-dmsans text-7xl font-thin">
                  {tool.name}
                </h2>
              </div>
            </div>
            <div className="flex flex-col bg-transparent overflow-hidden lgs:h-[10rem] lgs:w-full">
              <div className="flex items-center justify-center lgs:h-[5rem] bg-transparent">
                <h2 className="flex font-poppins text-sm items-center lgs:w-[15rem] text-center justify-center">
                  {tool.description}
                </h2>
              </div>
              <div className="flex lgs:h-[5rem] bg-transparent">
                <div className="flex bg-transparent lgs:h-[5rem] lgs:w-[5rem]"></div>
                <div
                  className={`flex ${tool.buttonBg} ${tool.buttonBorder} border-t-8 items-center lgs:space-x-5 justify-center lgs:h-[5rem] lgs:w-[15rem] lgs:rounded-tl-full`}
                >
                  <h2 className="flex text-primary font-dmsans text-sm hover:scale-105 cursor-pointer">
                    {tool.buttonText}
                  </h2>

                  <FontAwesomeIcon icon={faGithub} className='text-primary lgs:h-[2rem]'/>
                  <Link to="https://www.baoswheels.com" className='cursor-pointer' target="_blank">
                    <FontAwesomeIcon icon={faGlobe} className="text-primary lgs:h-[2rem] cursor-pointer" />
                  </Link>

                </div>
              </div>
            </div>
          </div>
    ))}
    </div>



    <div className='flex bg-transparent w-full h-[5rem]'/>
                      <div className='absolute -bottom-10   h-auto w-[100vw] z-40 bg-transparent' style={{
                        
    
                      }}>
                       <img src= {lowerBackground2} alt=''/>
    
                     </div>
    




</section>
  )
}

export default Projects
