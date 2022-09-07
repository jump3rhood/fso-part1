import React, {useState} from "react";
import Button from "./Button";
import Statistics from "./Statistics";
const App = ()=> {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
    <div className="container bg-secondary">
        <h1 className="text-center">Give Feedback</h1>
        <Button name="Good" handleClick={()=> setGood(good+1)}/>
        <Button name="Neutral" handleClick={()=> setNeutral(neutral+1)}/>
        <Button name="Bad" handleClick={()=> setBad(bad+1)}/>
        <Statistics good={good} bad={bad} neutral={neutral} 
        />
    </div>
    );
}

export default App;