import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Masonry from 'react-masonry-css'

// Gallery Images
import diceRubies from '../assets/gallery/dice_rubies.jpg'
import gameboard from '../assets/gallery/gameboard.jpg'

function Gallery() {
  return (
    <>
      <Navbar />
      <section className="min-vh-100 d-flex flex-column" >
        <h1 className="text-center section-title">Gallery</h1>
        <div className="d-flex flex-column align-items-center flex-grow-1">
          <div className="container">
            <Masonry
              breakpointCols={3}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
                <div className="image-container">
                  <img src={diceRubies} className="img-fluid" alt="..."/>
                  <h1>Dice and Rubies</h1>
                </div>
                <div className="image-container">
                  <img src={gameboard} className="img-fluid" alt="..."/>
                  <h1>Gameboard</h1>
                </div>
            </Masonry>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Gallery
