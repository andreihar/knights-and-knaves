import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Cards
import archer from "../assets/cards/archer.png";
import berserker from "../assets/cards/berserker.png";
import letho from "../assets/cards/letho.png";

function Contributions() {
  const intermed = [archer, berserker, letho];
  const cards = intermed.concat(intermed, intermed, intermed);

  return (
    <>
      <Navbar />
      <section className="min-vh-100 d-flex flex-column" >
        <h1 className="text-center section-title">Cards</h1>
        <div className="d-flex flex-column align-items-center flex-grow-1">
          <div className="container">
            <div className="col">
              <div>
                <div className="d-flex flex-wrap justify-content-center">
                  {cards.map((card, index) => (
                    <div key={index} className="m-2">
                      <div className="">
                        <img src={card} alt="Card" className="m-2" style={{maxWidth:'200px'}} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contributions
