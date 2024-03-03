import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import text from '../assets/text.json'

function Premise() {
  const events = [
    { date: text.timeline.date1, event: text.timeline.event1, description: text.timeline.description1 },
    { date: text.timeline.date2, event: text.timeline.event2, description: text.timeline.description2 },
    { date: text.timeline.date3, event: text.timeline.event3, description: text.timeline.description3 },
    { date: text.timeline.date4, event: text.timeline.event4, description: text.timeline.description4 },
    { date: text.timeline.date5, event: text.timeline.event5, description: text.timeline.description5 },
    { date: text.timeline.date6, event: text.timeline.event6, description: text.timeline.description6 },
    { date: text.timeline.date7, event: text.timeline.event7, description: text.timeline.description7 },
    { date: text.timeline.date8, event: text.timeline.event8, description: text.timeline.description8 },
  ];

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
                {events.map((event, index) => (
                  <li className="event lh-base" key={index}>
                    <h5>{event.date}</h5>
                    <h3>{event.event}</h3>
                    <p>{event.description}</p>
                  </li>
                ))}
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
