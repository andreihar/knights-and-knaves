import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { AnimatePresence, motion } from 'framer-motion';
import { RegionClass } from "../models/RegionClass";

type RegionProps = {
  region: RegionClass;
  isOpen: boolean;
  onRequestClose: () => void;
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const Region: React.FC<RegionProps> = ({ region, isOpen: isOpenProp, onRequestClose }) => {
  const [isOpen, setIsOpen] = useState(isOpenProp);

  useEffect(() => {
    if (isOpenProp) {
      setIsOpen(true);
    } else {
      setTimeout(() => setIsOpen(false), 500);
    }
  }, [isOpenProp]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Region Page" className="ReactModal__Content region position-absolute top-0 start-0 end-0 bottom-0 border-0 bg-transparent overflow-auto" overlayClassName="ReactModal__Overlay position-fixed top-0 start-0 end-0 bottom-0 bg-transparent">
      <AnimatePresence mode="wait">
        {isOpenProp && (
          <motion.div className="w-100 h-100 bg-white" variants={modalVariants} initial="hidden" animate="visible" exit="exit"
            style={{ background: `url(${region.picture})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="p-3 d-flex justify-content-between align-items-center" data-bs-theme="dark">
              <h5 className="modal-title" id="characterOverlayLabel"></h5>
              <button type="button" className="btn-close fs-3" onClick={onRequestClose}></button>
            </div>
            <div className="border-frame modal-body position-absolute text-white py-2 px-1 pb-1 pl-3" style={{ bottom: '10px', left: '10px', right: '10px', maxWidth: '600px' }}>
              <div className="d-flex justify-content-between">
                <div className="p-4">
                  <h1>{region.name}</h1>
                  <div className="overflow-auto my-4" style={{ maxHeight: '220px' }}>
                    <p>{region.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
};

export default Region;
