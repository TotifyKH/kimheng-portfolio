import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from 'framer-motion';
import ProgrammingIcon from '../assets/programming.png';
import FrontendIcon from '../assets/frontend.png';
import BackendIcon from '../assets/backend.png';
import DeploymentIcon from '../assets/deployment.png';
import { Tilt } from 'react-tilt';

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const programmingLanguages = ['C', 'C++', 'Java', 'Python', 'JavaScript'];
  const frontend = ['HTML', 'CSS', 'React.js', 'Redux', 'TailwindCSS', 'MUI', 'Vite'];
  const backend = ['Node.js', 'Express.js', 'SocketIO', 'MongoDB', 'MySQL', 'PostgreSQL'];
  const deployment = ['AWS','Amplify', 'EC2', 'RDS', 'Route 53', 'Nginx', 'Vercel'];
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

  const defaultOptions = {
    reverse: true,  // reverse the tilt direction
    max: 20,     // max tilt rotation (degrees)
    perspective: 2500,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }


  return (
    <section id='skills' className="flex flex-col justify-start md:h-full py-10 px-16 md:px-32 bg-gradient-custom-2">
      <motion.div
        className="md:basis-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <h1 className="text-3xl font-poppins mt-20">Intro<span className='text-yellow'>duck</span>tion && <span className='text-yellow'>Skills</span></h1>
        <p className="text-lg font-poppins text-dark-grey mt-3">I am a passionate Software Engineer with expertise in JavaScript and experience working with React.js, Node.js, Express.js, and various AWS services. I am enthusiastic about leveraging my technical skills to collaborate with teams, assisting clients in developing practical solutions for real-world problems.
        </p>
      </motion.div>


      <motion.div
        className="flex md:flex-row flex-col justify-center mt-8 gap-10 list-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, ...(isAboveMediumScreens ? { amount: 0.4 } : { amount: 0.1 }) }}
        transition={{ duration: 1, ease: "easeOut" }}
        variants={list}
      >
        <Tilt className="md:basis-1/4 h-80 rounded-md" options={defaultOptions}>
          <motion.li className='md:basis-1/4 text-center rounded-md h-80 bg-gradient-rainblue-2 p-0.5' variants={item}>
            <div className="flex flex-col items-center bg-dark-purple h-full rounded-md">
              <img className='my-5' src={ProgrammingIcon} width={80}></img>
              <p className='text-yellow font-poppins mb-2'>Programming Language</p>
              <div className='flex flex-row flex-wrap justify-center'>
                {programmingLanguages.map((language, index) => (
                  <div className=" border-2 m-1 py-1 px-3 rounded-full" key={index}>{language} {''}</div>
                ))}
              </div>
            </div>
          </motion.li>
        </Tilt>
        <Tilt className="md:basis-1/4  h-80 rounded-md" options={defaultOptions}>
          <motion.li className='md:basis-1/4 text-center rounded-md h-80 bg-gradient-rainblue-2 p-0.5' variants={item}>
            <div className="flex flex-col items-center bg-dark-purple h-full rounded-md">
              <img className='my-5' src={FrontendIcon} width={80}></img>
              <p className='text-yellow font-poppins mb-2'>Frontend Development</p>
              <div className='flex flex-row flex-wrap justify-center'>
                {frontend.map((language, index) => (
                  <div className=" border-2 m-1 py-1 px-3 rounded-full" key={index}>{language} {''}</div>
                ))}
              </div>
            </div>
          </motion.li>
        </Tilt>
        <Tilt className="md:basis-1/4  h-80 rounded-md" options={defaultOptions}>
          <motion.li className='md:basis-1/4 text-center rounded-md h-80 bg-gradient-rainblue-2 p-0.5' variants={item}>
            <div className="flex flex-col items-center bg-dark-purple h-full rounded-md">
              <img className='my-5' src={BackendIcon} width={80}></img>
              <p className='text-yellow font-poppins mb-2'>Backend Development</p>
              <div className='flex flex-row flex-wrap justify-center'>
                {backend.map((language, index) => (
                  <div className=" border-2 m-1 py-1 px-3 rounded-full" key={index}>{language} {''}</div>
                ))}
              </div>
            </div>
          </motion.li>
        </Tilt>
        <Tilt className="md:basis-1/4  h-80 rounded-md" options={defaultOptions}>
          <motion.li className='md:basis-1/4 text-center rounded-md h-80 bg-gradient-rainblue-2 p-0.5' variants={item}>
            <div className="flex flex-col items-center bg-dark-purple h-full rounded-md">
              <img className='my-5' src={DeploymentIcon} width={105}></img>
              <p className='text-yellow font-poppins mb-2'>Deployment</p>
              <div className='flex flex-row flex-wrap justify-center'>
                {deployment.map((language, index) => (
                  <div className=" border-2 m-1 py-1 px-3 rounded-full" key={index}>{language} {''}</div>
                ))}
              </div>
            </div>
          </motion.li>
        </Tilt>
      </motion.div>

    </section>
  )
}

export default Skills;