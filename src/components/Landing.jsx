import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Duck from '../assets/duck.gif';
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useRef } from "react";

const Landing = ({ setSelectedPage }) => {
  const domRef = useRef();
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [text] = useTypewriter({
    words: ['a Software Engineer', 'a Full Stack Web Developer', 'excited to Learn'],
    loop: {},
  })

  //use Intersection Observer hook to change page state when scrolled into view
  const handleIntersection = () => {
    setSelectedPage('home');
  };

  useIntersectionObserver(domRef, 0.6, handleIntersection);


  return (
    <section id='home' className="md:flex md:justify-center md:item-center md:h-full py-10 bg-gradient-custom-1" ref={domRef}>
      {/* RIGHT SIDE */}
      <div className="md:order-2 flex justify-center basis-2/4 z-10 mt-16 md:mt-16">
        {isAboveMediumScreens ? (
          <div className="relative flex justify-center item-center overflow-hidden">
            <img className="rounded-full" src={Duck}></img>
          </div>
        ) : (
          <div className="relative flex justify-center item-center overflow-hidden">
            <img className="rounded-full" src={Duck}></img>
          </div>
        )}
      </div>
      {/* LEFT SIDE */}
      <div className="flex justify-center items-center z-30 basis-2/4 ">
        <motion.div
          className="flex flex-col md:justify-start md:items-start justify-center items-center z-30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className="md:text-6xl text-4xl font-playfair z-10 text-center md:text-start md:mt-[50px]">
            Hi, I'm {""}
            <span className="xs:relative font-semibold text-yellow z-20">
              Kimheng
            </span>
          </p>
          <p className="md:text-xl text-md md:text-start mt-1 text-center ">&lt;p&gt;I am {""}
            <span>
              {text}
            </span>
            <Cursor /> &lt;&#92;p&gt;
          </p>
          <div className="flex items-center">
            <AnchorLink className="text-lg font-poppins text-center p-2 rounded-l-lg bg-yellow border-2 border-yellow text-dark-blue mt-3 hover:scale-110 transition-all duration-300"
              href="#contact"
              onClick={() => setSelectedPage('contact')}
            >
              Contact Me
            </AnchorLink>
            <button className="text-lg font-poppins text-center p-2 rounded-r-lg border-2 border-yellow text-white mt-3 hover:scale-110 hover:translate-x-2.5 transition-all duration-300">
              Download my Resume
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Landing;