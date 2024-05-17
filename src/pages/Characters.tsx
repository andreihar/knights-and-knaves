import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Anim from '../components/Anim';
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
                <Anim className="col-lg-4 text-center" duration={0.7} delay={0.1} hidden={{ opacity: 0, y: 50 }}>
                  <img src={red} alt="" />
                  <h1>{text.factions.titleRed}</h1>
                  <Link to="#red" className="text-uppercase">Learn More</Link>
                </Anim>
                <Anim className="col-lg-4 text-center" duration={0.7} delay={0.2} hidden={{ opacity: 0, y: 50 }}>
                  <img src={green} alt="" />
                  <h1>{text.factions.titleGreen}</h1>
                  <Link to="#green" className="text-uppercase">Learn More</Link>
                </Anim>
                <Anim className="col-lg-4 text-center" duration={0.7} delay={0.3} hidden={{ opacity: 0, y: 50 }}>
                  <img src={blue} alt="" />
                  <h1>{text.factions.titleBlue}</h1>
                  <Link to="#blue" className="text-uppercase">Learn More</Link>
                </Anim>
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
                <Anim className="col d-flex flex-column align-items-start gap-2" duration={1} hidden={{ opacity: 0 }}>
                  <div className="d-flex align-items-center gap-2">
                    <img src={red} alt="Red" style={{ maxWidth: '75px' }} />
                    <h2 style={{ color: redColour }}>{text.factions.titleRed}</h2>
                  </div>
                  <p>{text.factions.textRed}</p>
                </Anim>
                <Anim className="col d-flex gap-3" duration={1} delay={0.7} hidden={{ opacity: 0, x: -50 }}>
                  {redTeam.map((character, index) => (
                    <a href="#" onClick={(event) => { event.preventDefault(); handleClick(character); }}>
                      <div key={index} className="img-text img-text-hover text-center position-relative d-flex justify-content-center align-items-center">
                        <img src={character.picture} alt="Card" className="character-img mh-100 mw-100" />
                        <h3 className="position-absolute bottom-0 text-white fw-bold">{character.name}</h3>
                      </div>
                    </a>
                  ))}
                </Anim>
              </div>
            </div>
          </div>
        </section>
        <section id="green" className="min-vh-100 d-flex flex-column" >
          <h1 className="text-center">{text.factions.titleGreen}</h1>
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
            <div className="container px-4">
              <div className="row row-cols-1 row-cols-xxl-2 align-items-md-center py-5">
                <Anim className="col d-flex gap-3 order-2 order-xxl-1" duration={1} delay={0.7} hidden={{ opacity: 0, x: -50 }}>
                  {greenTeam.map((character, index) => (
                    <a href="#" onClick={(event) => { event.preventDefault(); handleClick(character); }}>
                      <div key={index} className="img-text img-text-hover text-center position-relative d-flex justify-content-center align-items-center">
                        <img src={character.picture} alt="Card" className="character-img mh-100 mw-100" />
                        <h3 className="position-absolute bottom-0 text-white fw-bold">{character.name}</h3>
                      </div>
                    </a>
                  ))}
                </Anim>
                <Anim className="col d-flex flex-column align-items-start gap-2 order-1 order-xxl-2" duration={1} hidden={{ opacity: 0 }}>
                  <div className="d-flex align-items-center gap-2">
                    <img src={green} alt="Green" style={{ maxWidth: '75px' }} />
                    <h2 style={{ color: greenColour }}>{text.factions.titleGreen}</h2>
                  </div>
                  <p>{text.factions.textGreen}</p>
                </Anim>
              </div>
            </div>
          </div>
        </section>
        <section id="blue" className="min-vh-100 d-flex flex-column" >
          <h1 className="text-center">{text.factions.titleBlue}</h1>
          <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
            <div className="container px-4">
              <div className="row row-cols-1 row-cols-xxl-2 align-items-md-center py-5">
                <Anim className="col d-flex flex-column align-items-start gap-2" duration={1} hidden={{ opacity: 0 }}>
                  <div className="d-flex align-items-center gap-2">
                    <img src={blue} alt="Blue" style={{ maxWidth: '75px' }} />
                    <h2 style={{ color: blueColour }}>{text.factions.titleBlue}</h2>
                  </div>
                  <p>{text.factions.textBlue}</p>
                </Anim>
                <Anim className="col d-flex gap-3" duration={1} delay={0.7} hidden={{ opacity: 0, x: -50 }}>
                  {blueTeam.map((character, index) => (
                    <a href="#" onClick={(event) => { event.preventDefault(); handleClick(character); }}>
                      <div key={index} className="img-text img-text-hover text-center position-relative d-flex justify-content-center align-items-center">
                        <img src={character.picture} alt="Card" className="character-img mh-100 mw-100" />
                        <h3 className="position-absolute bottom-0 text-white fw-bold">{character.name}</h3>
                      </div>
                    </a>
                  ))}
                </Anim>
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
