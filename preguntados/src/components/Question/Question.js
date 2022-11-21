import { useEffect, useState } from "react"
import Api from "../../Api/preguntados"
import "./Question.css"
import Button from "../Button/Button"

const Question = ({submit, questionID, question, option1, option2, option3, option4}) =>
{
   
    const [questionsState, setQuestionsState] = useState(["unCheck", "unCheck", "unCheck", "unCheck"])

    const unCkeckState = () => Array(4).fill("unCheck")

    const Option = ({style, id, aOption}) => { 

        const sendOption = () => {
            if(!questionsState.includes("true") && !questionsState.includes("false"))
            {
            Api.postOption(questionID, `option${id}`)
                .then((data) => {
                        let newState = unCkeckState()
                        newState.splice(id -1, 1, data.answer.toString())
                        setQuestionsState(newState)
                        if(newState.includes("true"))
                        {
                            setScore(score + 1)
                        }
                    })
                .catch(function (error){
                    console.log("ERROR!!!", error)
                })            
        }}

        return(
            <div className={style} onClick={sendOption}>{ aOption }</div>
        )
    }

    const [score, setScore] = useState(0)

    const doOnClick = () => {
        submit()
        setQuestionsState(unCkeckState())
    }

    return(
        <div className="QuestionWrapper" >
            <div>Correct aswers: {score} </div>
            <div>{ question }</div>
            <Option style={questionsState[0]} id={1}  aOption={option1}/>
            <Option style={questionsState[1]} id={2}  aOption={option2}/>
            <Option style={questionsState[2]} id={3}  aOption={option3}/>
            <Option style={questionsState[3]} id={4}  aOption={option4}/>
            <div>
                <Button action={ doOnClick } tag ={"Next question"}/>
             </div>
        </div>
    )
}

export default Question;