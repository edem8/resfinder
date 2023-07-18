import React from "react";
import "./Tools.css";
import IntegrationCard from "../components/IntegrationCard";

const PubMed = new URL("../../images/med.png", import.meta.url);
const academia = new URL("../../images/mortarboard.png", import.meta.url);
const researchgate = new URL("../../images/researchgate.png", import.meta.url);
const jstor = new URL("../../images/jstor.png", import.meta.url);
const scholar = new URL("../../images/scholar.png", import.meta.url);
const arxiv = new URL("../../images/arxiv.png", import.meta.url);

function Tools() {
  return (
    <>
      <div className="tools_container">
        <div className="tools_text_container">
          <h1>Connect to your favourite</h1>
          <h1>tools</h1>

          <h6>With over 200 integrations, we make your research work easy</h6>
        </div>
      </div>

      <div className="all_cards_container1">
        <IntegrationCard
          toolName={"PubMed"}
          image={PubMed}
          alt={"research gate"}
          description={"Boost your work by connecting directly to pubMed"}
          webpage={"https://pubmed.ncbi.nlm.nih.gov/"}
          label={"pubMed"}
        />
        <IntegrationCard
          toolName={"Academia"}
          alt={"research gate"}
          image={academia}
          description={"Boost your work by connecting directly to Academia"}
          webpage={"https://www.academia.edu/"}
          label={"Academia"}
        />
        <IntegrationCard
          toolName={"ResearchGate"}
          alt={"research gate"}
          image={researchgate}
          description={"Boost your work by connecting directly to researchgate"}
          webpage={"https://www.researchgate.net/"}
          label={"Research Gate"}
        />
      </div>

      <div className="all_cards_container2">
        <IntegrationCard
          toolName={"JSTOR"}
          alt={"research gate"}
          image={jstor}
          description={"Boost your work by connecting directly to jstor"}
          webpage={"https://www.jstor.org/subjects"}
          label={"JSTOR"}
        />
        <IntegrationCard
          toolName={"Google scholar"}
          alt={"research gate"}
          image={scholar}
          description={
            "Boost your work by connecting directly to  google scholar"
          }
          webpage={"https://scholar.google.com/"}
          label={"Google Scholar"}
        />
        <IntegrationCard
          toolName={"ArXiv"}
          image={arxiv}
          alt={"research gate"}
          description={"Boost your work by connecting directly to arxiv"}
          webpage={"https://arxiv.org/"}
          label={"Arxiv"}
        />
      </div>

      <div className="more_integrations_container">
        <button>See all 200+ integrations</button>
      </div>
    </>
  );
}

export default Tools;
