import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AnimatePresence, motion } from 'framer-motion';
import { CharClass } from "../models/CharClass";

import red from '../assets/factions/red.png';
import green from '../assets/factions/green.png';
import blue from '../assets/factions/blue.png';

type CharProps = {
  character: CharClass;
  isOpen: boolean;
  onRequestClose: () => void;
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Character: React.FC<CharProps> = ({ character, isOpen: isOpenProp, onRequestClose }) => {
  const [isOpen, setIsOpen] = useState(isOpenProp);

  useEffect(() => {
    if (isOpenProp) {
      setIsOpen(true);
    } else {
      setTimeout(() => setIsOpen(false), 500);
    }
  }, [isOpenProp]);

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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Character Page" className="ReactModal__Content position-absolute top-0 start-0 end-0 bottom-0 border-0 bg-transparent overflow-auto" overlayClassName="ReactModal__Overlay position-fixed top-0 start-0 end-0 bottom-0">
      <AnimatePresence mode="wait">
        {isOpenProp && (
          <motion.div className="w-100 h-100 bg-white" variants={modalVariants} initial="hidden" animate="visible" exit="exit">
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
                <div className="p-3 d-flex justify-content-between align-items-center" data-bs-theme="dark">
                  <h5 className="modal-title" id="characterOverlayLabel"></h5>
                  <button type="button" className="btn-close fs-3" onClick={onRequestClose}></button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default Character;
