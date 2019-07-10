import React from "react";

import ModSkillCard from "../ModSkillCard/ModSkillCard";
import reactImage from "../assets/images/react-icon.png";
import "./SkillSet.css";

class SkillSet extends React.Component {
  render() {
    return (
      <div>
        <h3>SkillSet </h3>
        <div class="cards">
          <ModSkillCard title="ReactJs" image={reactImage} />
          <ModSkillCard title="ReactJs" image={reactImage} />
          <ModSkillCard title="ReactJs" image={reactImage} />
          <ModSkillCard title="ReactJs" image={reactImage} />
          <ModSkillCard title="ReactJs" image={reactImage} />
        </div>
      </div>
    );
  }
}

export default SkillSet;
