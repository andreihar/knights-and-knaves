import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Logs
import feb1 from '../assets/pdfs/meeting/Feb1.pdf';
import feb8 from '../assets/pdfs/meeting/Feb8.pdf';
import feb15 from '../assets/pdfs/meeting/Feb15.pdf';
import feb22 from '../assets/pdfs/meeting/Feb22.pdf';
import feb27 from '../assets/pdfs/meeting/Feb27.pdf';

function Meeting() {
  const pdfs = [
    { title: 'February 1', src: feb1 },
    { title: 'February 8', src: feb8 },
    { title: 'February 15', src: feb15 },
    { title: 'February 22', src: feb22 },
    { title: 'February 27', src: feb27 },
  ];

  return (
    <>
      <Navbar />
      <section className="min-vh-100 d-flex flex-column" >
        <h1 className="text-center section-title">Meeting Logs</h1>
        <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
          <div className="container">
            <div className="row">
              {pdfs.map((pdf, index) => (
                <div className="col-sm-3 mb-3" key={index}>
                  <div className="card">
                    <div className="card-body text-center">
                      <h3 className="card-title text-primary">Meeting #{index+1}</h3>
                      <h5 className="card-subtitle mb-2 text-muted">{pdf.title}</h5>
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

export default Meeting
