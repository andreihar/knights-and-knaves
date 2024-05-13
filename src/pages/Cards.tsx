import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Cards
import arrow from "../assets/cards/Arrow Strike.png";
import sword from "../assets/cards/Sword Strike.png";
import jousting from "../assets/cards/Jousting.png";
import shield from "../assets/cards/Shield.png";
import kasword from "../assets/cards/Knight's Arsenal Shield.png";
import kashield from "../assets/cards/Knight's Arsenal Sword.png";
import potion from "../assets/cards/Knight's Potion.png";
import swap from "../assets/cards/Noble Swap.png";
import intel from "../assets/cards/King's Intel.png";
import ransack from "../assets/cards/Royal Ransack.png";
import alliance from "../assets/cards/Alliance.png";
// Chars
import red1 from "../assets/cards/Cedric.png";
import red2 from "../assets/cards/Seraphina.png";
import blue1 from "../assets/cards/Kaelan.png";
import blue2 from "../assets/cards/Ingmar.png";
import green1 from "../assets/cards/Dante.png";
import green2 from "../assets/cards/Tyrell.png";


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
                      <img src={card} alt="Card" className="m-2" style={{ maxWidth: '260px' }} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-center mt-5">Identity</h1>
                <div className="d-flex flex-wrap justify-content-center">
                  {chars.map((card, index) => (
                    <div key={index} className="m-2">
                      <img src={card} alt="Card" className="m-2" style={{ maxWidth: '260px' }} />
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
