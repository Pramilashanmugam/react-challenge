import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            introduction: "Hello!",
            buttonText: "Exit",
        };
    }

    handClick(){
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",

        }, ()=>{
            console.log('new state', this.state.introduction);
            console.log('new state', this.state.buttonText);
        });
        console.log(this.state.introduction);
        console.log(this.state.buttonText);

    }

  render(){
    return (
        <div>
            <h1>{this.state.introduction}</h1>
            <button onClick={() => this.handClick()}>{this.state.buttonText}</button>
        </div>
    )
  }
}

export default StatefulGreeting;


