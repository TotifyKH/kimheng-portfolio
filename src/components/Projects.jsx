import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import BreakingBread from '../assets/breaking-bread.jpg';
import Nodefit from '../assets/nodefit.png';
import Poker from '../assets/poker.png';
import Car from '../assets/car.png';
import PhotoApp from '../assets/photo-app.png';
import FileSystem from '../assets/file-system.png';

const Projects = ({ setSelectedPage }) => {
  const breakingBreadHashTag = ['React', 'MongoDB', 'AWS-S3', 'Amplify'];
  const nodefitHashTag = ['React', 'Express', 'MySQL', 'AWS-EC2'];
  const pokerHashTag = ['Handlebars', 'SocketIO', 'PostgresSQL'];
  const carHashTag = ['Raspberry Pi', 'C', 'Multi-Threads', 'Embedded'];
  const photoHashTag = ['First-Web-App', 'Handblebars', 'Express', 'MySQL'];
  const fileSystemHashTag = ['C', 'Extent-Table', 'Ubuntu', 'Process'];

  const domRef = useRef();
  //use Intersection Observer hook to change page state when scrolled into view
  const handleIntersection = () => {
    setSelectedPage('projects');
  };

  useIntersectionObserver(domRef, 0.6, handleIntersection);

  return (
    <section id='projects' className="flex flex-col justify-start md:h-auto min-h-full py-6 px-16 md:px-32 bg-gradient-custom-1" ref={domRef}>
      <h1 className="text-4xl font-semibold  text-center font-poppins mt-20"><span className="text-yellow">Projects</span> I've Worked On</h1>
      <div className="flex flex-col items-center mt-10 gap-5">
        {/* FIRST ROW */}
        <div className='flex flex-col md:flex-row min-h-[20rem] my-3 gap-10'>
          <div className=" flex flex-col items-center h-[20rem] min-h-full w-[21rem] border-2 rounded-xl border-yellow hover:scale-105 transition-transform hover:cursor-pointer">
            <div className="rounded-xl m-5 mb-3">
              <img className="rounded-xl" src={BreakingBread}></img>
            </div>

            <div className='basis-1/2 flex flex-col justify-start px-5 '>
              <p className='text-lg font-poppins'><span className='text-yellow'>Breaking Bread</span> - MERN Stack Bakery Web App</p>
              <div className='flex flex-row flex-wrap justify-start text-start'>
                {breakingBreadHashTag.map((language, index) => (
                  <div className="text-xs text-green m-0.5 py-0.5 pr-1 rounded-full" key={index}>{'#'}{language} {''}</div>
                ))}
              </div>
              <p className='text-md text-right pr-2 mt-2'><span className='text-blue'>onClick</span>=<span className='text-yellow'>&#123;</span><span className='text-blue'>moreInfo</span><span className='text-yellow'>&#125;</span></p>
            </div>
          </div>
          <div className="flex flex-col items-center h-[20rem] min-h-full w-[21rem] rounded-xl border-2 border-yellow hover:scale-105 transition-transform hover:cursor-pointer">
            <div className="rounded-xl m-5 mb-3">
              <img className="rounded-xl" src={Nodefit}></img>
            </div>

            <div className='basis-1/2 flex flex-col justify-start px-5'>
              <p className='text-lg font-poppins'><span className='text-yellow'>Nodefit</span> - Full Stack React Fitness App</p>
              <div className='flex flex-row flex-wrap justify-start text-start'>
                {nodefitHashTag.map((language, index) => (
                  <div className="text-xs text-green m-0.5 py-0.5 pr-1 rounded-full" key={index}>{'#'}{language} {''}</div>
                ))}
              </div>
              <p className='text-md text-right pr-2 mt-2'><span className='text-blue'>onClick</span>=<span className='text-yellow'>&#123;</span><span className='text-blue'>moreInfo</span><span className='text-yellow'>&#125;</span></p>
            </div>
          </div>
          <div className="flex flex-col items-center h-[20rem] min-h-full w-[21rem] border-2 rounded-xl border-yellow hover:scale-105 transition-transform hover:cursor-pointer">
            <div className="rounded-xl m-5 mb-3">
              <img className="rounded-xl" src={Poker}></img>
            </div>

            <div className='basis-1/2 flex flex-col justify-start px-5'>
              <p className='text-lg font-poppins'><span className='text-yellow'>Texas Holdem Poker</span> - Multiplayer Poker Web App</p>
              <div className='flex flex-row flex-wrap justify-start text-start'>
                {pokerHashTag.map((language, index) => (
                  <div className="text-xs text-green m-0.5 py-0.5 pr-1 rounded-full" key={index}>{'#'}{language} {''}</div>
                ))}
              </div>
              <p className='text-md text-right pr-2 mt-2'><span className='text-blue'>onClick</span>=<span className='text-yellow'>&#123;</span><span className='text-blue'>moreInfo</span><span className='text-yellow'>&#125;</span></p>
            </div>
          </div>
        </div>
        {/* SECOND ROW */}
        <div className='flex flex-col md:flex-row min-h-[20rem] my-3 gap-10'>

          <div className="flex flex-col items-center h-[20rem] min-h-full w-[21rem] rounded-xl border-2 border-yellow hover:scale-105 transition-transform hover:cursor-pointer">
            <div className="rounded-xl m-5 mb-3">
              <img className="rounded-xl" src={PhotoApp}></img>
            </div>

            <div className='basis-1/2 flex flex-col justify-start px-5'>
              <p className='text-lg font-poppins'><span className='text-yellow'>Photo App</span> - Photo Posting Applications</p>
              <div className='flex flex-row flex-wrap justify-start text-start'>
                {photoHashTag.map((language, index) => (
                  <div className="text-xs text-green m-0.5 py-0.5 pr-1 rounded-full" key={index}>{'#'}{language} {''}</div>
                ))}
              </div>
              <p className='text-md text-right pr-2 mt-2'><span className='text-blue'>onClick</span>=<span className='text-yellow'>&#123;</span><span className='text-blue'>moreInfo</span><span className='text-yellow'>&#125;</span></p>
            </div>
          </div>
          <div className=" flex flex-col items-center h-[20rem] min-h-full w-[21rem] border-2 rounded-xl border-yellow hover:scale-105 transition-transform hover:cursor-pointer">
            <div className="rounded-xl m-5 mb-3">
              <img className="rounded-xl" src={Car}></img>
            </div>

            <div className='basis-1/2 flex flex-col justify-start px-5 '>
              <p className='text-lg font-poppins'><span className='text-yellow'>Raspberry Pi Car</span> - Following Line and Obstacle Avoidance</p>
              <div className='flex flex-row flex-wrap justify-start text-start'>
                {carHashTag.map((language, index) => (
                  <div className="text-xs text-green m-0.5 py-0.5 pr-1 rounded-full" key={index}>{'#'}{language} {''}</div>
                ))}
              </div>
              <p className='text-md text-right pr-2 mt-2'><span className='text-blue'>onClick</span>=<span className='text-yellow'>&#123;</span><span className='text-blue'>moreInfo</span><span className='text-yellow'>&#125;</span></p>
            </div>
          </div>
          <div className="flex flex-col items-center h-[20rem] min-h-full w-[21rem] border-2 rounded-xl border-yellow hover:scale-105 transition-transform hover:cursor-pointer">
            <div className="rounded-xl m-5 mb-3">
              <img className="rounded-xl" src={FileSystem}></img>
            </div>

            <div className='basis-1/2 flex flex-col justify-start px-5'>
              <p className='text-lg font-poppins'><span className='text-yellow'>Linux File System</span> - File System Utilizing BitMap and Extent</p>
              <div className='flex flex-row flex-wrap justify-start text-start'>
                {fileSystemHashTag.map((language, index) => (
                  <div className="text-xs text-green m-0.5 py-0.5 pr-1 rounded-full" key={index}>{'#'}{language} {''}</div>
                ))}
              </div>
              <p className='text-md text-right pr-2 mt-2'><span className='text-blue'>onClick</span>=<span className='text-yellow'>&#123;</span><span className='text-blue'>moreInfo</span><span className='text-yellow'>&#125;</span></p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Projects