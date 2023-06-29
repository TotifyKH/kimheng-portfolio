import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import BreakingBread from '../assets/breaking-bread.jpg';
import Nodefit from '../assets/nodefit.png';

const Projects = ({ setSelectedPage }) => {
  const domRef = useRef();
  //use Intersection Observer hook to change page state when scrolled into view
  const handleIntersection = () => {
    console.log("Projects Visible");
    setSelectedPage('projects');
  };

  useIntersectionObserver(domRef, 0.6, handleIntersection);

  return (
    <section id='projects' className="flex flex-col justify-start md:h-auto min-h-full py-6 px-16 md:px-32 bg-gradient-custom-1" ref={domRef}>
      <h1 className="text-4xl font-semibold  text-center font-poppins mt-20"><span className="text-yellow">Projects</span> I've Worked On</h1>
      <div className="flex flex-col items-center mt-10">
        <div className='flex flex-col md:flex-row h-[22rem] my-3 gap-16'>
          <div className="flex flex-col items-center h-full min-h-full w-80 border-2 rounded-md border-blue">
            <img className="rounded-t-md py-2 px-2" src={BreakingBread}></img>
            <div className='basis-1/2 flex flex-col justify-start px-10 py-5'>
              <p className='text-lg text-yellow font-poppins mb-2'>Breaking Bread - MERN Stack Bakery Web App</p>
              <button className='bg-yellow p-1 text-dark-blue'>Learn More</button>
            </div>
          </div>
          <div className="flex flex-col items-center h-full min-h-full w-80 border-2 rounded-md border-blue">
            <img className="rounded-t-md py-2 px-2" src={Nodefit}></img>
            <div className='basis-1/2 flex flex-col justify-start px-10 py-5'>
              <p className='text-lg text-yellow font-poppins mb-2'>Nodefit - Full Stack Fitness Web App</p>
              <button className='bg-yellow p-1 text-dark-blue'>Learn More</button>
            </div>
          </div>
          <div className="flex flex-col items-center h-full min-h-full w-80 border-2 rounded-md border-blue">
            <img className="rounded-t-md py-2 px-2" src={BreakingBread}></img>
            <div className='basis-1/2 flex flex-col justify-start px-10 py-5'>
              <p className='text-lg text-yellow font-poppins mb-2'>Breaking Bread - Full Stack Bakery Web App</p>
              <button className='bg-yellow p-1 text-dark-blue'>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Projects