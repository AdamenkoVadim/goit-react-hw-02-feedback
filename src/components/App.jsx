import React from "react";
import { Statistics } from "./Statistics/Statistics";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

handleClickGood = () => {
  this.setState(prevState => ({
    good:prevState.good + 1,
}))
  this.countTotalFeedback()
  console.log(this.state.good);
  console.log(Object.values(this.state));
}
handleClickNeutral = () => {
  this.setState(prevState => ({
    neutral: prevState.neutral + 1,
  }))
  this.countTotalFeedback()
}

handleClickBad = () => {
  this.setState(prevState => ({
    bad: prevState.bad + 1,
  }))
  this.countTotalFeedback()
}

countTotalFeedback = () => {
  Object.values(this.state).reduce((acc, value) => acc + value, 0);

}

countPositiveFeedbackPercentage = () => {
  console.log('dddd');
  this.setState({
    positivePersentage: ((this.state.good/this.state.total)*100)
  })
  console.log(this.state.good);
}
  render () {
    return (
      <>
      <div>
        <h1>Please leave feedback</h1>
        <button 
          type="button" 
          onClick = {this.handleClickGood}
        >Good</button>
        <button 
          type="button" 
          onClick = {this.handleClickNeutral}
        >Neutral</button>
        <button 
          type="button"
          onClick = {this.handleClickBad}
          >Bad</button>
      </div>
      <h1>Statistics</h1>
      <Statistics 
       good = {this.state.good}
       neutral ={this.state.neutral}
       bad = {this.state.bad}
       total = {this.countTotalFeedback()}
       positivePersentage ={this.state.positivePersentage}
      />
      </>
    );
  }
}


  

