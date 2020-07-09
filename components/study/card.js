function Card({ question, answer, flipped }) {
    // if (flipped) {
    //     return (
    //         <div className="flex-grow container">
    //             <Question question={question} />
    //             <Answer answer={answer} />
    //         </div>
    //     )
    // }
    return (
        <div className="flex-grow m-4">
            <div className="container">
                <Question question={question} flipped={flipped}/>
                <Answer answer={answer} flipped={flipped}/>
            </div>
        </div>
    )

}

const Question = ({ question, flipped }) => (
    <div className={`${flipped ? "flipped flipped-front" : " "} front`}>
        <div className="inner">
            <p>{question}</p>
        </div>
    </div>
)

const Answer = ({ answer, flipped }) => (
    <div className={`${flipped ? "flipped flipped-back" : " "} back`}>
        <div className="inner">
            <p>{answer}</p>
        </div>
    </div>

)

export default Card;