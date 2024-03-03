import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBook, faFile } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/react.svg'
import rulebook from '../assets/pdfs/Rulebook.pdf'

function Navbar() {
  return (
    <nav className={'navbar navbar-expand-lg navbar-dark bg-dark fixed-top'}>
      <div className="container">
        <Link to='/' className="navbar-brand"><img src={logo} alt="Logo"/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
            <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Lore</a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link to='/characters' className="dropdown-item">Characters</Link></li>
                <li><Link to='/storyworld' className="dropdown-item">Storyworld</Link></li>
                <li><Link to='/premise' className="dropdown-item">Premise</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Description</a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link to='/dynamics' className="dropdown-item">Dynamics</Link></li>
                <li><Link to='/tradeoffs' className="dropdown-item">Trade-offs</Link></li>
                <li><Link to='/duration' className="dropdown-item">Duration</Link></li>
                <li><Link to='/analysis' className="dropdown-item">Quantitative Analysis</Link></li>
              </ul>
            </li>
            <li className="nav-item"><Link to='/gallery' className="nav-link">Gallery</Link></li>
            <li className="nav-item"><Link to='/contributions' className="nav-link">Team</Link></li>
          </ul>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link to='/cards' className="nav-link"><FontAwesomeIcon icon={faAddressBook} className="me-1"/>Cards</Link></li>
            <li className="nav-item"><a href={rulebook} target="_blank" rel="noopener noreferrer" className="nav-link"><FontAwesomeIcon icon={faBook} className="me-1"/>Rule Book</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon icon={faFile} className="me-1"/>Documentation</a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><Link to='/meeting' className="dropdown-item">Meeting Logs</Link></li>
                <li><Link to='/playtest' className="dropdown-item">Playtest Logs</Link></li>
                <li><a href={rulebook} target="_blank" rel="noopener noreferrer" className="dropdown-item">Flowcharts</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
