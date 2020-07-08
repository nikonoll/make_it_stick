function Card({ question, answer, flipped }) {
    if (flipped) {
        return (
            <div className="flex-grow">
                <Question question={question}/>
                <Answer answer={answer}/>
            </div>
        )
    }
    return (
        <div className="flex-grow">
            <Question question={question} />
        </div>
    )

}

const Question = ({ question }) => (
    <div>
        <p>Question is {question}</p>
    </div>
)

const Answer = ({ answer }) => (
    <div>
        <p>Answer is {answer}</p>
    </div>

)

export default Card;