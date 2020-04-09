import React from "react";

const Animate = (props) => {
  const stylo = {
    overflow: "hidden",
    backgroundColor: "rgb(181, 255, 181)",
  };

  return (
    <div style={stylo}>
      <h1 className="animated infinite shake delay-2s">shake</h1>
      <h1 className="animated infinite flash delay-2s">flash</h1>
      <h1 className="animated infinite flip delay-2s">flip</h1>
      <h1 className="animated infinite bounce delay-2s">bounce</h1>
      <h1 className="animated infinite zoomOut delay-2s">zoomOut</h1>
      <div>
        <ol>
          <li>
            <a href="https://github.com/daneden/animate.css">
              animate.css // github
            </a>
          </li>
          <li>
            <a href="https://daneden.github.io/animate.css/">
              animate.css // tester
            </a>
          </li>
          <li>npm install animate.css --save</li>
          <li>
            link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
            />
          </li>
          <li>
            Example: (h1) className="animated infinite shake
            delay-2s">shake(/h1)
          </li>
          <li>
            .yourElement : animation-duration: 3s; // animation-delay: 2s; //
            animation-iteration-count: infinite;
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Animate;
