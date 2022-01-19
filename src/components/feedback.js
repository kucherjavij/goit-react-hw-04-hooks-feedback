import React, {useState , Component} from "react";
import Statistics from "./statistics";
import FeedbackOptions from './feedbackOptions'
import Notification from "./notification";

export default function Feedback () {
const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);



const onBtnClick = option => {
  switch (option) {
    case 'good':
      setGood(prev => prev + 1);
      break;

    case 'neutral':
      setNeutral(prev => prev + 1);
      break;

    case 'bad':
      setBad(prev => prev + 1);
      break;

    default:
      break;
  }
};

const TotalFeedback=()=>{

 return good + neutral + bad;
}

const PositiveCounter = () => {
  return (good / TotalFeedback()) * 100
}

    
const options = Object.keys({good, neutral, bad});
return(
<div>
<FeedbackOptions options={options} onBtnClick={onBtnClick}/>
{TotalFeedback() === 0 ? <Notification/> : (<Statistics good={good} neutral={neutral} bad={bad} total={TotalFeedback()} positivePercentage={PositiveCounter()}/>)}
</div>
)
}


// export default class OldFeedback extends Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//       }



// onBtnClick = option => {
//     this.setState(prevState => {
//         return {
//           [option]: prevState[option] + 1,
//         };
//       });
// }

// TotalFeedback=()=>{

//    return this.state.good + this.state.neutral + this.state.bad;
// }

// PositiveCounter = () => {
//     return (this.state.good / this.TotalFeedback()) * 100
// }

//       render(){
//         const options = Object.keys(this.state);
//           return(
//           <div>
//               <FeedbackOptions options={options} onBtnClick={this.onBtnClick}/>
//               {this.TotalFeedback() === 0 ? <Notification/> : (<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.TotalFeedback()} positivePercentage={this.PositiveCounter()}/>)}
//           </div>
//             )

//         }
// }



