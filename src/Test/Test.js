import React, { Component } from "react";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { people: [], female: [], male: [], females: 0, males: 0 };
  }

  fetchData(url) {
    let female = this.state.female,
      male = this.state.male,
      males = this.state.males,
      females = this.state.females;
    if (url === null || (males === 5 && females === 5)) return;
    fetch(url)
      .then(res => res.json())
      .then(people => {
        for (var i = 0; i < people.results.length; i++) {
          if (people.results[i].gender === "female" && females < 5) {
            female.push(people.results[i]);
            females += 1;
            this.setState({ females });
          } else if (people.results[i].gender === "male" && males < 5) {
            male.push(people.results[i]);
            males += 1;
            this.setState({ males });
          }
        }

        console.log(female);
        console.log(male);
        this.setState({ female: female });
        this.setState({ male: male });
        this.fetchData(people.next);
      });
  }
  componentDidMount() {
    this.fetchData("https://swapi.co/api/people/");
  }

  render() {
    return (
      <div className="App">
        <h1>People</h1>

        <div> {"Alekya"}</div>
      </div>
    );
  }
}
export default Test;
