import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
    <main>
    {/* Trailer w/ paragraph */}
    <section className="min-vh-100 d-flex flex-column">
      <h1 className="text-center section-title">Trailer</h1>
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
    <section id="trailer" className="min-vh-100 d-flex flex-column">
      <h1 className="text-center section-title">Trailer</h1>
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <div className="col-8 container">
          <div className="ratio ratio-16x9">
            <video controls>
              <source src={videoSource} type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    </section>
    {/* Inspiration 1 */}
    <section className="min-vh-100 d-flex flex-column">
      <h1 className="text-center section-title">Inspiration</h1>
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <div className="container px-4 py-5">
          <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
            <div className="col d-flex flex-column align-items-start gap-2">
              <h2 className="fw-bold text-body-emphasis">Cool slogan idk</h2>
              <p className="text-body-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium fuga velit iste, eum odio deserunt est pariatur quasi eos maiores sequi, ex voluptatum accusantium impedit aspernatur recusandae obcaecati nihil aperiam.</p>
              <a href="#" className="btn btn-primary btn-lg">Primary button</a>
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
    <section className="min-vh-100 d-flex flex-column">
      <h1 className="text-center section-title">Inspiration</h1>
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <div className="container marketing">
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Coup</h2>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facilis officiis ex dolorum tempore! Obcaecati non quam sint earum perferendis sapiente nam aperiam adipisci quia. Aliquid culpa saepe optio. Dolor.</p>
            </div>
            <div className="col-md-5">
              <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" className="img-fluid mx-auto" alt="Coup"></img>
            </div>
          </div>
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">Coup 2</h2>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod voluptate quis, impedit quaerat laboriosam fuga eos labore explicabo vitae assumenda rerum at aspernatur eius necessitatibus nobis vero odit distinctio totam.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" className="img-fluid mx-auto" alt="Coup"></img>
            </div>
          </div>
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Coup 3</h2>
              <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ducimus id sed, reiciendis quod consequatur illum voluptatem harum tenetur similique delectus repudiandae adipisci veniam, magnam vero vitae expedita sapiente iure.</p>
            </div>
            <div className="col-md-5">
              <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" className="img-fluid mx-auto" alt="Coup"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Game Pillars */}
    <section className="min-vh-100 d-flex flex-column">
      <h1 className="text-center section-title">Game Pillars</h1>
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 container">
      <div className="row justify-content-center">
        <div className="col-lg-3 text-center me-3 my-5">
          <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3"/>
          <h2 className="fw-normal mb-3">What</h2>
          <p className="fs-5">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p><a href="#trailer" className="button bg-white mt-3">View details »</a></p>
        </div>
        <div className="col-lg-3 text-center me-3 my-5">
          <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3"/>
          <h2 className="fw-normal mb-3">How</h2>
          <p className="fs-5">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p><a href="#trailer" className="button bg-white mt-3">View details »</a></p>
        </div>
        <div className="col-lg-3 text-center my-5">
          <img src="https://t3.ftcdn.net/jpg/00/32/96/02/360_F_32960287_AMQe7m39khZEt8U5oaI0htudEmSA5qA5.jpg" alt="Pillar Image" width={140} height={140} className="rounded-circle mb-3"/>
          <h2 className="fw-normal mb-3">Why</h2>
          <p className="fs-5">Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          <p><a href="#trailer" className="button bg-white mt-3">View details »</a></p>
        </div>
      </div>
      </div>
    </section>
    {/* Thematic Backstory */}
    {/* Gallery */}
    {/* Logs */}
    {/* Description */}
    {/* <Footer /> */}
    <section className="min-vh-100 d-flex flex-column" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images5.alphacoders.com/424/424912.jpg')`
    }}>
      <h1 className="text-center section-title text-white">Your Heading</h1>
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
      </div>
    </section>
    </main>
</>

  )
}

export default Home
