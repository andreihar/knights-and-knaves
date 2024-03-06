import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import text from '../assets/text.json'

function Premise() {
  return (
    <>
      <Navbar />
      <section className="min-vh-100 d-flex flex-column mb-5">
        <h1 className="text-center section-title">Premise</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="content">
                <ul className="timeline">
                  {Object.keys(text.timeline).filter(key => key.startsWith('date')).map((key, index) => {
                    const eventKey = `event${index + 1}`;
                    const descriptionKey = `description${index + 1}`;
                    return (
                      <li className="event lh-base" key={index}>
                        <h5>{(text.timeline as {[key: string]: string})[key]}</h5>
                        <h3>{(text.timeline as {[key: string]: string})[eventKey]}</h3>
                        <p>{(text.timeline as {[key: string]: string})[descriptionKey]}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Premise