import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import videoSource from '../assets/trailer.mp4';
import text from '../assets/text.json';
import React from 'react';

import { defaultRegions } from "../assets/DefaultRegions"
import Region from '../components/Region';

function Home() {
  return (
    <>
    <Navbar />
    {/* Hero */}
    <header id="hero" className="d-flex text-center text-bg-dark" >
      <div className="cover-container d-flex w-100 min-vh-100 p-3 mx-auto flex-column justify-content-center">
        <div className="px-3">
          <h1 className="shadow p-3">{text.gameTitle}</h1>
          {/* <p className="lead  p-3">{text.coreStatement}</p> */}
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
        <div className="container px-4 py-5">
          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <div className="col d-flex flex-column align-items-start gap-2">
              <p>{text.gameInspiration}</p>
            </div>
            <div className="col">
              <div className="row row-cols-1 row-cols-sm-2 g-4">
                <div className="col d-flex flex-column gap-2">
                  <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" className="" alt="..."/>
                </div>
                <div className="col d-flex flex-column gap-2">
                  <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" className="" alt="..."/>
                </div>
                <div className="col d-flex flex-column gap-2 position-relative">
                  <img src="https://i0.wp.com/islaythedragon.com/wp-content/uploads/2014/01/1-IMG_05761.jpg?fit=1200%2C900&ssl=1&w=640" className="rounded-4 shadow-lg" alt="..."/>
                  <h3 className="position-absolute bottom-0 ms-2 text-white opacity-75 p-2 display-6 fw-bold fs-3 fs-md-4 fs-lg-5">Coup</h3>
                </div>
                <div className="col d-flex flex-column gap-2">
                  <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg ratio ratio-4x3" style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg")' }}>
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                      <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-black fs-3 fs-md-4 fs-lg-5">Coup</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Inspiration 2 */}
    <section id="inspiration" className="min-vh-100 d-flex flex-column" >
      <h1 className="text-center section-title">Inspiration</h1>
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <div className="container px-4 py-5">
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
                    <img src="https://images.hdqwalls.com/download/the-witcher-3-wild-hunt-4-1024x768.jpg" alt="Inspiration" className="img-fluid"/>
                    <h3>The Witcher</h3>
                  </div>
                  <div className="img-text">
                    <img src="https://i0.wp.com/islaythedragon.com/wp-content/uploads/2014/01/1-IMG_05761.jpg?fit=1200%2C900&ssl=1&w=640" alt="Inspiration" className="img-fluid"/>
                    <h3>Coup</h3>
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
          <p>{text.pillarWhat}</p>
        </div>
        <div className="col-lg-3 text-center me-3 my-5">
          <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3"/>
          <h2 className="fw-normal mb-3">How</h2>
          <p>{text.pillarHow}</p>
        </div>
        <div className="col-lg-3 text-center my-5">
          <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3"/>
          <h2 className="fw-normal mb-3">Why</h2>
          <p>{text.pillarWhy}</p>
        </div>
      </div>
      </div>
    </section>
    {/* Thematic Backstory */}
    {/* Gallery */}
    {/* Logs */}
    {/* Description */}
    {/* <Footer /> */}
    <section id="section-dark" className="min-vh-100 d-flex flex-column" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images5.alphacoders.com/424/424912.jpg')`
    }}>
      <h1 className="text-center section-title text-white">Your Heading</h1>
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
      </div>
    </section>
    </main>
    <Footer />
    </>
  )
}

export default Home
