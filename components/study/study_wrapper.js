import Header from '../header'
import Card from './card'
import ActionBar from './action_bar'
import React, { setState } from 'react';

// be the wrapper component that holds state and renders function components answer, question, actionbar 
class StudyWrapper extends React.Component {
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
            <ActionBar flipped={this.state.flipped} learned={this.state.learned} handleFlip={this.handleFlip} handleLearned={this.handleLearned} handleNext={this.handleNext}/>
        </div>
        )
    }
}

StudyWrapper.defaultProps = {
    flipped: false,
    learned: "",
    next: false,
}

export default StudyWrapper;