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

                <div className="flex-shrink-0 flex items-center justify-between flex-wrap bg-gray-200 p-3">
                    <Link href={`/deck/${this.props.deckId}/study`}><button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">next card</button></Link>
                </div>
            )
        }
        if (this.props.flipped) {
            return (
                <div className="flex-shrink-0 flex items-center justify-between flex-wrap bg-gray-200 p-3">
                    <div className="">
                        <p className="base-text mb-2">How was that?</p>
                        <button data-txt="easy" onClick={this.clickLearned} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">easy</button>
                        <button data-txt="ok" onClick={this.clickLearned} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">ok</button>
                        <button data-txt="hard" onClick={this.clickLearned} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">hard</button>
                    </div>
                </div>
            )
        }
        return (
            <div className="flex-shrink-0 flex items-center justify-between flex-wrap bg-gray-200 p-3">
                <div>
                    <button onClick={this.clickFlip} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Flip</button>
                </div>
            </div>
        )
    }
}

export default ActionBar