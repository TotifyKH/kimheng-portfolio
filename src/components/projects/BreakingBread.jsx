import useMediaQuery from "../../hooks/useMediaQuery";
import breakingBreadImg from '../../assets/breaking-bread.jpg';
import breakingBreadImg2 from '../../assets/breaking-bread-2.png';
import breakingBreadImg3 from '../../assets/breaking-bread-3.png';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const BreakingBread = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1300px)");
  const breakingBreadHashTag = ['React', 'MongoDB', 'AWS-S3', 'Amplify'];
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
            <img className='rounded-md border-2 border-purple' width='320px' src={breakingBreadImg} />
            <img className='rounded-md border-2 border-purple' width='320px' src={breakingBreadImg2} />
            <img className='rounded-md border-2 border-purple' width='320px' src={breakingBreadImg3} />
          </div>
          <div className='md:ml-10 mt-5 md:mt-0  flex flex-col font-poppins justify-center'>
            <h2 className=' text-yellow text-3xl'>Breaking Bread</h2>
            <h2 className='text-xl'>A MERN Stack Bakery Web App</h2>
            <div className='mt-4'>
              <p className='text-lg text-yellow'>Overview</p>
              <div className='pl-5'>
              <ul className="list-disc">
                <li>Collaborated with a friend on a personal learning project involving frontend and backend development.</li>
                <li>Designed the backend using the MVC pattern for a well-organized and scalable architecture.</li>
                <li>Implemented a fully functional shopping cart and checkout system.</li>
                <li>Created an admin dashboard for product management.</li>
                <li>Utilized AWS S3 for efficient image storage.</li>
                <li>Deployed the web application on AWS EC2.</li>
                <li>Integrated AWS Route 53 for assigning a custom domain.</li>
              </ul>
              </div>
              <p className='mt-5 text-lg text-yellow'>Technology</p>
              <p>NodeJS, ExpressJS, MongoDB, ReactJS, Material UI, AWS S3</p>
              <p className='mt-5 text-lg text-yellow'>Link</p>
              <a href='https://breaking-bread.kimheng-server.live' target="_blank" className="underline text-blue">https://breaking-bread.kimheng-server.live</a>
            </div>
          </div>
          <CloseIcon className='hover:cursor-pointer absolute top-3 right-3 ' onClick={handleClose} />
        </div>
      </Modal>
      <div className="rounded-xl m-5 mb-3">
        <img className="rounded-xl" src={breakingBreadImg}></img>
      </div>
      <div className='basis-1/2 flex flex-col justify-start px-5 '>
        <p className='text-lg font-poppins'><span className='text-yellow'>Breaking Bread</span> - MERN Stack Bakery Web App</p>
        <div className='flex flex-row flex-wrap justify-start text-start'>
          {breakingBreadHashTag.map((language, index) => (
            <div className="text-xs text-green m-0.5 py-0.5 pr-1 rounded-full" key={index}>{'#'}{language} {''}</div>
          ))}
        </div>
        <p className='text-md text-right pr-2 mt-2'><span className='text-blue'>onClick</span>=<span className='text-yellow'>&#123;</span><span className='text-blue'>moreInfo</span><span className='text-yellow'>&#125;</span></p>
      </div>

    </div>


  )
}

export default BreakingBread;