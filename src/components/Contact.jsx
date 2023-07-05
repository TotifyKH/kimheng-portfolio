import useMediaQuery from "../hooks/useMediaQuery";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { useRef } from "react";

const Contact = ({setSelectedPage}) => {
  const domRef = useRef();

  const handleIntersection = () => {
    setSelectedPage('contact');
  };

  useIntersectionObserver(domRef, 0.6, handleIntersection);

  return (
    <section id='contact' className="flex justify-center items-center md:h-full w-full py-10 bg-gradient-custom-2" ref={domRef}>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 p-1 bg-gradient-rainblue-2 rounded-md">
        <div className="flex flex-col w-80 h-[35rem] items-center bg-dark-purple md:rounded-l-md p-2">
          <p>Contact Info</p>
        </div>
        <div className="flex flex-col w-80 items-center md:w-[30rem] h-[35rem] bg-dark-purple md:rounded-r-md p-2">
          <p>Message Me</p>
        </div>
      </div>
    </section>
    )
}

export default Contact;