import React, { useState } from 'react';
import { defaultRegions } from "../assets/DefaultRegions"
import Region from '../components/Region';
import { RegionClass } from '../models/RegionClass';
import Navbar from '../components/Navbar';

function Storyworld() {
  const [region, setRegion] = useState<RegionClass | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (newRegion: RegionClass) => {
    setRegion(newRegion);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <Navbar />
    <section className="min-vh-100 d-flex flex-column" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.thewitcher.com/build/images/bg-openworld-7ab028a0..jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="d-flex flex-column justify-content-center flex-grow-1">
        <div className="container px-4 py-5">
          <div className="row row-cols-1 row-cols-md-2 g-5 py-5">
            <div>
              <h1 className="fw-bold text-white mb-5">Regions</h1>
              <div className="quadruple-grid">
                {defaultRegions.map((region, index) => {
                  return (
                    <React.Fragment key={index}>
                      <a href="#" onClick={(event) => {event.preventDefault(); handleClick(region);}}>
                        <div className="img-text">
                          <img src={region.picture} alt={region.name} className="img-fluid"/>
                          <h3>{region.name}</h3>
                        </div>
                      </a>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {region && <Region region={region} isOpen={isModalOpen} onRequestClose={handleClose} />}
    </section>
    </>
  )
}

export default Storyworld
