import Header from '../header'
import Card from './card'
import ActionBar from './action_bar'
import React, { useState, setState } from 'react';

// be the wrapper component that holds state and renders function components answer, question, actionbar 
class CardWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.handleFlip = this.handleFlip.bind(this);
        this.handleLearned = this.handleLearned.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.state = {
            flipped: false,
            learned: ""
        }
    }
    handleFlip(flipped) {
        this.setState({flipped: !flipped})
    }

    handleLearned(learned) {
        //this needs to update the card score via api
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ learned: learned })
        };
        fetch(`/api/card/${this.props.cardId}`, requestOptions)
            .then(response => response.json())
        this.setState({ learned: learned })
    }
    handleNext(next) {
        this.setState({ next: !next })
    }

    render() {
        return (
            <div className="flex flex-col items-stretch min-h-screen">
                <Header deckId={this.props.deckId} />
                <Card question={this.props.question} answer={this.props.answer} flipped={this.state.flipped} />
                <ActionBar deckId={this.props.deckId} flipped={this.state.flipped} learned={this.state.learned} handleFlip={this.handleFlip} handleLearned={this.handleLearned} handleNext={this.handleNext} />
            </div>
        )
    }
}

export default CardWrapper;