import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import text from "../assets/text.json";
import analysisBg from "../assets/images/analysis.jpg";
import hpChart from "../assets/images/hp_chart.png";
import probMatrix from "../assets/images/prob_matrix.png";

function QuantAnal() {
  return (
    <>
      <Navbar/>
      <div className="p-5 text-center bg-image text-uppercase position-relative" style={{ backgroundImage: `url(${analysisBg})`}}>
        <div className="mask position-absolute top-0 start-0 bottom-0 end-0">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Quantitative Analysis</h1>
              <h4 className="mb-3">{text.analysis.header}</h4>
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mt-5 lh-lg">
        <div className="row g-5">
          <div className="col-md-8 mx-auto">
            <article className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1"><span className="text-primary">{text.gameTitle}'</span> quantitative analysis</h2>
              <p className="text-dark-emphasis align-items-center d-flex">by: 
                <img src="https://media.licdn.com/dms/image/D5603AQGjT7AIU4Kl6A/profile-displayphoto-shrink_400_400/0/1687413339437?e=1714608000&v=beta&t=ONTqmM_F9RzULgE4o3d2mhyqbRl8wxYuBGjB3jmg0O4" alt="User Picture" width={32} height={32} className="rounded-circle ms-2"/>
                <span className="text-uppercase fs-5 ms-2">Andrei Harbachov</span>
              </p>
              <hr />
              <p className="mb-4">{text.analysis.description}</p>
              <h1>{text.analysis.title1}</h1>
              <p className="mb-4">{text.analysis.text11}</p>
              <p className="mb-4">{text.analysis.text12}</p>
              <img src={probMatrix} alt="Probability Matrix" className="img-fluid mb-4 mx-auto d-block"/>
              <p className="mb-4">{text.analysis.text13}</p>
              <img src={hpChart} alt="Health Points Chart" className="img-fluid mb-4 mx-auto d-block"/>
              <p className="mb-4">{text.analysis.text14}</p>
              <h1>{text.analysis.title2}</h1>
              <p className="mb-4">{text.analysis.text21}</p>
              <p className="mb-4">{text.analysis.text22}</p>
              <p className="mb-4">{text.analysis.text23}</p>
              <h1>{text.analysis.title3}</h1>
              <p className="mb-4">{text.analysis.text3}</p>
              <h3>{text.analysis.title4}</h3>
              <ul className="fs-5 mb-4">
                <li>{text.analysis.text41}</li>
                <li>{text.analysis.text42}</li>
              </ul>
              <h3>{text.analysis.title5}</h3>
              <ul className="fs-5 mb-4">
                <li>{text.analysis.text51}</li>
                <li>{text.analysis.text52}</li>
              </ul>
              <h3>{text.analysis.title6}</h3>
              <ul className="fs-5 mb-4">
                <li>{text.analysis.text61}</li>
                <li>{text.analysis.text62}</li>
              </ul>
              <h3>{text.analysis.title7}</h3>
              <ul className="fs-5 mb-4">
                <li>{text.analysis.text71}</li>
                <li>{text.analysis.text72}</li>
              </ul>
              <h3>{text.analysis.title8}</h3>
              <ul className="fs-5 mb-4">
                <li>{text.analysis.text81}</li>
                <li>{text.analysis.text82}</li>
              </ul>
            </article>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default QuantAnal
