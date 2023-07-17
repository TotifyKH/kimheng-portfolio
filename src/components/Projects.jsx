
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import BreakingBread from './projects/BreakingBread';
import Nodefit from './projects/Nodefit';
import Poker from './projects/Poker';
import PhotoApp from  './projects/PhotoApp';
import Car from '../assets/car.png';
import FileSystem from '../assets/file-system.png';

const Projects = ({ setSelectedPage }) => {
  const carHashTag = ['Raspberry Pi', 'C', 'Multi-Threads', 'Embedded'];
 
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
          <BreakingBread/>
          <Nodefit/>
          <Poker/>
        </div>
        {/* SECOND ROW */}
        <div className='flex flex-col md:flex-row min-h-[20rem] my-3 gap-10'>

          <PhotoApp/>
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