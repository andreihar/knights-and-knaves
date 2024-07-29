import { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navbar from '../components/Navbar';
import text from '../assets/text.json';
import image1 from '../assets/premise/1.jpg';
import image2 from '../assets/premise/2.jpg';
import image3 from '../assets/premise/3.jpg';
import image4 from '../assets/premise/4.jpg';
import image5 from '../assets/premise/5.jpg';
import image6 from '../assets/premise/6.jpg';
import image7 from '../assets/premise/7.jpg';
import image8 from '../assets/premise/8.jpg';
import image9 from '../assets/premise/9.jpg';

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const events = Object.keys(text.timeline).length / 3;
const eventData = Array.from({ length: events }, (_, i) => {
  const eventKey = `event${i + 1}`;
  const descriptionKey = `description${i + 1}`;
  const dateKey = `date${i + 1}`;
  return {
    date: (text.timeline as { [key: string]: string; })[dateKey],
    event: (text.timeline as { [key: string]: string; })[eventKey],
    description: (text.timeline as { [key: string]: string; })[descriptionKey],
    picture: images[i]
  };
});

function Premise() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newIndex = Math.round(window.scrollY / window.innerHeight);
      setActiveIndex(newIndex);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="ReactModal__Content region position-relative margin-navbar-height" style={{ height: `${events * 100}vh` }}>
        <TransitionGroup>
          <CSSTransition key={activeIndex} timeout={500} classNames="fade">
            <div className="slide position-fixed w-100 min-height" style={{ backgroundImage: `url(${eventData[activeIndex].picture})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
              <div className="border-frame modal-body position-absolute text-white py-2 px-1 pb-1 pl-3" style={{ bottom: '10px', left: '10px', right: '10px', maxWidth: '600px' }}>
                <div className="d-flex justify-content-between">
                  <div className="p-4">
                    <h4>{eventData[activeIndex].date}</h4>
                    <h1>{eventData[activeIndex].event}</h1>
                    <div className="overflow-auto my-4" style={{ maxHeight: '220px' }}>
                      <p>{eventData[activeIndex].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
}

export default Premise;
