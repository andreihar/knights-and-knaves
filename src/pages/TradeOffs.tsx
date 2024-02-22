import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import text from "../assets/text.json";

function TradeOffs() {
  return (
    <>
      <Navbar/>
      <div className="p-5 text-center bg-image text-uppercase position-relative" style={{ backgroundImage: `url('https://i.pinimg.com/originals/bb/9c/f8/bb9cf8ca709add0ad654aaa68a058a64.jpg')`}}>
        <div className="mask position-absolute top-0 start-0 bottom-0 end-0">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Trade-offs</h1>
              <h4 className="mb-3">Some text?</h4>
            </div>
          </div>
        </div>
      </div>
      
      <main className="container mt-5">
        <div className="row g-5">
          <div className="col-md-8 mx-auto">
            <article className="blog-post">
              <h2 className="display-5 link-body-emphasis mb-1"><span className="text-primary">{text.gameTitle}'</span> trade-offs</h2>
              <p className="text-dark-emphasis align-items-center d-flex">by: 
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-dark-emphasis align-items-center d-flex">
                  <img src="https://media.licdn.com/dms/image/C5603AQFFIopjM9nf6Q/profile-displayphoto-shrink_800_800/0/1647027164110?e=1712793600&v=beta&t=O37VyNeB-kSIGdJgyBZT0kvhOo4h0tT07D9vXombc2Q" alt="User Picture" width={32} height={32} className="rounded-circle ms-2"/>
                  <span className="text-uppercase fs-5 ms-2">Samuel Jen</span>
                </a>
              </p>
              <hr />
              <h1>{text.tradeoffs.title1}</h1>
              <p className="mb-4">{text.tradeoffs.text1}</p>
              <h1>{text.tradeoffs.title2}</h1>
              <p className="mb-4">{text.tradeoffs.text2}</p>
              <h1>{text.tradeoffs.title3}</h1>
              <p className="mb-4">{text.tradeoffs.text3}</p>
              <h1>{text.tradeoffs.title4}</h1>
              <p className="mb-4">{text.tradeoffs.text4}</p>
              <h1>{text.tradeoffs.title5}</h1>
              <p className="mb-5">{text.tradeoffs.text5}</p>
            </article>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default TradeOffs
