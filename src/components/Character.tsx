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
  switch (character.team) {
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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Character Page" className="ReactModal__Content" overlayClassName="ReactModal__Overlay">
      <div className="d-flex h-100">
        <div className="d-grid align-content-center p-4" style={{ flex: '1' }}>
          <div className="overflow-auto d-flex flex-column align-items-center pe-5">
            <div className="col-lg-8 col-xxl-8 col-md-10 col-12 ms-auto">
              <div className="d-flex align-items-center gap-2">
                <img src={teamPicture} alt="Colour" style={{ maxWidth: '75px' }} />
                <h1 className="display-4 lh-1" style={{ color: colour }}>{character.name}</h1>
              </div>
              <p className="my-5">{character.description}</p>
            </div>
          </div>
        </div>
        <div className="position-relative" style={{
          flex: '1',
          backgroundImage: `url(${character.picture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)'
        }}>
          <div className="modal-header" data-bs-theme="dark">
            <h5 className="modal-title" id="characterOverlayLabel"></h5>
            <button type="button" className="btn-close fs-3" onClick={onRequestClose}></button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Character;