import React, { Component } from 'react'

export default class ImageSlider extends Component {

    constructor() {
        super()
        this.state = {
            currentSlideIndex: 0
        }
    }

    render() {
        return (
            <div>
                <h2>I am on slide {this.state.currentSlideIndex}</h2>
            </div>
        )
    }
}