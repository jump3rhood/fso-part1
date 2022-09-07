import StatisticLine from "./StatisticLine";

const Statistics = ({good, bad, neutral}) => {
    const total = good+bad+neutral;
    const average = neutral/total;
    const positive = (good/total) * 100;
    if(total === 0){
        return <div>
            <h2>Statistics</h2>
            <p>No Feedback Given</p>
        </div>;
    }
    return <div>
        <h2>Statistics</h2>
        <table>
            <thead>
            <tr>
                <td>Type</td>
                <td>Frequency</td>
            </tr>
            </thead>
            <tbody>
                <StatisticLine text="Good" value={good} />
                <StatisticLine text="Neutral" value={neutral} />
                <StatisticLine text="Bad" value={bad} />
                <StatisticLine text="All" value={total} />
                <StatisticLine text="Average" value={average} />
                <StatisticLine text="Positive" value={positive} />
            </tbody>
        </table>
    </div>
}

export default Statistics;