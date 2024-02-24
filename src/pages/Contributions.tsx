import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import Papa from "papaparse";

const csvData = `Name,Title,Text,Website,Backstory,Dynamics,TradeOffs,Duration,Gallery,Cards,RuleBook,MeetingLogs,PlaytestLogs,Flowcharts,QuantitativeAnalysis,Trailer,Visuals,Moodboard
Samuel Jen,Cool Title,"Text",0,0,100,100,0,0,0,100,100,0,0,0,0,0,0
Andrei Harbachov,Cool Title,"Text",100,0,0,0,0,0,0,0,0,0,100,100,0,0,0
Tino Ciccone,Cool Title,"Text",0,100,0,0,0,0,0,0,0,0,0,0,0,0,0
Gurbaj Sidhu,Cool Title,"Text",0,0,0,0,0,0,0,0,0,0,0,0,0,0,100
Fatemah Sunderji,Cool Title,"Text",0,0,0,0,0,0,100,0,0,0,0,0,0,0,0`;

function Contributions() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const results = Papa.parse(csvData, { header: true });
    const contributions = results.data.map(row => ({
      name: row.Name,
      title: row.Title,
      text: row.Text,
      projectParts: [
        // Website,Backstory,Dynamics,Trade-Offs,Duration,Gallery,Cards,Rule Book,Meeting Logs,Playtest Logs,Flowcharts,Quantitative Analysis,Trailer,Visuals,Moodboard
        { part: 'Website', contribution: parseInt(row.Website) },
        { part: 'Backstory', contribution: parseInt(row.Backstory) },
        { part: 'Dynamics', contribution: parseInt(row.Dynamics) },
        { part: 'Trade-Offs', contribution: parseInt(row.TradeOffs) },
        { part: 'Duration', contribution: parseInt(row.Duration) },
        { part: 'Gallery', contribution: parseInt(row.Gallery) },
        { part: 'Cards', contribution: parseInt(row.Cards) },
        { part: 'Rule Book', contribution: parseInt(row.RuleBook) },
        { part: 'Meeting Logs', contribution: parseInt(row.MeetingLogs) },
        { part: 'Playtest Logs', contribution: parseInt(row.PlaytestLogs) },
        { part: 'Flowcharts', contribution: parseInt(row.Flowcharts) },
        { part: 'Quantitative Analysis', contribution: parseInt(row.QuantitativeAnalysis) },
        { part: 'Trailer', contribution: parseInt(row.Trailer) },
        { part: 'Visuals', contribution: parseInt(row.Visuals) },
        { part: 'Moodboard', contribution: parseInt(row.Moodboard) },
      ],
    }));
    console.log(contributions);
    setContributions(contributions);
  }, []);

  return (
    <>
      <Navbar />
      <section className="team-section py-5 ">
        <h1 className="text-center section-title">Contributions</h1>
        <div className="container">
          <div className="row justify-content-center">
            {contributions.map((contributor, index) => (
              <div className={`col-12 col-md-6 col-lg-4`} key={index}>
              <div className="card border-0 shadow-lg pt-3 my-3 position-relative">
                <div className="card-body p-4">
                  <div className="card-text pt-1">
                    <h2 className="member-name mb-1 text-center text-primary font-weight-bold">{contributor.name}</h2>
                    <div className="mb-3 text-center fs-5 text-secondary">{contributor.title}</div>
                    <div>{contributor.text}</div>
                  </div>
                </div>
                <div className="card-footer theme-bg-primary border-0 text-center">
                  {contributor.projectParts.map((part, index) => (
                    part.contribution > 0 && (
                      <div className="progress mb-2 position-relative fs-6" key={index}>
                        <div className="progress-bar d-flex align-items-center" role="progressbar" style={{width: `${part.contribution}%`}} aria-valuenow={part.contribution} aria-valuemin={0} aria-valuemax={100}></div>
                        <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">{part.part} - {part.contribution}%</div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contributions
