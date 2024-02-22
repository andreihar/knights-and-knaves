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
                  <li className="event">
                    <h5>{text.premise.date1}</h5>
                    <h3>{text.premise.event1}</h3>
                    <p>{text.premise.description1}</p>
                  </li>
                  <li className="event">
                    <h5>{text.premise.date2}</h5>
                    <h3>{text.premise.event2}</h3>
                    <p>{text.premise.description2}</p>
                  </li>
                  <li className="event">
                    <h5>{text.premise.date3}</h5>
                    <h3>{text.premise.event3}</h3>
                    <p>{text.premise.description3}</p>
                  </li>
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
