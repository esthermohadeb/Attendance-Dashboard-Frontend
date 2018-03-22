import React, { Component } from "react";
import PieChart from "./PieChart";

class ProgramParticipants extends Component {
  constructor() {
    super();
    this.state = {
      totalParticipants: 0
    };
  }

  setMainTotal() {
    console.log("in child set total", this.state.totalParticipants);
    this.props.action(this.state.totalParticipants);
  }

  componentDidMount = () => {
    this.setState({ totalParticipants: 15 }, function() {
      console.log("in component did mountnt", this.state.totalParticipants);
      this.setMainTotal();
    });
  };

  render() {
    let firstName;
    let lastName;
    let total;
    return (
      <div>
        {this.props.programParticipants.map(
          (allParticipantsinPrograms, index) => {
            for (var programKey in allParticipantsinPrograms) {
              if (allParticipantsinPrograms.hasOwnProperty(programKey)) {
                let participantsPerProgram =
                  allParticipantsinPrograms[programKey];
                total =
                  this.state.totalParticipants + participantsPerProgram.length;
                //this.props.action(totalParticipants);
                // this.props.programs.map((program,index)=> {
                //     if(program.id = programKey){
                //         programName.push(program.eventName);
                //     }
                // })
                // return (<h2> {programName} </h2>)
                var results = participantsPerProgram.map(
                  (eachParticipant, index) => {
                    firstName = eachParticipant.firstName;
                    lastName = eachParticipant.lastName;
                    return (
                      <div key={index}>
                        <h4>{firstName + " " + lastName}</h4>
                      </div>
                    );
                  }
                );
              } else {
                return null;
              }
            }
            return <div key={index}>{results}</div>;
          }
        )}
      </div>
    );
  }
}

export default ProgramParticipants;
