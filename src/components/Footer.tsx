import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import rulebook from '../assets/pdfs/Rulebook.pdf';
import flowcharts from '../assets/pdfs/Flowcharts.pdf';

function Footer() {
  return (
    <div className="footer-dark bg-dark text-secondary">
      <footer className="container pt-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 my-2">
          <div className="col mb-3">
            <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
              <img src={logo} alt="Logo" className="bi me-2 navbar-logo" />
            </a>
          </div>
          <div className="col mb-3">
            <h5>Game</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href={rulebook} target="_blank" rel="noopener noreferrer" className="p-0">Rule Book</a></li>
              <li className="nav-item mb-2"><Link to='/cards' className="p-0">Cards</Link></li>
              <li className="nav-item mb-2"><Link to='/gallery' className="p-0">Gallery</Link></li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5>Lore</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to='/characters' className="p-0">Characters</Link></li>
              <li className="nav-item mb-2"><Link to='/storyworld' className="p-0">Storyworld</Link></li>
              <li className="nav-item mb-2"><Link to='/premise' className="p-0">Premise</Link></li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5>Description</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to='/dynamics' className="p-0">Dynamics</Link></li>
              <li className="nav-item mb-2"><Link to='/tradeoffs' className="p-0">Trade-offs</Link></li>
              <li className="nav-item mb-2"><Link to='/duration' className="p-0">Duration</Link></li>
              <li className="nav-item mb-2"><Link to='/analysis' className="p-0">Quantitative Analysis</Link></li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5>Documentation</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><Link to='/meeting' className="p-0">Meeting Logs</Link></li>
              <li className="nav-item mb-2"><Link to='/playtest' className="p-0">Playtest Logs</Link></li>
              <li className="nav-item mb-2"><a href={flowcharts} target="_blank" rel="noopener noreferrer" className="p-0">Flowcharts</a></li>
              <li className="nav-item mb-2"><Link to='/contributions' className="p-0">Team</Link></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="d-flex justify-content-center bg-black text-white-50 fs-6 py-3">
        © 2024 Andrei Harbachov. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
