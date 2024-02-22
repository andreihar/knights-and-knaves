// Character.tsx
import React from 'react';
import Modal from 'react-modal';
import { CharClass } from "../models/CharClass";

type CharProps = {
  character: CharClass;
  isOpen: boolean;
  onRequestClose: () => void;
};

const Character: React.FC<CharProps> = ({ character, isOpen, onRequestClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Character Page" className="ReactModal__Content modal-dialog modal-dialog-centered modal-fullscreen d-flex flex-column vh-100 w-100" overlayClassName="ReactModal__Overlay">
  <div className="modal-content flex-grow-1 d-flex flex-column">
    <div className="modal-header" data-bs-theme="dark">
      <h5 className="modal-title" id="characterOverlayLabel"></h5>
      <button type="button" className="btn-close fs-3" onClick={onRequestClose}></button>
    </div>
    <div className="modal-body d-flex flex-grow-1">
      <div className="background-section w-50 position-relative"></div>
      <div className="text-section bg-white text-black w-50 py-2 px-1 pb-1 pl-3 d-flex flex-column">
        <h1>{character.name}</h1>
        <div className="overflow-auto my-4 flex-grow-1">
          <p>{character.description}</p>
        </div>
      </div>
    </div>
  </div>
</Modal>
  );
};

export default Character;