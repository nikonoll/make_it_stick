import React, { useState } from 'react';

class ActionBar extends React.Component {
    // can i go with functional component or do I need a class one?
    // use state in the wrapper
    // have the wrapper hold state and decide which button to render. The button each gets a onChangehanderl passed in so it can update state of wrapper when clicked

    constructor(props) {
        super(props);
        this.clickFlip = this.clickFlip.bind(this);
        this.clickLearned = this.clickLearned.bind(this);
        this.clickNext = this.clickNext.bind(this);
    }
    clickFlip(e) {
        this.props.handleFlip(e.target.value);
    }
    clickLearned(e) {
        this.props.handleLearned(e.target.dataset.txt)
    }
    clickNext(e) {
        this.props.handleNext(e.target.value);
    }

    render() {
        if (this.props.learned !== "") {
            return <div><button onClick={this.clickNext}>next card</button></div>
        }
        if (this.props.flipped) {
            return (
                <div>
                    <p>How was that?</p>
                    <button data-txt="easy" onClick={this.clickLearned}>easy</button>
                    <button data-txt="ok" onClick={this.clickLearned}>ok</button>
                    <button data-txt="hard" onClick={this.clickLearned}>hard</button>
                </div>
            )
        }
        return <div><button onClick={this.clickFlip}>flip</button></div>
    }
}

export default ActionBar