import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import videoSource from '../assets/images/trailer.mp4';
import text from '../assets/text.json';

function Home() {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <header id="hero" className="d-flex text-center text-bg-dark" >
        <div className="cover-container d-flex w-100 min-vh-100 p-3 mx-auto flex-column justify-content-center">
          <div className="px-3">
            <h1 className="p-3 pb-0 display-2 text-primary text-nowrap">{text.gameTitle}</h1>
            <h1 className="p-3 pt-0 text-light mb-5">{text.gameSmallTitle}</h1>
            <p className="lead">
              <a href="#trailer" className="button">Watch Trailer</a>
            </p>
          </div>
        </div>
      </header>
      <main>
        {/* Trailer w/ paragraph */}
        <section id="trailer" className="min-vh-100 d-flex flex-column" >
          <h1 className="text-center section-title">Trailer</h1>
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
            <div className="container">
              <div className="row">
                <div className="col-lg-5 d-flex flex-column justify-content-center">
                  <h1>Core Statement</h1>
                  <p>{text.coreStatement}</p>
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
        {/* Inspiration */}
        <section id="inspiration" className="min-vh-100 d-flex flex-column" >
          <h1 className="text-center section-title">Inspiration</h1>
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
            <div className="container px-4">
              <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div className="col d-flex flex-column align-items-start gap-2">
                  <p>{text.gameInspiration}</p>
                </div>
                <div className="col">
                  <div>
                    <div className="quadruple-grid">
                      <div className="img-text">
                        <img src="https://i0.wp.com/islaythedragon.com/wp-content/uploads/2014/01/1-IMG_05761.jpg?fit=1200%2C900&ssl=1&w=640" alt="Inspiration" className="img-fluid"/>
                        <h3>Coup</h3>
                      </div>
                      <div className="img-text">
                        <img src="https://149455152.v2.pressablecdn.com/wp-content/uploads/2014/02/Werewolf-cards.jpg" alt="Inspiration" className="img-fluid"/>
                        <h3 className="text-center fs-4">One Night Ultimate Werewolf</h3>
                      </div>
                      <div className="img-text">
                        <img src="https://c4.wallpaperflare.com/wallpaper/1008/880/1005/the-witcher-gwent-the-witcher-card-game-wallpaper-preview.jpg" alt="Inspiration" className="img-fluid"/>
                        <h3 className="fs-3">Gwent</h3>
                      </div>
                      <div className="img-text">
                        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2012/12/13/17/42-hobbit-mgmwarner.jpg" alt="Inspiration" className="img-fluid"/>
                        <h3>The Hobbit</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Game Pillars */}
        <section id="pillars" className="min-vh-100 d-flex flex-column" >
          <h1 className="text-center section-title">Game Pillars</h1>
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 container">
          <div className="row justify-content-center">
            <div className="col-lg-3 text-center me-3 my-5">
              <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3"/>
              <h2 className="fw-normal mb-3">What</h2>
              <p>{text.pillars.what}</p>
            </div>
            <div className="col-lg-3 text-center me-3 my-5">
              <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3"/>
              <h2 className="fw-normal mb-3">How</h2>
              <p>{text.pillars.how}</p>
            </div>
            <div className="col-lg-3 text-center my-5">
              <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3"/>
              <h2 className="fw-normal mb-3">Why</h2>
              <p>{text.pillars.why}</p>
            </div>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
