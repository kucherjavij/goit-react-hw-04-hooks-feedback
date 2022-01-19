function FeedbackOptions ({ options, onBtnClick }) {
    return( <div>
     {options.map(option => (
         <button  type="button" onClick={() => onBtnClick(option)}>
           {option}
         </button>
       ))}
     </div>)
 }
 
 export default FeedbackOptions