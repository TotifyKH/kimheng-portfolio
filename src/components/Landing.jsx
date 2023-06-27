import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from 'framer-motion';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Mario from '../assets/giphy.gif';

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id='home' className="md:flex md:justify-center md:item-center md:h-full py-10">
      {/* RIGHT SIDE */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative flex justify-center item-center overflow-hidden">
            <img className="" src={Mario}></img>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* LEFT SIDE */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32 mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 1, ease: "easeOut"}}
            variants={{
              hidden: {opacity: 0, x: -50},
              visible: {opacity: 1, x: 0}
            }}
          >
            <p className="text-3xl font-playfair z-10 text-center md:text-start">
              Hi, I'm {""}
              <span className="xs:relative xs:text-dark-grey font-semibold z-20">
                Kimheng
              </span>
            </p>
          </motion.div>
      </div>
    </section>
  )
}

export default Landing;