// Adapted from: https://www.youtube.com/watch?v=7WwtzsSHdpI

import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss"
import { featuredPortfolio, webPortfolio, researchPortfolio, otherPortfolio, blogPortfolio } from "../../data";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
          id: "featured",
          title: "Featured",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "research",
          title: "Research",
        },
        {
          id: "other",
          title: "Other",
        },
        {
          id: "blog",
          title: "Blogs",
        },
      ];

      useEffect(() => {
        
        switch(selected) {

          case "featured":
            setData(featuredPortfolio);
            break;

          case "web":
            setData(webPortfolio);
            break;

          case "research":
            setData(researchPortfolio);
            break;

          case "other":
            setData(otherPortfolio);
            break;

           case "blog":
            setData(blogPortfolio);
            break;

          default: 
          setData(featuredPortfolio);
  
        }

      }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList 
                      title={item.title}
                      active={selected === item.id}
                      setSelected={setSelected}
                      id={item.id}
                    />
                ))}
            </ul>

            <div className="container">
              {data.map((d) => (
                <div className="item" id={`${d.title}-category`}>
                    <a href= {d.url} target="_blank" rel="noreferrer"> 
                      <img src={d.img} alt="" />
                    </a> 
                    <h3>{d.title}</h3>
                </div>
            ))}

            </div>    
        </div>
    );
}
