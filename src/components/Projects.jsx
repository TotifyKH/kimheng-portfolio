
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useMediaQuery from "../hooks/useMediaQuery";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import BreakingBread from './projects/BreakingBread';
import Nodefit from './projects/Nodefit';
import Poker from './projects/Poker';
import PhotoApp from './projects/PhotoApp';
import Car from './projects/Car';
import FileSystem from '../assets/file-system.png';

const Projects = ({ setSelectedPage }) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1300px)");
  const fileSystemHashTag = ['C', 'Extent-Table', 'Ubuntu', 'Process'];
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        during: 0.5,

      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  }


  const domRef = useRef();
  //use Intersection Observer hook to change page state when scrolled into view
  const handleIntersection = () => {
    setSelectedPage('projects');
  };

  useIntersectionObserver(domRef, 0.6, handleIntersection);

  return (
    <section id='projects' className="flex flex-col justify-start md:h-auto min-h-full py-6 px-16 md:px-32 bg-gradient-custom-1" ref={domRef}>
      <motion.div
        className="text-4xl font-semibold  text-center font-poppins mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        }}
      ><span className="text-yellow">Projects</span> I've Worked On</motion.div>

      <div className="flex flex-col items-center mt-10 gap-5">
        {/* FIRST ROW */}
        <motion.div
          className="flex flex-col md:flex-row min-h-[20rem] my-3 gap-10 list-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, ...(isAboveMediumScreens ? { amount: 0.4 } : { amount: 0.1 }) }}
          transition={{ duration: 1, ease: "easeOut" }}
          variants={list}
        >
          <motion.li variants={item}>
            <BreakingBread />
          </motion.li>
          <motion.li variants={item}><Nodefit /></motion.li>
          <motion.li variants={item}><Poker /></motion.li>


        </motion.div>
        {/* SECOND ROW */}
        <motion.div
          className="flex flex-col md:flex-row min-h-[20rem] my-3 gap-10 list-none"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, ...(isAboveMediumScreens ? { amount: 0.4 } : { amount: 0.1 }) }}
          transition={{ duration: 1, ease: "easeOut" }}
          variants={list}
        >
          <motion.li variants={item}><PhotoApp /></motion.li>
          <motion.li variants={item}><Car /></motion.li>
          <motion.li variants={item}>
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

              </div>
            </div>
          </motion.li>
        </motion.div>
      </div>
    </section >
  )
}



export default Projects