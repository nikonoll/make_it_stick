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
            return (

                <div className="flex-shrink-0 flex items-center justify-between flex-wrap p-3">
                    <Link href={`/deck/${this.props.deckId}/study`}><button className="flex-1 bg-gray-700 hover:bg-gray-500 text-white font-bold uppercase py-2 px-4">next card</button></Link>
                </div>
            )
        }
        if (this.props.flipped) {
            return (
                <div className="flex-shrink-0 flex items-center justify-between flex-wrap p-3">
                    <button data-txt="easy" onClick={this.clickLearned} className="flex-1 bg-green-700 hover:bg-green-500 text-white font-bold uppercase py-2 px-4 mr-4">easy</button>
                    <button data-txt="ok" onClick={this.clickLearned} className="flex-1 bg-yellow-700 hover:bg-yellow-500 text-white font-bold uppercase py-2 px-4 mr-4">ok</button>
                    <button data-txt="hard" onClick={this.clickLearned} className="flex-1 bg-red-700 hover:bg-red-500 text-white font-bold uppercase py-2 px-4">hard</button>
                </div>
            )
        }
        return (
            <div className="flex-shrink-0 flex items-center justify-between flex-wrap p-3">
                <button onClick={this.clickFlip} className="flex-1 bg-green-700 hover:bg-green-500 text-white font-bold uppercase py-2 px-4">Flip</button>
            </div>
        )
    }
}

export default ActionBar