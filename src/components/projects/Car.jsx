import useMediaQuery from "../../hooks/useMediaQuery";
import carImg from '../../assets/car.png';
import carImg2 from '../../assets/car2.jpg';
import carImg3 from '../../assets/car3.png';

import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Car = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1300px)");
  const carHashTag = ['Raspberry Pi', 'C', 'Multi-Threads', 'Embedded'];

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = (e) => {
    //Stop it from propagating to parent div which will trigger onClick again
    e.stopPropagation();
    setOpen(false);
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: 24,
    p: 4,
  };

  const mobileStyle = {
    position: 'absolute',
    top: '0%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    marginTop: '1rem',
    boxShadow: 24,
  }

  return (

    <div className="flex flex-col items-center h-[20rem] min-h-full w-[21rem] border-2 rounded-xl border-yellow hover:scale-105 transition-transform hover:cursor-pointer" onClick={handleOpen}>
      <Modal
        open={open}
        onClose={handleClose}
        className='overflow-auto backdrop-filter backdrop-blur-sm'
      >
        <div style={isAboveMediumScreens ? style : mobileStyle} className='flex flex-col md:flex-row w-[90%] md:w-[60%]  p-10 border-yellow border-2 bg-dark-purple rounded-xl outline-none'>
          <div className='flex flex-col gap-5 justify-center items-center shrink-0'>
            <img className='rounded-md border-2 border-purple' width='320px' src={carImg} />
            <img className='rounded-md border-2 border-purple' width='320px' src={carImg2} />
            <img className='rounded-md border-2 border-purple' width='320px' src={carImg3} />
          </div>
          <div className='md:ml-10 mt-5 md:mt-0  flex flex-col font-poppins justify-center'>
            <h2 className=' text-yellow text-3xl'>Raspberry Pi Car</h2>
            <h2 className='text-xl'>Following Line and Obstacle Avoidance</h2>
            <div className='mt-4'>
              <p className='text-lg text-yellow'>Overview</p>
              <div className='pl-5'>
                <ul className="list-disc">
                  <li>Made contributions to the code development for line sensors and obstacle detection functionalities.</li>
                  <li>Implemented logic using line sensor readings to ensure precise tracking of the car</li>
                  <li>Implemented multi-threading allowing for parallel processing and efficient handling of sensor data.</li>
                  <li>Collaborated with team members to devise an obstacle avoidance routine using two echo sensors, enabling the car to navigate around obstacles effectively.</li>
                  <li>Resolved hardware issues related to breadboard/wiring connections and motor hat power delivery.</li>
                  
                </ul>
              </div>
              <p className='mt-5 text-lg text-yellow'>Technology</p>
              <p>C, RaspberryPi, PiGPIO, Threading </p>
              <p className='mt-5 text-lg text-yellow'>Link</p>
              <a href='https://docs.google.com/document/d/1yX801H7f6qYmBNbW4J5ag9vbar0PsFJChjZAZEWv-zY/edit?usp=sharing' target="_blank" className="underline text-blue">Project Documentation<span><OpenInNewIcon fontSize='small' /> </span></a><br></br>
              <a href='https://www.youtube.com/watch?v=S-NHLAajFuw' target="_blank" className="underline text-blue">Youtube Video<span><OpenInNewIcon fontSize='small' /> </span></a>
            </div>
          </div>
          <CloseIcon className='hover:cursor-pointer absolute top-3 right-3 ' onClick={handleClose} />
        </div>
      </Modal>
      <div className="rounded-xl m-5 mb-3">
        <img className="rounded-xl" src={carImg}></img>
      </div>

      <div className='basis-1/2 flex flex-col justify-start px-5 '>
        <p className='text-lg font-poppins'><span className='text-yellow'>Raspberry Pi Car</span> - Following Line and Obstacle Avoidance</p>
        <div className='flex flex-row flex-wrap justify-start text-start'>
          {carHashTag.map((language, index) => (
            <div className="text-xs text-green m-0.5 py-0.5 pr-1 rounded-full" key={index}>{'#'}{language} {''}</div>
          ))}
        </div>
        <p className='text-md text-right pr-2 mt-2'><span className='text-blue'>onClick</span>=<span className='text-yellow'>&#123;</span><span className='text-blue'>moreInfo</span><span className='text-yellow'>&#125;</span></p>
      </div>

    </div>


  )
}

export default Car;