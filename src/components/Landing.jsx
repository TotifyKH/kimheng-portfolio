import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Mario from '../assets/mario-coding.gif';
import Duck from '../assets/duck.gif';

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [text] = useTypewriter({
    words: ['a Software Engineer', 'a Full Stack Web Developer', 'excited to Learn'],
    loop: {},
  })
  return (
    <section id='home' className="md:flex md:justify-center md:item-center md:h-full py-10 bg-gradient-custom-1">
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
      <div className="flex justify-center z-30 basis-2/4 mt-12 md:mt-32">
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
          <p className="md:text-6xl text-4xl font-playfair z-10 text-center md:text-start md:mt-[100px]">
            Hi, I'm {""}
            <span className="xs:relative font-semibold text-yellow z-20">
             Kimheng
            </span>
          </p>
          <p className="md:text-xl text-md md:text-start text-center ">&lt;p&gt;I am {""}
            <span>
              {text}
            </span>
            <Cursor /> &lt;&#92;p&gt;
          </p> 
          <button className="md:text-xl text-lg font-poppins text-center p-2 bg-yellow text-dark-blue rounded-full mt-3">
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Landing;