import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import text from "../assets/text.json";
import dynamicsBg from "../assets/images/dynamics.jpg";

function Dynamics() {
  return (
    <>
      <Navbar />
      <div className="p-5 text-center bg-image text-uppercase position-relative" style={{ backgroundImage: `url(${dynamicsBg})` }}>
        <div className="mask position-absolute top-0 start-0 bottom-0 end-0">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Dynamics</h1>
              <h4 className="mb-3">{text.dynamics.header}</h4>
            </div>
          </div>
        </div>
      </div>

      <main className="lh-lg">
        <div className="container py-5">
          <div className="col-md-8 mx-auto">
            <article className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1"><span className="text-primary">{text.gameTitle}'</span> Dynamics</h2>
              <p className="text-dark-emphasis align-items-center d-flex">by:
                <img src="https://avatars.githubusercontent.com/u/72668861?v=4" alt="User Picture" width={32} height={32} className="rounded-circle ms-2" />
                <span className="text-uppercase fs-5 ms-2">Samuel Jen</span>
              </p>
              <hr />
              <p className="mb-4">{text.dynamics.description}</p>
              <h1>{text.dynamics.title1}</h1>
              <p className="mb-4">{text.dynamics.text1}</p>
              <h1>{text.dynamics.title2}</h1>
              <p className="mb-4">{text.dynamics.text2}</p>
              <h1>{text.dynamics.title3}</h1>
              <p className="mb-4">{text.dynamics.text3}</p>
              <h1>{text.dynamics.title4}</h1>
              <p className="mb-4">{text.dynamics.text4}</p>
              <h1>{text.dynamics.title5}</h1>
              <p className="mb-4">{text.dynamics.text5}</p>
              <h1>{text.dynamics.title6}</h1>
              <p>{text.dynamics.text6}</p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Dynamics;
