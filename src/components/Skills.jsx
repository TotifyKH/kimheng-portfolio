import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from 'framer-motion';

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id='skills' className="flex justify-center md:h-full py-10 bg-gradient-custom-2">
      <h1 className="text-3xl font-poppins mt-12">My Skills</h1>
    </section>
  )
}

export default Skills;