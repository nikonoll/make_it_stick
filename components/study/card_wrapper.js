import Header from '../header'
import Card from './card'
import ActionBar from './action_bar'
import React, { setState } from 'react';

// be the wrapper component that holds state and renders function components answer, question, actionbar 
class CardWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
        this.handleFlip = this.handleFlip.bind(this);
        this.handleLearned = this.handleLearned.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    handleFlip(flipped) {
        this.setState({flipped: !flipped})
    }

    handleLearned(response) {
        this.setState({learned: response})
    }
    handleNext(next) {
        // need to pass this next to the parent component to fetch new card and reset state
        this.setState({next: !next})
    }

    render() {
        return (
        <div>
            <Header deckId={this.state.deckId} />
            <Card question={this.state.question} answer={this.state.answer} flipped={this.state.flipped}/>
            <ActionBar deckId={this.state.deckId} flipped={this.state.flipped} learned={this.state.learned} handleFlip={this.handleFlip} handleLearned={this.handleLearned} handleNext={this.handleNext}/>
        </div>
        )
    }
}

CardWrapper.defaultProps = {
    flipped: false,
    learned: "",
}

export default CardWrapper;