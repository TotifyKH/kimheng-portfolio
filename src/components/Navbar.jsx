import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-yellow" : ""} hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  return (
    <nav className='z-40 w-full fixed top-0 py-6 bg-gradient-custom-1'>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bol">KP</h4>
        {isAboveSmallScreens ? (
          <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
            <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page='Skills' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page='Projects' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        ) : (
          <button
            className="rounded-full p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className='text-white' fontSize="large" />
          </button>
        )}
        {/* MOBILE MENU */}
        {!isAboveSmallScreens && isMenuOpen && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE BUTTON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <CloseIcon className='text-white' fontSize="large" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link page='Home' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page='Skills' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page='Projects' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              <Link page='Contact' selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;