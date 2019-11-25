import React from "react";

import "./HamsterProgress.css";
export default function HamsterProgress() {
  return (
    <div className="loader_wrapper">
      <svg
        className="loader_img"
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        data-name="Layer 1"
        xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
      >
        <defs>
          <symbol id="hamster" data-name="hamster" viewBox="0 0 80 38">
            <g id="hamster-3" data-name="hamster">
              <path id="frontleg" d="M53 25l5 5" className="legs cls-1" />
              <path id="backLeg" d="M10 33l5-5" className="legs cls-2" />
              <path
                className="hamsterFill"
                id="body"
                d="M64 4c-5-4-13-4-16-3l-6 4c-2 1-11 5-25 1-1-1-11-1-15 8a13 13 0 0 0 4 16c25 17 49 4 58-10s2-15 0-16z"
              />
              <circle className="hamsterFill" id="tail" cx="2" cy="14" r="2" />
              <circle className="hamsterFill" id="ear" cx="45" cy="3" r="3" />
              <path
                id="eye"
                d="M55 5a2 2 0 0 1 3 3 2 2 0 0 1-3-3z"
                className="cls-3"
              />
            </g>
          </symbol>
        </defs>
        <path
          id="wheel"
          d="M85 15a49 49 0 0 0-70 70 49 49 0 1 0 70-70zm-64 6a41 41 0 0 1 58 0l5 6-34 21-35-20zM9 50a41 41 0 0 1 4-18l35 19v40A41 41 0 0 1 9 50zm70 29a41 41 0 0 1-27 12V51l34-20a41 41 0 0 1-7 48z"
          className="cls-4"
        />
        <use id="whisky" width="80" height="37.58" href="#hamster" />
        <g className="progressGroup"></g>
      </svg>
    </div>
  );
}
