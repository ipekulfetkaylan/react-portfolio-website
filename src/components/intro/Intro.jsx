import "./intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
       showCursor: false,
       backDelay: 1500,
       strings: ["Developer", "Content Creator"]
      });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/woman1.png" alt="woman" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>İpek Kaylan</h1>
          <h3>
            Freelance <span ref={textRef}></span>{" "}
          </h3>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDownIcon className="icon" />
        </a>
      </div>
    </div>
  );
}
