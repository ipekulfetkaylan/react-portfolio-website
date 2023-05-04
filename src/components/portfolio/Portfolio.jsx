import { useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "webApp",
      title: "Web App",
    },
    {
      id: "mobileApp",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "branding",
      title: "Branding",
    },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              title={item.title}
              id={item.id}
              active={selected === item.id}
              setSelected={setSelected}
            />
          );
        })}
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/bankApp.webp" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/bankApp.webp" alt="" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src="assets/bankApp.webp" alt="" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
