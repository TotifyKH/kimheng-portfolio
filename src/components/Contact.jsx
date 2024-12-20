import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from 'framer-motion';
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useRef } from "react";

const Contact = ({ setSelectedPage }) => {
  const domRef = useRef();
  const submitFormUrl = `https://formsubmit.co/${import.meta.env.VITE_FORMSUBMIT_KEY}`;

  const handleIntersection = () => {
    setSelectedPage('contact');
  };

  useIntersectionObserver(domRef, 0.6, handleIntersection);

  return (
    <section id='contact' className="flex justify-center items-center md:h-full w-full py-10 bg-gradient-custom-2" ref={domRef}>
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center mt-10 p-1 bg-gradient-rainblue-2 rounded-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div className="flex flex-col w-80 md:h-[35rem] items-start pl-10 bg-dark-purple md:rounded-l-md p-2">
          <p className="text-2xl mt-20 mb-6 font-poppins"><span className="text-yellow">Contact</span> Info</p>
          <p className="text-md mt-6 font-poppins">kimhengpengkh@gmail.com</p>
          <p className="text-md mt-6 font-poppins">+855 77 457 727</p>
          <p className="text-md mt-6 font-poppins">Phnom Penh, Cambodia</p>
          <div className="flex justify-between gap-6 mt-12 mb-6">
            <a href="https://github.com/TotifyKH" target="_blank"><GitHubIcon className="hover:scale-125 transition-transform hover:cursor-pointer hover:text-yellow" /></a>
            <a href="https://www.linkedin.com/in/kimheng-peng/" target="_blank"><LinkedInIcon className="hover:scale-125 transition-transform hover:cursor-pointer hover:text-blue" /></a>
            <a href="https://instagram.com/kimheng_peng?igshid=MjEwN2IyYWYwYw==" target="_blank"><InstagramIcon className="hover:scale-125 transition-transform hover:cursor-pointer hover:text-pink" /></a>
          </div>
        </div>
        <div className="flex flex-col w-80 items-start pl-10 md:w-[30rem] h-[35rem] bg-dark-purple md:rounded-r-md p-1">
          <p className="text-2xl mt-20 font-poppins">Message Me</p>
          {/*USING FORMSUBMIT END POINT TO SEND EMAIL*/}
          <form className='flex flex-col mt-6 gap-4 w-[90%]' action={submitFormUrl} method="POST">
            <input className='h-12 rounded-lg bg-dark-blue border-purple border-2 pl-3' name='Name' type="text" placeholder="Name" required />
            <input className=' h-12 rounded-lg border-purple border-2 bg-dark-blue pl-3' name='Email' type="email" placeholder="Email" required />
            <textarea className=' h-32 rounded-lg border-purple border-2 bg-dark-blue p-3' name='Message' placeholder="Message" />
            <button type="submit" className="text-poppins mt-4 bg-blue text-dark-blue w-32 h-12 rounded-lg hover:scale-110 transition-transform hover:bg-yellow hover:translate-x-2">Submit</button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact;