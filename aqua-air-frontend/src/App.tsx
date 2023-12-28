import { Fragment, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import banner_logo from './assets/banner-logo.png'
import banner_logo_white from './assets/white-banner-logo.png'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import OHcrud from './pages/OHcrud'
import WIP from './pages/WIP'

function App() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledForTopArrow, setScrolledForTopArrow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoaded(true);
      window.addEventListener('load', () => {
        setLoaded(true);
      });
    }, 0);
    
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handleTransitionEnd = () => {
    // Remove the loader element from the DOM
    const loader = document.querySelector('.loader');
    if (loader instanceof HTMLElement && loader.parentNode) {
      loader.parentNode.removeChild(loader);
    }
  };

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollForTopArrow = () => {
      if (window.scrollY >= 950) {
        setScrolledForTopArrow(true);
      } else {
        setScrolledForTopArrow(false);
      }
    };

    window.addEventListener('scroll', handleScrollForTopArrow);

    return () => {
      window.removeEventListener('scroll', handleScrollForTopArrow);
    };
  }, []);

  function scrollToTop() {
    const topContent = document.getElementById('top-content') as HTMLElement;
    topContent.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Fragment>
      <header id='top-content'>
        <Router>
          <nav id="navbar-aqua" className={`navbar sticky ${scrolled ? 'navbar-scrolled' : 'navbar-scroll'} ${loaded ? '' : 'loader--hidden'}`}>
            <Link to='/'><div className="navbar-brand"><img src={scrolled ? banner_logo : banner_logo_white} alt="Aqua-Air" height="50rem" /></div></Link>
            <ul>
              <li>
                <Link to='/crud'><div id='crud' className={`nav-link ${scrolled? 'hover-underline-animation-scrolled' : 'hover-underline-animation'}`}>Oh, CRUD!</div></Link>
              </li>
              <li>
              <a className={`nav-link ${scrolled? 'hover-underline-animation-scrolled' : 'hover-underline-animation'}`} href="https://www.facebook.com/people/Stuffed-Slice/61551555076645/" target="blank">Stuffed Slice</a>
              </li>
              <li>
                <a className={`nav-link ${scrolled? 'hover-underline-animation-scrolled' : 'hover-underline-animation'}`} href="https://www.instagram.com/stuffed_slice/" target="blank">Sandwich</a>
              </li>
              <li>
                <a className={`nav-link ${scrolled? 'hover-underline-animation-scrolled' : 'hover-underline-animation'}`} href="https://www.facebook.com/cinthney/" target="blank">Bouquet</a>
              </li>
              <li>
                <a className={`nav-link ${scrolled? 'hover-underline-animation-scrolled' : 'hover-underline-animation'}`} href="https://www.facebook.com/Irvin.what/" target="blank">Photographs Sold</a>
              </li>
            </ul>
            <Link to='/under_construction'><button onClick={scrollToTop} className='main-btn'>LOG IN</button></Link>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/crud' element={<OHcrud />} />
            <Route path='/under_construction' element={<WIP />} />
          </Routes>
        </Router>
      </header>
      <div className='footer-wrap'>
        <div className='footer-content'>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <p className='copyleft'>The year is 20XX. Everyone plays Fox at TAS levels of perfection. Because of this, the winner of a match depends solely on port priority. The RPS metagame has evolved to ridiculous levels due to it being the only remaining factor to decide matches.</p>
          <hr />
          <p className='twentyXX'>&copy; {currentYear} AQUA-AIR SEASIA, All rights and lefts.</p>
          <hr />
        </div>
      </div>
      <div className={`topbutton ${scrolledForTopArrow ? '' : 'topbutton--hidden'}`} onClick={scrollToTop}>
        <FontAwesomeIcon className='topbuttonicon' icon={faArrowUp} />
      </div>
      <div className={`loader ${loaded ? 'loader--hidden' : ''}`} onTransitionEnd={handleTransitionEnd}>
        <p className={`loading-text ${loaded ? 'loader--hidden' : ''}`}>AQUA-AIR<br />SEASIA</p>
      </div>
    </Fragment>
  )
}

export default App
