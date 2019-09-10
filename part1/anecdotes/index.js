import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Button =(props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Display = (props) => {

    if (props.text1 !==''){
        if (props.max===0 && props.text3==='skip'){
            return(
                <></>
            )
        }
        else {
        return(
            <>{props.text} {props.text1} {props.text2}</>
            )   
        }
    }
    return(
    <>{props.text}</>
    )
}

const DisplayVote = (props) => {

    if (props.max ===0){
        return(
            <>{props.error}</>
        )
    }
    return(
    <>{props.text}</>
    )
}

const DisplayHead = (props) => (
    <h1>{props.text}</h1>
)

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])
    const [max, setMax] = useState(0)
    const [pos, setPos] = useState(0)

    const handleClick = () => {
        const next = Math.floor(Math.random()*anecdotes.length)
        setSelected(next)
    }

    const increaseVote = () => {
        const copy = [...votes]
        copy[selected]+=1
        console.log('updated', copy)
        setVotes(copy)
        console.log('votes', votes)
        if (copy[selected] > max){
            setMax(copy[selected])
            setPos(selected)
            console.log('max', max, 'pos', pos)
        }
    }


    return (
        <div>
            <DisplayHead text = 'Anecdote of the day' />
            <Display text = {props.anecdotes[selected]} text1='' text2='' max = {max} />< br/>
            <Display text = 'has' text1 = {votes[selected]} text2 = 'votes' max = {max} />< br/>
            <Button handleClick = {() => increaseVote()} text = 'vote' />
            <Button handleClick = {() => handleClick()} text = 'next anecdote' />
            <DisplayHead text = 'Anecdote with the most votes' />
            <DisplayVote text = {props.anecdotes[pos]} error = 'No votes have been cast yet' max = {max} />< br/>
            <Display text = 'has' text1 = {max} text2 = 'votes' text3 = 'skip' max = {max} />< br/>
        </div>
    )
}

const anecdotes = [
    'If it hurts, do it more often', 
    'Adding manpower to a late software project makes it later!', 
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of teh code accounts for the other 90 percent of the development time', 
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand', 
    'Premature optimization is the root of all evil', 
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes = {anecdotes} />, document.getElementById('root'))

