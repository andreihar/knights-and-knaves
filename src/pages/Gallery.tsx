import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Masonry from 'react-masonry-css';
import ModalImage from "react-modal-image";

// Gallery Images
import dice from '../assets/gallery/dice.jpg';
import rubies from '../assets/gallery/rubies.jpg';
import cardsHand from '../assets/gallery/cards hand.jpg';
import backside from '../assets/gallery/backside.jpg';
import cardsAll from '../assets/gallery/cards all.jpg';
import cards from '../assets/gallery/cards.jpg';
import prototypes from '../assets/gallery/prototypes.jpg';
import moodboard from '../assets/gallery/moodboard.png';

function Gallery() {
  const images = [
    { src: cards, title: 'Cards' },
    { src: backside, title: 'Backside of Cards' },
    { src: cardsHand, title: 'Cards in Hand' },
    { src: dice, title: 'Dice' },
    { src: rubies, title: 'Rubies' },
    { src: cardsAll, title: 'All Cards' },
    { src: prototypes, title: 'Prototype Cards' },
    { src: moodboard, title: 'Moodboard' }
  ];

  return (
    <>
      <Navbar />
      <main className="min-vh-100 d-flex flex-column" >
        <h1 className="text-center section-title">Gallery</h1>
        <div className="d-flex flex-column align-items-center flex-grow-1">
          <div className="container">
            <Masonry
              breakpointCols={{
                default: 3,
                1200: 2,
                768: 1
              }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {images.map((image, index) => (
                <div key={index} className="image-container">
                  {/* <img src={image.src} className="img-fluid" alt={image.title} /> */}
                  <ModalImage className="img-fluid" small={image.src} large={image.src} hideZoom={true} alt="" />
                  <h1>{image.title}</h1>
                </div>
              ))}
            </Masonry>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Gallery;
