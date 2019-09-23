import React from "react";

const WebpackLogo = props => {
  let { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 256 296"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid"
    >
      <defs>
        <radialGradient
          cx="50%"
          cy="50%"
          fx="50%"
          fy="50%"
          r="50%"
          id="radialGradient-1"
        >
          <stop stop-color="#93B4E7" offset="0%" />
          <stop stop-color="#B9D1F8" offset="59.2733578%" />
          <stop stop-color="#9CB6E0" offset="100%" />
        </radialGradient>
      </defs>
      <g>
        <path
          d="M128.032342,0.455516014 L0.297907473,74.2031032 L0.297907473,221.698278 L128.032342,295.44632 L255.767231,221.698278 L255.767231,74.2031032 L128.032342,0.455516014 Z"
          fill="url(#radialGradient-1)"
        />
        <path
          d="M128.033708,75.2626335 L64.6901068,111.834192 L64.6901068,184.977765 L128.033708,221.549779 L191.378221,184.977765 L191.378221,111.834192 L128.033708,75.2626335 Z"
          fill="#6F95DB"
        />
        <g fill="#FFFFFF" fill-opacity="0.1">
          <path d="M128,0 L0,74.2491103 L128,143.94306 L256,74.7046263 L128,0 Z" />
        </g>
        <g
          transform="translate(0.000000, 153.508897)"
          fill="#FFFFFF"
          fill-opacity="0.1"
        >
          <path d="M128,0 L0,67.8718861 L128,141.66548 L255.544484,67.4163701 L128,0 Z" />
        </g>
      </g>
    </svg>
  );
};

export default WebpackLogo;
