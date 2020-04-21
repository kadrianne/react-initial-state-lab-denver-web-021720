import React from 'react'

export default class Bomb extends React.Component {

    state = {
        secondsLeft: this.props.initialCount
    }

    timerCountdown = () => {
        return (
            this.state.secondsLeft == 0
            ? <h2>'Boom!'</h2>
            : <h2>{this.state.secondsLeft} seconds left before I go boom!</h2>
        )
    }

    render(){
        return this.timerCountdown()
    }
}