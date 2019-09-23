import React from "react";

const NpmLogo = props => {
  let { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 256 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M0,0 L0,85.4980695 L71.1660232,85.4980695 L71.1660232,99.8301158 L128,99.8301158 L128,85.4980695 L256,85.4980695 L256,0 L0,0 L0,0 Z"
          fill="#CB3837"
        />
        <path
          d="M42.5019305,14.3320463 L14.3320463,14.3320463 L14.3320463,28.6640927 L14.3320463,71.1660232 L42.5019305,71.1660232 L42.5019305,28.6640927 L56.8339768,28.6640927 L56.8339768,71.1660232 L71.1660232,71.1660232 L71.1660232,28.6640927 L71.1660232,14.3320463 L42.5019305,14.3320463 L42.5019305,14.3320463 Z"
          fill="#FFFFFF"
        />
        <path
          d="M85.4980695,14.3320463 L85.4980695,68.2007722 L85.4980695,71.1660232 L85.4980695,85.4980695 L114.162162,85.4980695 L114.162162,71.1660232 L142.332046,71.1660232 L142.332046,14.3320463 L85.4980695,14.3320463 L85.4980695,14.3320463 Z M128,56.8339768 L114.162162,56.8339768 L114.162162,28.6640927 L128,28.6640927 L128,56.8339768 L128,56.8339768 Z"
          fill="#FFFFFF"
        />
        <path
          d="M184.833977,14.3320463 L156.664093,14.3320463 L156.664093,28.6640927 L156.664093,71.1660232 L184.833977,71.1660232 L184.833977,28.6640927 L199.166023,28.6640927 L199.166023,71.1660232 L213.498069,71.1660232 L213.498069,28.6640927 L227.830116,28.6640927 L227.830116,71.1660232 L242.162162,71.1660232 L242.162162,28.6640927 L242.162162,15.3204633 L242.162162,14.3320463 L184.833977,14.3320463 L184.833977,14.3320463 Z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
};

export default NpmLogo;
