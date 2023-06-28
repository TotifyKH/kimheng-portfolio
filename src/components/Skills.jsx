import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from 'framer-motion';
import ProgrammingIcon from '../assets/programming.png';
import FrontendIcon from '../assets/frontend.png';
import BackendIcon from '../assets/backend.png';
import EmbeddedIcon from '../assets/embedded.png';

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const programmingLanguages = ['C', 'C++', 'Java', 'Python', 'JavaScript'];
  const frontend = ['HTML', 'CSS', 'React.js', 'Redux', 'TailwindCSS', 'MUI', 'Vite'];
  const backend = ['Node', 'Express', 'AWS', 'MongoDB', 'MySQL', 'PostgreSQL'];
  const embedded = ['Raspberry Pi', 'C', 'Python'];

  return (
    <section id='skills' className="flex flex-col justify-start md:h-full py-10 px-16 md:px-32 bg-gradient-custom-2">
      <h1 className="text-4xl font-poppins mt-12">Intro<span className='text-yellow'>duck</span>tion</h1>
      <p className="text-xl font-poppins text-dark-grey mt-5">I am a passionate Software Engineer with expertise in JavaScript and experience working with React.js, Node.js, Express.js, and various AWS services. I am enthusiastic about leveraging my technical skills to collaborate with teams, assisting clients in developing practical solutions for real-world problems.
      </p>
      <h1 className="text-3xl font-poppins my-3 mt-8">My <span className='text-yellow'>Skills</span></h1>
      <div className='flex md:flex-row flex-col justify-center mt-3 gap-10'>
        <div className='md:basis-1/4 text-center rounded-md h-[300px] bg-gradient-rainblue-2 p-0.5'>
          <div className="flex flex-col items-center bg-dark-purple h-full rounded-md">
            <img className='my-5' src={ProgrammingIcon} width={80}></img>
            <p className='text-yellow font-poppins mb-2'>Programming Language</p>
            <div className='flex flex-row flex-wrap justify-center'>
              {programmingLanguages.map((language, index) => (
                <div className=" border-2 m-1 py-1 px-3 rounded-full" key={index}>{language} {''}</div>
              ))}
            </div>
          </div>

        </div>
        <div className='md:basis-1/4 text-center rounded-md h-[300px] bg-gradient-rainblue-2 p-0.5'>
        <div className="flex flex-col items-center bg-dark-purple h-full rounded-md">
            <img className='my-5' src={FrontendIcon} width={80}></img>
            <p className='text-yellow font-poppins mb-2'>Frontend Development</p>
            <div className='flex flex-row flex-wrap justify-center'>
              {frontend.map((language, index) => (
                <div className=" border-2 m-1 py-1 px-3 rounded-full" key={index}>{language} {''}</div>
              ))}
            </div>
          </div>
        </div>

        <div className='md:basis-1/4 text-center rounded-md h-[300px] bg-gradient-rainblue-2 p-0.5'>
        <div className="flex flex-col items-center bg-dark-purple h-full rounded-md">
            <img className='my-5' src={BackendIcon} width={80}></img>
            <p className='text-yellow font-poppins mb-2'>Backend Development</p>
            <div className='flex flex-row flex-wrap justify-center'>
              {backend.map((language, index) => (
                <div className=" border-2 m-1 py-1 px-3 rounded-full" key={index}>{language} {''}</div>
              ))}
            </div>
          </div>
        </div>

        <div className='md:basis-1/4 text-center rounded-md h-[300px] bg-gradient-rainblue-2 p-0.5'>
        <div className="flex flex-col items-center bg-dark-purple h-full rounded-md">
            <img className='my-5' src={EmbeddedIcon} width={80}></img>
            <p className='text-yellow font-poppins mb-2'>Embedded Programming</p>
            <div className='flex flex-row flex-wrap justify-center'>
              {embedded.map((language, index) => (
                <div className=" border-2 m-1 py-1 px-3 rounded-full" key={index}>{language} {''}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills;