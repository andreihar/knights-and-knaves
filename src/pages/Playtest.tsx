import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Logs
import play1 from '../assets/pdfs/playtest/Playtest1.pdf';
import play2 from '../assets/pdfs/playtest/Playtest2.pdf';

function Playtest() {
  const pdfs = [
    { date: 'February 27', src: play1 },
    { date: 'February 27', src: play2 },
  ];

  return (
    <>
      <Navbar />
      <section className="min-vh-100 d-flex flex-column" >
        <h1 className="text-center section-title">Playtesting Logs</h1>
        <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
          <div className="container">
            <div className="row">
              {pdfs.map((pdf, index) => (
                <div className="col-sm-3" key={index}>
                  <div className="card">
                    <div className="card-body text-center">
                      <h3 className="card-title text-primary">Playtest #{index+1}</h3>
                      <h5 className="card-subtitle mb-2 text-muted">{pdf.date}</h5>
                      <a href={pdf.src} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open PDF</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Playtest
