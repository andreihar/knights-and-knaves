import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import text from '../assets/text.json'

function Premise() {
  return (
    <>
      <Navbar />
      <section className="min-vh-100 d-flex flex-column" >
        <h1 className="text-center section-title">Premise</h1>
        {/* <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        </div> */}

        <div className="container py-2 mt-4 mb-4">
  {/* timeline item 1 */}
  <div className="row no-gutters">
    <div className="col-sm"> {/*spacer*/} </div>
    {/* timeline item 1 center dot */}
    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
      <div className="row h-50">
        <div className="col">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
      <h5 className="m-2">
        <span className="badge badge-pill bg-light border">&nbsp;</span>
      </h5>
      <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
    </div>
    {/* timeline item 1 event content */}
    <div className="col-sm py-2">
      <div className="card">
        <div className="card-body">
          <div className="float-right text-muted small">
            Jan 9th 2019 7:00 AM
          </div>
          <h4 className="card-title">Day 1 Orientation</h4>
          <p className="card-text">
            Welcome to the campus, introduction and get started with the tour.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/*/row*/}
  {/* timeline item 2 */}
  <div className="row no-gutters">
    <div className="col-sm py-2">
      <div className="card">
        <div className="card-body">
          <div className="float-right small">Jan 10th 2019 8:30 AM</div>
          <h4 className="card-title">Day 2 Sessions</h4>
          <p className="card-text">
            Sign-up for the lessons and speakers that coincide with your course
            syllabus. Meet and greet with instructors.
          </p>
        </div>
      </div>
    </div>
    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
      <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
      <h5 className="m-2">
        <span className="badge badge-pill bg-light border">&nbsp;</span>
      </h5>
      <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
    </div>
    <div className="col-sm"> {/*spacer*/} </div>
  </div>
  {/*/row*/}
  {/* timeline item 3 */}
  <div className="row no-gutters">
    <div className="col-sm"> {/*spacer*/} </div>
    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
      <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
      <h5 className="m-2">
        <span className="badge badge-pill bg-light border">&nbsp;</span>
      </h5>
      <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
    </div>
    <div className="col-sm py-2">
      <div className="card">
        <div className="card-body">
          <div className="float-right text-muted small">
            Jan 11th 2019 8:30 AM
          </div>
          <h4 className="card-title">Day 3 Sessions</h4>
          <p>
            Shoreditch vegan artisan Helvetica. Tattooed Codeply Echo Park
            Godard kogi, next level irony ennui twee squid fap selvage. Meggings
            flannel Brooklyn literally small batch, mumblecore PBR try-hard kale
            chips. Brooklyn vinyl lumbersexual bicycle rights, viral fap cronut
            leggings squid chillwave pickled gentrify mustache.
          </p>
        </div>
      </div>
    </div>
  </div>
  {/*/row*/}
  {/* timeline item 4 */}
  <div className="row no-gutters">
    <div className="col-sm py-2">
      <div className="card">
        <div className="card-body">
          <div className="float-right text-muted small">
            Jan 12th 2019 11:30 AM
          </div>
          <h4 className="card-title">Day 4 Wrap-up</h4>
          <p>
            Join us for lunch in Bootsy's cafe across from the Campus Center.
          </p>
        </div>
      </div>
    </div>
    <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
      <div className="row h-50">
        <div className="col border-right">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
      <h5 className="m-2">
        <span className="badge badge-pill bg-light border">&nbsp;</span>
      </h5>
      <div className="row h-50">
        <div className="col">&nbsp;</div>
        <div className="col">&nbsp;</div>
      </div>
    </div>
    <div className="col-sm"> {/*spacer*/} </div>
  </div>
  {/*/row*/}
</div>



      </section>
      <Footer />
    </>
  )
}

export default Premise
