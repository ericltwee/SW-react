import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./fullpage.css";

const Fullpage = () => (
  <ReactFullpage
    navigation={true}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section q1">
            <h1>Section 1 (welcome to fullpage.js)</h1>
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section w2">
            <h1>Section 2</h1>
            <p>npm install @fullpage/react-fullpage</p>
          </div>
          <div className="section e3">
            <h1>Section 3</h1>
            <p>
              <a
                href=" https://github.com/alvarotrigo/react-fullpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/alvarotrigo/react-fullpage
              </a>
            </p>
          </div>
          <div className="section r4">
            <h1>Section 4</h1>
            <p>
              <a
                href=" https://alvarotrigo.com/react-fullpage/#page1"
                target="_blank"
                rel="noopener noreferrer"
              >
                demo
              </a>
            </p>
          </div>
          <div className="section t5">
            <h1>Section 5</h1>
          </div>
          <div className="section y6">
            <h1>Section 6</h1>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Fullpage;
