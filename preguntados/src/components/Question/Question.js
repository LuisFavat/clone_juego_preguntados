import "./Question.css"

const Question = ({question, option1, option2, option3, option4}) =>
{

    return(
        <div className="QuestionWrapper">
            <div>{ question }</div>
            <div>{ option1 }</div>
            <div>{ option2 }</div>
            <div>{ option3 }</div>
            <div>{ option4 }</div>
        </div>
    )
}

export default Question;