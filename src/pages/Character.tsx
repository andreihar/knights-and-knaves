// Character.tsx
import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { CharClass } from "../classes/CharClass";

type CharacterProps = {
  character: CharClass;
  isOpen: boolean;
  onRequestClose: () => void;
};

const Character: React.FC<CharacterProps> = ({ character, isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Character Page" className="ReactModal__Content" overlayClassName="ReactModal__Overlay"
    style={{
      content: {
        backgroundImage: `url(${character.picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
    }}>
  <div>
    <div>
      <div className="modal-header" data-bs-theme="dark">
        <h5 className="modal-title" id="characterOverlayLabel"></h5>
        <button type="button" className="btn-close fs-3" onClick={onRequestClose}></button>
      </div>
      <div className="modal-body position-absolute bg-black text-white py-2 px-1 pb-1 pl-3" style={{bottom: '28px', left: '100px', width: '600px'}}>
        <div className="d-flex justify-content-between">
          <div>
            <h1>{character.name}</h1>
            <div className="overflow-auto pe-4" style={{maxHeight: '220px'}}>
              <p>{character.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>
  );
};

export default Character;