import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import videoSource from '../assets/trailer.mp4';

function Home() {
  return (
    <>
    <Navbar />
    {/* Hero */}
    <header id="hero" className="d-flex text-center text-bg-dark">
      <div className="cover-container d-flex w-100 min-vh-100 p-3 mx-auto flex-column justify-content-center">
        <div className="px-3">
          <h1 className="shadow p-3">Cover your page.</h1>
          <p className="lead  p-3">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen background
            photo to make it your own.
          </p>
          <p className="lead">
            <a href="#recipes" className="ms-md-2"><button type="button" className="btn btn-secondary btn-lg px-4">Watch Trailer</button></a>
            <a href="#trailer" className="button">Watch Trailer</a>
            <button type="button" className="button">Click Me!</button>
          </p>
        </div>
      </div>
    </header>
    {/* Trailer w/ paragraph */}
    <section className="min-vh-100 d-flex flex-column">
      <h1 className="text-center section-title">Your Heading</h1>
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 d-flex flex-column justify-content-center">
              <h1>Step Into the Tavern!</h1>
              <p>Sheathe your sword and draw you deck, it's time for Hearthstone! You'll sling spells, summon minions, and command the heroes of Warcraft in battles of epic strategy.</p>
            </div>
            <div className="col-lg-7 d-flex justify-content-center float-right">
              <div className="ratio ratio-16x9">
                <video controls>
                  <source src={videoSource} type="video/mp4"/>
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Trailer */}
    {/* <section className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h1>Step Into the Tavern!</h1>
            <div className="ratio ratio-16x9">
              <video controls>
                <source src={videoSource} type="video/mp4"/>
              </video>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* Inspiration from */}
    {/* Game Pillars */}
    {/* <section className="d-flex flex-column align-items-center justify-content-center min-vh-100 container">
      <div className="row justify-content-center">
        <div className="col-lg-3 text-center me-3 my-5">
          <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3"/>
          <h2 className="fw-normal mb-3">What</h2>
          <p className="fs-5">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p><a className="btn btn-secondary mt-3" href="#">View details »</a></p>
        </div>
        <div className="col-lg-3 text-center me-3 my-5">
          <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3"/>
          <h2 className="fw-normal mb-3">How</h2>
          <p className="fs-5">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p><a className="btn btn-secondary mt-3" href="#">View details »</a></p>
        </div>
        <div className="col-lg-3 text-center my-5">
          <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3"/>
          <h2 className="fw-normal mb-3">Why</h2>
          <p className="fs-5">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p><a className="btn btn-secondary mt-3" href="#">View details »</a></p>
        </div>
      </div>
    </section> */}
    {/* Thematic Backstory */}
    {/* Gallery */}
    {/* Logs */}
    {/* Description */}
    {/* <Footer /> */}
</>

  )
}

export default Home
