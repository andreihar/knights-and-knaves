// Characters.js
import React, { useState } from 'react';
import Character from '../components/Region';
import { CharClass } from '../models/CharClass';

const Characters = () => {
  const [character, setCharacter] = useState<CharClass | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (newCharacter: CharClass) => {
    setCharacter(newCharacter);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={() => handleClick(new CharClass("Geralt", "https://cdn-s-thewitcher.cdprojektred.com/witcher3/backgrounds/characters-geralt-1.jpg", "Geralt of Rivia was raised in Kaer Morhen, and it was in this legendary keep where he also trained to become a witcher — a wandering monster slayer for hire — under the banner of the Wolf School. He is one of the last remaining active witchers, and undoubtedly one of the most skilled to have ever entered into the profession. His striking white hair — along with his cat-like yellow eyes — are the result of multiple experiments he underwent during his training. Through repeated mutations incurred as part of the punishing Trial of the Grasses, Geralt was turned into a near-flawless warrior few can hope to match in battle. Generally cold and stoic, his speed, athleticism, and mastery in both swordplay and the combat magic known as ‘signs’ make him a dangerous opponent even when compared to other witchers. He has been traveling the world for decades, putting monsters — both human and beasts alike — to his steel and silver swords. His body is swathed in scars, which he wears as proof of his prowess as a monster slayer. After all, witchers are not known for leading neither peaceful, nor long lives. Geralt's name is known throughout the Continent far and wide due to his skills and track record as a witcher, as well as the infamy that follows his kind wherever they may go. From time to time, people from all walks of life must call upon the services of a witcher, whether they like it or not — someone has to deal with the array of monsters that threaten peaceful life, after all — and Geralt’s reputation as a quick, efficient, and effective monster slayer means he’s sure to get most jobs done. Even ones that other witchers would say no to."))}>
        Open Character Page 1
      </button>
      <button type="button" onClick={() => handleClick(new CharClass("Jack", "asd", "lorem2"))}>
        Open Character Page 2
      </button>
      {character && <Character region={character} isOpen={isModalOpen} onRequestClose={handleClose} />}
    </div>
  );
};

export default Characters;