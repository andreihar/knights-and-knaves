import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'
import rulebook from '../assets/pdfs/Rulebook.pdf'

function Footer() {
  return (
    <div className="footer-dark bg-dark text-secondary">
      <footer className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 my-2">
        <div className="col mb-3">
          <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <img src={logo} className="bi me-2" width={40} height={32}/>
          </a>
        </div>
        <div className="col mb-3">
          <h5>Game</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href={rulebook} target="_blank" rel="noopener noreferrer" className="nav-link p-0">Rule Book</a></li>
            <li className="nav-item mb-2"><Link to='/cards' className="nav-link p-0">Cards</Link></li>
            <li className="nav-item mb-2"><Link to='/gallery' className="nav-link p-0">Gallery</Link></li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>Lore</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to='/characters' className="nav-link p-0">Characters</Link></li>
            <li className="nav-item mb-2"><Link to='/storyworld' className="nav-link p-0">Storyworld</Link></li>
            <li className="nav-item mb-2"><Link to='/premise' className="nav-link p-0">Premise</Link></li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>Description</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to='/dynamics' className="nav-link p-0">Dynamics</Link></li>
            <li className="nav-item mb-2"><Link to='/tradeoffs' className="nav-link p-0">Trade-offs</Link></li>
            <li className="nav-item mb-2"><Link to='/duration' className="nav-link p-0">Duration</Link></li>
            <li className="nav-item mb-2"><Link to='/analysis' className="nav-link p-0">Quantitative Analysis</Link></li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5>Documentation</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to='/meeting' className="dnav-link p-0">Meeting Logs</Link></li>
            <li className="nav-item mb-2"><Link to='/playtest' className="dnav-link p-0">Playtest Logs</Link></li>
            <li className="nav-item mb-2"><a href={rulebook} target="_blank" rel="noopener noreferrer" className="nav-link p-0">Flowcharts</a></li>
            <li className="nav-item mb-2"><Link to='/contributions' className="nav-link p-0">Team</Link></li>
          </ul>
        </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 border-top">
          <p>© 2023 Company, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
