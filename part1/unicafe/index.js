import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Display = props => <h1>{props.value}</h1>

const Statistics = ({good, neutral, bad}) => {
    if ((good + neutral + bad) === 0){
        return (
            <div>
                No feedback given
            </div>
        )
    }
    return (
        <table>
            <tbody>
                <tr><Statistic name = 'good' value = {good} /></tr>   
                <tr><Statistic name = 'neutral' value = {neutral}/></tr>
                <tr><Statistic name = 'bad' value = {bad} /></tr>   
                <tr><Statistic name = 'all' value = {good + bad + neutral} /></tr>   
                <tr><Statistic name = 'average' value = {(good - bad)/(good + bad + neutral)} /></tr>   
                <tr><Statistic name = 'positive' value = {(good / (good + neutral + bad))*100}/></tr>   
            </tbody>
        </table>
    )
}

const Statistic = ({name, value}) => {
    if(name === 'positive'){
        return(
            <>
            <td>{name}</td>
            <td>{value}%</td>
            </>
        )
    }
    
    return (
    <>
    <td>{name}</td>
    <td>{value}</td>
    </>
    )
}

const Button =(props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const incrementGood = () => {
        setGood(good + 1)
    }
    const incrementNeutral = () => {
        setNeutral(neutral + 1)
    }
    const incrementBad = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <Display value = {'give feedback'} />
            <Button handleClick={() => incrementGood()} text ='good' />
            <Button handleClick = {() => incrementNeutral()} text = 'neutral' />
            <Button handleClick={() => incrementBad()} text = 'bad' />
            <Display value = {'statistics'} />
            <Statistics good = {good} neutral = {neutral} bad = {bad}/>

        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

