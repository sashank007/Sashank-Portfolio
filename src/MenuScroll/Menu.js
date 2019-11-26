import React from "react";
import { SectionLink } from "react-scroll-section";
import styled from "styled-components";

const Menu = styled.ul`
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  display: table;
  margin-left: auto;
  margin-right: auto;
  background: rgba(255, 255, 255, 0.6);
  width: 100vw;
  margin: 0;
`;

const Item = styled.li`
  display: inline-block;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s;
  margin: 0;
  padding: 20px 10px;
  font-weight: bold;
  font-size: 12px;
  user-select: none;
  font-family: "Noto Sans", sans-serif;
  color: ${props => (props.selected ? "#ff7e67" : "#000")};
  border-top: 5px solid ${props => (props.selected ? "#ff7e67" : "transparent")};
`;

const MenuItem = ({ section, children }) => (
  <SectionLink section={section}>
    {link => (
      <Item onClick={link.onClick} selected={link.isSelected}>
        {children}
      </Item>
    )}
  </SectionLink>
);

export { MenuItem as Item, Menu };

export default styled;
