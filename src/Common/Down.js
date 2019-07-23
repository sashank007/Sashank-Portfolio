import React from "react";
const Down = ({ click }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="#f46b45"
      viewBox="0 0 24 24"
      onClick={click}
      style={{ cursor: "pointer" }}
    >
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      <path fill="none" d="M0 0h24v24H0V0z" />
      <animate
        attributeType="XML"
        attributeName="fill"
        values="#f46b45;#ffffff;"
        dur="1.5s"
        repeatCount="indefinite"
      />
    </svg>
  );
};

export default Down;
