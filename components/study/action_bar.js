import Link from 'next/link';

class ActionBar extends React.Component {
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
            return <Link href={`/deck/${this.props.deckId}/study`}><button>next card</button></Link>
        }
        if (this.props.flipped) {
            return (
                <div className="flex-shrink-0 flex items-center justify-between flex-wrap bg-gray-200 p-3">
                    <div className="">
                        <p>How was that?</p>
                        <button data-txt="easy" onClick={this.clickLearned}>easy</button>
                        <button data-txt="ok" onClick={this.clickLearned}>ok</button>
                        <button data-txt="hard" onClick={this.clickLearned}>hard</button>
                    </div>
                </div>
            )
        }
        return <div className="flex-shrink-0 flex items-center justify-between flex-wrap bg-gray-200 p-3">
            <div>
            <button onClick={this.clickFlip}>flip</button>
            </div>
            </div>
    }
}

export default ActionBar