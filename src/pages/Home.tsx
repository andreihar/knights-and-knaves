import { HashLink as Link } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedDiv from '../components/AnimatedDiv';
import text from '../assets/text.json';
import heroImage from '../assets/images/hero.jpg';
import pillar1Image from '../assets/pillars/1.jpg';
import pillar2Image from '../assets/pillars/2.jpg';
import pillar3Image from '../assets/pillars/3.jpg';

function Home() {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <header id="hero" className="d-flex text-center text-bg-dark" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, var(--hero-alpha)), rgba(0, 0, 0, var(--hero-alpha))), url(${heroImage})` }} >
        <div className="cover-container d-flex w-100 min-vh-100 p-3 mx-auto flex-column justify-content-center">
          <div className="px-3">
            <AnimatedDiv duration={0.7} hidden={{ opacity: 0, x: -50 }}>
              <h1 className="p-3 pb-0 display-2 text-primary" >{text.gameTitle}</h1>
            </AnimatedDiv>
            <AnimatedDiv duration={0.6} delay={0.6} hidden={{ opacity: 0, x: -30 }}>
              <h1 className="p-3 pt-0 text-light mb-5">{text.gameSmallTitle}</h1>
            </AnimatedDiv>
            <AnimatedDiv duration={1} delay={1.2} hidden={{ opacity: 0 }}>
              <p className="lead">
                <Link to="#trailer" className="button py-3 px-4 position-relative align-middle">Watch Trailer</Link>
              </p>
            </AnimatedDiv>
          </div>
        </div>
      </header>
      <main className="border">
        {/* Trailer w/ paragraph */}
        <section id="trailer" className="min-vh-100 d-flex flex-column" >
          <h1 className="text-center section-title">Trailer</h1>
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
            <div className="container">
              <div className="row">
                <AnimatedDiv className="col-lg-5 d-flex flex-column justify-content-center" duration={1} hidden={{ opacity: 0, x: -100 }}>
                  <h1>Venture into Treachery's Domain!</h1>
                  <p>{text.coreStatement}</p>
                </AnimatedDiv>
                <div className="col-lg-7 d-flex justify-content-center float-right">
                  <AnimatedDiv className="ratio ratio-16x9" duration={0.7} delay={0.7} hidden={{ opacity: 0, scale: 0.95 }}>
                    <iframe src="https://www.youtube.com/embed/j8RFu0XfuFM?si=_PAwruA25F45kFn-" allowFullScreen={true}></iframe>
                  </AnimatedDiv>
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
              <div className="row row-cols-1 row-cols-lg-2 align-items-md-center g-5 py-5">
                <AnimatedDiv className="col d-flex flex-column align-items-start gap-2" duration={1} hidden={{ opacity: 0 }}>
                  <p>{text.gameInspiration}</p>
                </AnimatedDiv>
                <div className="col">
                  <div>
                    <AnimatedDiv className="quadruple-grid d-grid" duration={1} delay={0.7} hidden={{ opacity: 0, x: -50 }}>
                      <div className="img-text position-relative d-flex justify-content-center align-items-center">
                        <img src="https://i0.wp.com/islaythedragon.com/wp-content/uploads/2014/01/1-IMG_05761.jpg?fit=1200%2C900&ssl=1&w=640" alt="Inspiration" className="img-fluid" />
                        <h3 className="position-absolute bottom-0 text-white fw-bold">Coup</h3>
                      </div>
                      <div className="img-text position-relative d-flex justify-content-center align-items-center">
                        <img src="https://149455152.v2.pressablecdn.com/wp-content/uploads/2014/02/Werewolf-cards.jpg" alt="Inspiration" className="img-fluid" />
                        <h3 className="position-absolute bottom-0 text-white fw-bold text-center fs-4">One Night Ultimate Werewolf</h3>
                      </div>
                      <div className="img-text position-relative d-flex justify-content-center align-items-center">
                        <img src="https://c4.wallpaperflare.com/wallpaper/1008/880/1005/the-witcher-gwent-the-witcher-card-game-wallpaper-preview.jpg" alt="Inspiration" className="img-fluid" />
                        <h3 className="position-absolute bottom-0 text-white fw-bold fs-3">Gwent</h3>
                      </div>
                      <div className="img-text position-relative d-flex justify-content-center align-items-center">
                        <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2012/12/13/17/42-hobbit-mgmwarner.jpg" alt="Inspiration" className="img-fluid" />
                        <h3 className="position-absolute bottom-0 text-white fw-bold">The Hobbit</h3>
                      </div>
                    </AnimatedDiv>
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
              <AnimatedDiv className="col-lg-3 text-center me-3 my-5" duration={1} delay={0.2} hidden={{ opacity: 0, y: 50 }}>
                <img src={pillar1Image} alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3" />
                <h2 className="fw-normal mb-3">What</h2>
                <p>{text.pillars.what}</p>
              </AnimatedDiv>
              <AnimatedDiv className="col-lg-3 text-center me-3 my-5" duration={1} delay={0.4} hidden={{ opacity: 0, y: 50 }}>
                <img src={pillar2Image} alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3" />
                <h2 className="fw-normal mb-3">How</h2>
                <p>{text.pillars.how}</p>
              </AnimatedDiv>
              <AnimatedDiv className="col-lg-3 text-center my-5" duration={1} delay={0.6} hidden={{ opacity: 0, y: 50 }}>
                <img src={pillar3Image} alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3" />
                <h2 className="fw-normal mb-3">Why</h2>
                <p>{text.pillars.why}</p>
              </AnimatedDiv>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
