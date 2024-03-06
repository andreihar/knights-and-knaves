// Characters.js
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Character from '../components/Character';
import { CharClass } from '../models/CharClass';
import { defaultChars } from "../assets/DefaultChars"

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
      <section className="min-vh-100 d-flex flex-column" >
        <h1 className="text-center section-title">Factions</h1>
        <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 text-center">
                <img src={red} alt="" />
                <h1>{text.factions.titleRed}</h1>
                <a href="#red" className="text-uppercase">Learn More</a>
              </div>
              <div className="col-lg-3 text-center">
                <img src={green} alt="" />
                <h1>{text.factions.titleGreen}</h1>
                <a href="#green" className="text-uppercase">Learn More</a>
              </div>
              <div className="col-lg-3 text-center">
                <img src={blue} alt="" />
                <h1>{text.factions.titleBlue}</h1>
                <a href="#blue" className="text-uppercase">Learn More</a>
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
            <div className="row row-cols-1 row-cols-md-2 align-items-md-center py-5">
              <div className="col d-flex flex-column align-items-start gap-2">
                <div className="d-flex align-items-center gap-2">
                  <img src={red} alt="Red" style={{maxWidth: '75px'}}/>
                  <h2 style={{color:redColour}}>{text.factions.titleRed}</h2>
                </div>
                <p>{text.factions.textRed}</p>
              </div>
              <div className="col d-flex gap-3">
                {redTeam.map((character, index) => (
                  <a href="#" onClick={(event) => {event.preventDefault(); handleClick(character);}}>
                  <div key={index} className="img-text text-center">
                    <img src={character.picture} alt="Card" className="character-img" />
                    <h3>{character.name}</h3>
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
            <div className="row row-cols-1 row-cols-md-2 align-items-md-center py-5">
              <div className="col d-flex gap-3">
                {greenTeam.map((character, index) => (
                  <a href="#" onClick={(event) => {event.preventDefault(); handleClick(character);}}>
                  <div key={index} className="img-text text-center">
                    <img src={character.picture} alt="Card" className="character-img" />
                    <h3>{character.name}</h3>
                  </div>
                  </a>
                ))}
              </div>
              <div className="col d-flex flex-column align-items-start gap-2">
                <div className="d-flex align-items-center gap-2">
                  <img src={green} alt="Green" style={{maxWidth: '75px'}}/>
                  <h2 style={{color:greenColour}}>{text.factions.titleGreen}</h2>
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
            <div className="row row-cols-1 row-cols-md-2 align-items-md-center py-5">
              <div className="col d-flex flex-column align-items-start gap-2">
                <div className="d-flex align-items-center gap-2">
                  <img src={blue} alt="Blue" style={{maxWidth: '75px'}}/>
                  <h2 style={{color:blueColour}}>{text.factions.titleBlue}</h2>
                </div>
                <p>{text.factions.textBlue}</p>
              </div>
              <div className="col d-flex gap-3">
                {blueTeam.map((character, index) => (
                  <a href="#" onClick={(event) => {event.preventDefault(); handleClick(character);}}>
                  <div key={index} className="img-text text-center">
                    <img src={character.picture} alt="Card" className="character-img" />
                    <h3>{character.name}</h3>
                  </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
    // <div>
    //   <button type="button" onClick={() => handleClick(new CharClass("Geralt", "https://cdn-s-thewitcher.cdprojektred.com/witcher3/backgrounds/characters-geralt-1.jpg", "Geralt of Rivia was raised in Kaer Morhen, and it was in this legendary keep where he also trained to become a witcher — a wandering monster slayer for hire — under the banner of the Wolf School. He is one of the last remaining active witchers, and undoubtedly one of the most skilled to have ever entered into the profession. His striking white hair — along with his cat-like yellow eyes — are the result of multiple experiments he underwent during his training. Through repeated mutations incurred as part of the punishing Trial of the Grasses, Geralt was turned into a near-flawless warrior few can hope to match in battle. Generally cold and stoic, his speed, athleticism, and mastery in both swordplay and the combat magic known as ‘signs’ make him a dangerous opponent even when compared to other witchers. He has been traveling the world for decades, putting monsters — both human and beasts alike — to his steel and silver swords. His body is swathed in scars, which he wears as proof of his prowess as a monster slayer. After all, witchers are not known for leading neither peaceful, nor long lives. Geralt's name is known throughout the Continent far and wide due to his skills and track record as a witcher, as well as the infamy that follows his kind wherever they may go. From time to time, people from all walks of life must call upon the services of a witcher, whether they like it or not — someone has to deal with the array of monsters that threaten peaceful life, after all — and Geralt’s reputation as a quick, efficient, and effective monster slayer means he’s sure to get most jobs done. Even ones that other witchers would say no to."))}>
    //     Open Character Page 1
    //   </button>
    //   <button type="button" onClick={() => handleClick(new CharClass("Jack", "asd", "lorem2"))}>
    //     Open Character Page 2
    //   </button>
    //   {character && <Character region={character} isOpen={isModalOpen} onRequestClose={handleClose} />}
    // </div>
  );
};

export default Characters;