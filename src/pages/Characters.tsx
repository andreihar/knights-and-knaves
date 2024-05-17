import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Character from '../components/Character';
import { CharClass } from '../models/CharClass';
import { defaultChars } from "../assets/DefaultChars";

import text from '../assets/text.json';
import red from '../assets/factions/red.png';
import green from '../assets/factions/green.png';
import blue from '../assets/factions/blue.png';

const Characters = () => {
  const [character, setCharacter] = useState<CharClass | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const redTeam = defaultChars.filter((char) => char.team === 'red');
  const redColour = '#8E1407';
  const greenTeam = defaultChars.filter((char) => char.team === 'green');
  const greenColour = '#697C3D';
  const blueTeam = defaultChars.filter((char) => char.team === 'blue');
  const blueColour = '#1C3A62';

  const handleClick = (newCharacter: CharClass) => {
    setCharacter(newCharacter);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="min-vh-100 d-flex flex-column" >
          <h1 className="text-center section-title">Factions</h1>
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4 text-center">
                  <img src={red} alt="" />
                  <h1>{text.factions.titleRed}</h1>
                  <Link to="#red" className="text-uppercase">Learn More</Link>
                </div>
                <div className="col-lg-4 text-center">
                  <img src={green} alt="" />
                  <h1>{text.factions.titleGreen}</h1>
                  <Link to="#green" className="text-uppercase">Learn More</Link>
                </div>
                <div className="col-lg-4 text-center">
                  <img src={blue} alt="" />
                  <h1>{text.factions.titleBlue}</h1>
                  <Link to="#blue" className="text-uppercase">Learn More</Link>
                </div>
              </div>
            </div>
          </div>
          {character && <Character character={character} isOpen={isModalOpen} onRequestClose={handleClose} />}
        </section>
        <section id="red" className="min-vh-100 d-flex flex-column" >
          <h1 className="text-center">{text.factions.titleRed}</h1>
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
            <div className="container px-4">
              <div className="row row-cols-1 row-cols-xxl-2 align-items-md-center py-5">
                <div className="col d-flex flex-column align-items-start gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <img src={red} alt="Red" style={{ maxWidth: '75px' }} />
                    <h2 style={{ color: redColour }}>{text.factions.titleRed}</h2>
                  </div>
                  <p>{text.factions.textRed}</p>
                </div>
                <div className="col d-flex gap-3">
                  {redTeam.map((character, index) => (
                    <a href="#" onClick={(event) => { event.preventDefault(); handleClick(character); }}>
                      <div key={index} className="img-text text-center position-relative d-flex justify-content-center align-items-center">
                        <img src={character.picture} alt="Card" className="character-img mh-100 mw-100" />
                        <h3 className="position-absolute bottom-0 text-white fw-bold">{character.name}</h3>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="green" className="min-vh-100 d-flex flex-column" >
          <h1 className="text-center">{text.factions.titleGreen}</h1>
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
            <div className="container px-4">
              <div className="row row-cols-1 row-cols-xxl-2 align-items-md-center py-5">
                <div className="col d-flex gap-3 order-2 order-xxl-1">
                  {greenTeam.map((character, index) => (
                    <a href="#" onClick={(event) => { event.preventDefault(); handleClick(character); }}>
                      <div key={index} className="img-text text-center position-relative d-flex justify-content-center align-items-center">
                        <img src={character.picture} alt="Card" className="character-img mh-100 mw-100" />
                        <h3 className="position-absolute bottom-0 text-white fw-bold">{character.name}</h3>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="col d-flex flex-column align-items-start gap-2 order-1 order-xxl-2">
                  <div className="d-flex align-items-center gap-2">
                    <img src={green} alt="Green" style={{ maxWidth: '75px' }} />
                    <h2 style={{ color: greenColour }}>{text.factions.titleGreen}</h2>
                  </div>
                  <p>{text.factions.textGreen}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="blue" className="min-vh-100 d-flex flex-column" >
          <h1 className="text-center">{text.factions.titleBlue}</h1>
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
            <div className="container px-4">
              <div className="row row-cols-1 row-cols-xxl-2 align-items-md-center py-5">
                <div className="col d-flex flex-column align-items-start gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <img src={blue} alt="Blue" style={{ maxWidth: '75px' }} />
                    <h2 style={{ color: blueColour }}>{text.factions.titleBlue}</h2>
                  </div>
                  <p>{text.factions.textBlue}</p>
                </div>
                <div className="col d-flex gap-3">
                  {blueTeam.map((character, index) => (
                    <a href="#" onClick={(event) => { event.preventDefault(); handleClick(character); }}>
                      <div key={index} className="img-text text-center position-relative d-flex justify-content-center align-items-center">
                        <img src={character.picture} alt="Card" className="character-img mh-100 mw-100" />
                        <h3 className="position-absolute bottom-0 text-white fw-bold">{character.name}</h3>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Characters;
