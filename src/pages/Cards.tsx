import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

// Cards
import arrow from "../assets/cards/Arrow Strike.jpg";
import sword from "../assets/cards/Sword Strike.jpg";
import jousting from "../assets/cards/Jousting.jpg";
import shield from "../assets/cards/Shield.jpg";
import kasword from "../assets/cards/Knight's Arsenal Shield.jpg";
import kashield from "../assets/cards/Knight's Arsenal Sword.jpg";
import potion from "../assets/cards/Knight's Potion.jpg";
import swap from "../assets/cards/Noble Swap.jpg";
import intel from "../assets/cards/King's Intel.jpg";
import ransack from "../assets/cards/Royal Ransack.jpg";
import alliance from "../assets/cards/Alliance.jpg";
// Chars
import red1 from "../assets/cards/Cedric.jpg";
import red2 from "../assets/cards/Seraphina.jpg";
import blue1 from "../assets/cards/Kaelan.jpg";
import blue2 from "../assets/cards/Ingmar.jpg";
import green1 from "../assets/cards/Dante.jpg";
import green2 from "../assets/cards/Tyrell.jpg";

function Contributions() {
  const actions = [arrow, sword, jousting, shield, kasword, kashield, potion, swap, intel, ransack, alliance];
  const chars = [red1, red2, blue1, blue2, green1, green2];

  return (
    <>
      <Navbar />
      <main className="min-vh-100 d-flex flex-column" >
        <h1 className="text-center section-title">Cards</h1>
        <div className="d-flex flex-column align-items-center flex-grow-1">
          <div className="container">
            <div className="col">
              <div>
                <h1 className="text-center">Basic / Action</h1>
                <div className="d-flex flex-wrap justify-content-center">
                  {actions.map((card, index) => (
                    <div key={index} className="m-2">
                      <Zoom>
                        <img src={card} alt="Card" style={{ maxWidth: "260px" }} className="m-2" />
                      </Zoom>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-center mt-5">Identity</h1>
                <div className="d-flex flex-wrap justify-content-center">
                  {chars.map((card, index) => (
                    <div key={index} className="m-2">
                      <Zoom>
                        <img src={card} alt="Card" style={{ maxWidth: "260px" }} className="m-2" />
                      </Zoom>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Contributions;
