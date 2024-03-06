import React from 'react';
import Modal from 'react-modal';
import { CharClass } from "../models/CharClass";

import red from '../assets/factions/red.png';
import green from '../assets/factions/green.png';
import blue from '../assets/factions/blue.png';

type CharProps = {
  character: CharClass;
  isOpen: boolean;
  onRequestClose: () => void;
};

const Character: React.FC<CharProps> = ({ character, isOpen, onRequestClose }) => {
  let colour = "";
  let teamPicture = "";
  switch(character.team) {
    case "red":
      colour = '#8E1407';
      teamPicture = red;
      break;
    case "green":
      colour = '#697C3D';
      teamPicture = green;
      break;
    case "blue":
      colour = '#1C3A62';
      teamPicture = blue;
      break;
  }
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Character Page" className="ReactModal__Content modal-dialog modal-dialog-centered modal-fullscreen d-flex flex-column vh-100 w-100" overlayClassName="ReactModal__Overlay">
      <div className="overflow-hidden">
        <div className="container-fluid col-xxl-8">
          <div className="row flex-lg-nowrap align-items-center g-5">
            <div className="order-lg-1 h-100 d-none d-lg-block">
              <img alt="Home banner" src={character.picture} style={{  clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)", objectFit:'cover', objectPosition: 'top', height:'100vh'}} className="d-block" width={900} loading="lazy" />
            </div>
            <div className="col-lg-6 p-lg-5">
              <div>
                <div className="d-flex align-items-center gap-2">
                  <img src={teamPicture} alt="Red" style={{maxWidth: '75px'}}/>
                  <h1 className="display-4 lh-1" style={{color:colour}}>{character.name}</h1>
                  <button type="button" className="btn-close fs-3 ms-auto position-absolute" style={{transform: 'translateX(-80px)'}} onClick={onRequestClose}></button>
                </div>
                <p className="my-5">{character.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Character;