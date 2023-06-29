import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import BreakingBread from '../assets/breaking-bread.jpg';
import Nodefit from '../assets/nodefit.png';
import Poker from '../assets/poker.png';

const Projects = ({ setSelectedPage }) => {
  const breakingBreadHashTag = ['React', 'MongoDB', 'Express', 'Amplify'];
  const nodefitHashTag = ['React','Express','MySQL','AWS-EC2'];
  const pokerHashTag = ['Handlebars','SocketIO','PostgresSQL'];
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
            <div className='basis-1/2 flex flex-col justify-start px-4 py-5'>
              <p className='text-lg  font-poppins mb-2'><span className='text-yellow'>Breaking Bread</span> - MERN Stack Bakery Web App</p>
              <div className='flex flex-row flex-wrap justify-start mt-4'>
                {breakingBreadHashTag.map((language, index) => (
                  <div className="text-xs text-blue border-blue border-1 m-0.5 py-0.5 px-1 rounded-full" key={index}>{'#'}{language} {''}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center h-full min-h-full w-80 border-2 rounded-md border-blue">
            <img className="rounded-t-md py-2 px-2" src={Nodefit}></img>
            <div className='basis-1/2 flex flex-col justify-start px-4 py-5'>
              <p className='text-lg font-poppins mb-2'><span className='text-yellow'>Nodefit</span> - Full Stack React Fitness App</p>
              <div className='flex flex-row flex-wrap justify-start mt-4'>
                {nodefitHashTag.map((language, index) => (
                  <div className="text-xs text-blue border-blue border-1 m-0.5 py-0.5 px-1 rounded-full" key={index}>{'#'}{language} {''}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center h-full min-h-full w-80 border-2 rounded-md border-blue">
            <img className="rounded-t-md py-2 px-2" src={Poker}></img>
            <div className='basis-1/2 flex flex-col justify-start px-4 py-5'>
              <p className='text-lg font-poppins mb-2'><span className='text-yellow'>Texas Holdem Poker</span> - Multiplayer Poker Web App</p>
              <div className='flex flex-row flex-wrap justify-start mt-4'>
                {pokerHashTag.map((language, index) => (
                  <div className="text-xs text-blue border-blue border-1 m-0.5 py-0.5 px-1 rounded-full" key={index}>{'#'}{language} {''}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Projects