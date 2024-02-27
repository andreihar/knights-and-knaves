import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import jsonData from "../assets/contributions.json";

interface ProjectPart {
  part: string;
  contribution: number;
}

interface Contributor {
  name: string;
  title: string;
  text: string;
  projectParts: ProjectPart[];
}

function Contributions() {
  const [contributions, setContributions] = useState<Contributor[]>([]);

  useEffect(() => {
    const contributions = jsonData.names.map((name, index) => ({
      name: name,
      title: jsonData.title[index],
      text: jsonData.text[index],
      projectParts: [
        { part: 'Website', contribution: jsonData.website[index] },
        { part: 'Backstory', contribution: jsonData.backstory[index] },
        { part: 'Dynamics', contribution: jsonData.dynamics[index] },
        { part: 'Trade-Offs', contribution: jsonData.tradeoffs[index] },
        { part: 'Cards', contribution: jsonData.cards[index] },
        { part: 'Rule Book', contribution: jsonData.rulebook[index] },
        { part: 'Meeting Logs', contribution: jsonData.meetlogs[index] },
        { part: 'Playtest Logs', contribution: jsonData.playlogs[index] },
        { part: 'Flowcharts', contribution: jsonData.flowchart[index] },
        { part: 'Quantitative Analysis', contribution: jsonData.quantanal[index] },
        { part: 'Trailer', contribution: jsonData.trailer[index] },
        { part: 'Visuals', contribution: jsonData.visuals[index] },
      ],
    }));
    console.log(contributions);
    setContributions(contributions);
  }, []);

  return (
    <>
      <Navbar />
      <section className="team-section py-5 ">
        <h1 className="text-center section-title">Team</h1>
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
