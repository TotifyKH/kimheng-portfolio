import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id='projects' className="flex flex-col justify-start md:h-auto min-h-full py-6 px-16 md:px-32 bg-gradient-custom-1">
      <h1 className="text-4xl font-semibold  text-center font-poppins mt-20"><span className="text-yellow">Projects</span> I've Worked On</h1>
      <div className="flex flex-col items-center mt-10">
        <div className='flex w-[80%] h-[400px] border-2 rounded-md my-3'>
          <div className='basis-1/3 bg-red'>
          </div>
          <div className='flex flex-col justify-start basis-2/3 px-10 py-5'>
            <p className='text-lg text-yellow font-poppins mb-2'>Bakery Web Application</p>
            <p> A learning project to develop a MERN stack bakery web app with a focus on both frontend and backend development. </p>
            <button className='bg-yellow p-1 text-dark-blue'>Learn More</button>
          </div>
          
        </div>
        <div className='flex w-[80%] h-[400px] border-2 rounded-md my-3'>
          <div className='basis-1/3 bg-red'>
          </div>
          <div className='flex flex-col justify-start basis-2/3 px-10 py-5'>
            <p className='text-lg text-yellow font-poppins mb-2'>Bakery Web Application</p>
            <p> A learning project to develop a MERN stack bakery web app with a focus on both frontend and backend development. </p>
            <button className='bg-yellow p-1 text-dark-blue'>Learn More</button>
          </div>
          
        </div>
        <div className='flex w-[80%] h-[400px] border-2 rounded-md my-3'>
          <div className='basis-1/3 bg-red'>
          </div>
          <div className='flex flex-col justify-start basis-2/3 px-10 py-5'>
            <p className='text-lg text-yellow font-poppins mb-2'>Bakery Web Application</p>
            <p> A learning project to develop a MERN stack bakery web app with a focus on both frontend and backend development. </p>
            <button className='bg-yellow p-1 text-dark-blue'>Learn More</button>
          </div>
          
        </div>

      </div>
    </section >
  )
}

export default Projects