function ActionBar({ flipped, learned }) {
    if(learned){
        return <div>next card</div>
    }
    if (flipped) {
        return (
            <div>
                <p>How was that?</p>
                <p>easy  |  ok  |  hard</p>
            </div>
        )
    }
    return <div>try to remember the card</div>
}

export default ActionBar