import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import text from "../assets/text.json";
import durationBg from "../assets/images/duration.jpg";

function Duration() {
  return (
    <>
      <Navbar />
      <div className="p-5 text-center bg-image text-uppercase position-relative" style={{ backgroundImage: `url(${durationBg})` }}>
        <div className="mask position-absolute top-0 start-0 bottom-0 end-0">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Duration</h1>
              <h4 className="mb-3">{text.duration.header}</h4>
            </div>
          </div>
        </div>
      </div>

      <main className="lh-lg">
        <div className="container py-5">
          <div className="col-md-8 mx-auto">
            <article className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1"><span className="text-primary">{text.gameTitle}'</span> duration</h2>
              <p className="text-dark-emphasis align-items-center d-flex">by:
                <img src="https://avatars.githubusercontent.com/u/95883512?v=4" alt="User Picture" width={32} height={32} className="rounded-circle ms-2" />
                <span className="text-uppercase fs-5 ms-2">Andrei Harbachov</span>
              </p>
              <hr />
              <h1>{text.duration.title1}</h1>
              <p className="mb-4">{text.duration.text11}</p>
              <p className="mb-4">{text.duration.text12}</p>
              <h1>{text.duration.title2}</h1>
              <p className="mb-4">{text.duration.text21}</p>
              <ul className="fs-5">
                <li>Playtesting #1, Group of 4 – <span className="text-primary">27</span> minutes</li>
                <li>Playtesting #2, Group of 4 – <span className="text-primary">20</span> minutes</li>
                <li>Playtesting #3, Group of 4 – <span className="text-primary">10</span> minutes</li>
              </ul>
              <p className="mb-4">{text.duration.text22}</p>
              <h1>{text.duration.title3}</h1>
              <p>{text.duration.text3}</p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Duration;
