import { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navbar from '../components/Navbar';
import text from '../assets/text.json';
import image1 from '../assets/premise/image1.jpg';
import image2 from '../assets/premise/image2.jpg';
import image3 from '../assets/premise/image3.jpg';

const images = [image1, image2, image3, image1, image2, image3, image1, image2];

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
      <div className="position-relative" style={{ height: `${events * 100}vh` }}>
        <TransitionGroup>
          <CSSTransition
            key={activeIndex}
            timeout={500}
            classNames="fade"
          >
            <div className="slide position-fixed w-100 h-100 top-0" style={{ backgroundImage: `url(${eventData[activeIndex].picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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