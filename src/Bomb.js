import React, { Component } from 'react'

export default class Bomb extends Component {
    
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    timer() {
        if (this.state.secondsLeft >= 1) {
            return `${this.state.secondsLeft} seconds left before I go boom!`
        } else {
            return 'Boom!'
        }
    } 

    render() {
        return (
            <div>
                {this.timer()}
            </div>
        )
    }
}
