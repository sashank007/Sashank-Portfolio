import React from "react";
import { ScrollingProvider, Section } from "react-scroll-section";
import SectionContainer from "./SectionContainer";
import { Menu, Item } from "./Menu";
import Home from "../Home/Home";
import Portfolio from "../Portfolio/Portfolio";
import IntroPage from "../IntroPage/IntroPage";
import SkillSet from "../SkillSet/SkillSet";
import ChartsTab from "../Tab/Tab";
import Contact from "../Contact/Contact";

const MenuScroll = () => (
  <ScrollingProvider scrollBehavior="smooth">
    <Menu>
      <Item section="home">HOME</Item>
      <Item section="about">ABOUT ME</Item>
      <Item section="skillset">SKILLSET</Item>
      <Item section="projects">PROJECTS</Item>
      {/* <Item section="charts">CHARTS</Item> */}
      <Item section="contact">CONTACT</Item>
    </Menu>
    <Section id="home">
      <SectionContainer background="lightblue">
        <Home />
      </SectionContainer>
    </Section>
    <Section id="about">
      <SectionContainer background="orange">
        <IntroPage />
      </SectionContainer>
    </Section>
    <Section id="skillset">
      <SectionContainer background="orange">
        <SkillSet />
      </SectionContainer>
    </Section>
    <Section id="projects">
      <SectionContainer background="orange">
        <Portfolio />
      </SectionContainer>
    </Section>
    <Section id="contact">
      <SectionContainer background="orange">
        <Contact />
      </SectionContainer>
    </Section>
  </ScrollingProvider>
);

export default MenuScroll;
