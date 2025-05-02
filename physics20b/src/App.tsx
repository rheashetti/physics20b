import './App.css'
import './index.css'
import Issue from './pages/issue'
import Home from './pages/home'
import Background from './pages/background'
import Conclusion from './pages/conclusion'
import { useEffect } from 'react';

function App() {

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      let offset = 70;
      if(targetElement.id === 'about'){
        offset = 150;
      }
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.top-nav-bar-links a');

      let currentSectionId = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 200; 
        if (window.pageYOffset >= sectionTop) {
          currentSectionId = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
    <>
      <div className="top-nav-bar">

        <div className="top-nav-bar-links">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
          <a href="#background" onClick={(e) => handleScroll(e, 'background')}>Starlink and the Limits of Space Law</a>
          <a href="#issue" onClick={(e) => handleScroll(e, 'issue')}>The Cost of Connectivity</a>
          <a href="#conclusion" onClick={(e) => handleScroll(e, 'conclusion')}>The Push for Regulation</a>
        </div>
      </div>
      <div id="root">
        <Home />
        <Background />
        <Issue />
        <Conclusion />
      </div>
      <div className="footer">
        <p>© 2025 Rhea Shetti</p>
      </div>
        
    </>
  )
}

export default App
