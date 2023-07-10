import useMediaQuery from "../../hooks/useMediaQuery";
import pokerImg from '../../assets/poker.png';
import pokerImg2 from '../../assets/poker-2.png';
import pokerImg3 from '../../assets/poker-3.png';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Poker = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1300px)");
  const pokerHashTag = ['Handlebars', 'SocketIO', 'PostgresSQL'];
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
            <img className='rounded-md border-2 border-purple' width='320px' src={pokerImg2} />
            <img className='rounded-md border-2 border-purple' width='320px' src={pokerImg3} />
            <img className='rounded-md border-2 border-purple' width='320px' src={pokerImg} />
          </div>
          <div className='md:ml-10 mt-5 md:mt-0  flex flex-col font-poppins justify-center'>
            <h2 className=' text-yellow text-3xl'>Texas Holdem Poker</h2>
            <h2 className='text-xl'>A Multiplayer Poker Web App</h2>
            <div className='mt-4'>
              <p className='text-lg text-yellow'>Overview</p>
              <div className='pl-5'>
                <ul className="list-disc">
                  <li>Led the backend development of a multiplayer poker game, enabling real-time updates for players.</li>
                  <li>Implemented secure session management and authentication, enabling users to log in and play multiple games concurrently.</li>
                  <li>Integrated a global chat and in-game chat using WebSockets, allowing players to communicate</li>
                  <li>Collaborated closely with a team of four to design and lead the implementation of game mechanics for both the front-end and back-end, encompassing card dealing, betting, and winning conditions.</li>
                  <li>Efficiently deployed the web application and database on the Render platform.</li>
                </ul>
              </div>
              <p className='mt-5 text-lg text-yellow'>Technology</p>
              <p>NodeJS, ExpressJS, WebSocket, Migration, PostgresSQL, Render</p>
              <p className='mt-5 text-lg text-yellow'>Link</p>
              <a href='https://github.com/csc-667-fall-2022-sfsu-roberts/term-project-team-pcarkpab' target="_blank" className="underline text-blue">GitHub Repository<span><OpenInNewIcon fontSize='small' /> </span></a>
            </div>
          </div>
          <CloseIcon className='hover:cursor-pointer absolute top-3 right-3 ' onClick={handleClose} />
        </div>
      </Modal>
      <div className="rounded-xl m-5 mb-3">
        <img className="rounded-xl" src={pokerImg}></img>
      </div>

      <div className='basis-1/2 flex flex-col justify-start px-5'>
        <p className='text-lg font-poppins'><span className='text-yellow'>Texas Holdem Poker</span> - Multiplayer Poker Web App</p>
        <div className='flex flex-row flex-wrap justify-start text-start'>
          {pokerHashTag.map((language, index) => (
            <div className="text-xs text-green m-0.5 py-0.5 pr-1 rounded-full" key={index}>{'#'}{language} {''}</div>
          ))}
        </div>
        <p className='text-md text-right pr-2 mt-2'><span className='text-blue'>onClick</span>=<span className='text-yellow'>&#123;</span><span className='text-blue'>moreInfo</span><span className='text-yellow'>&#125;</span></p>
      </div>

    </div>


  )
}

export default Poker;