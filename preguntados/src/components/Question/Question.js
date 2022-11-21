import { useEffect, useState } from "react"
import Api from "../../Api/preguntados"
import "./Question.css"
import Button from "../Button/Button"

const Question = ({action, questionID, question, option1, option2, option3, option4}) =>
{
   
    const [questionsState, setQuestionsState] = useState(["unCheck", "unCheck", "unCheck", "unCheck"])

    const unCkeckState = () => Array(4).fill("unCheck")

    const Option = ({style, id, aOption}) => { 

        const sendOption = () => {
            Api.postOption(questionID, `option${id}`)
                .then((data) => {
                        let newState = unCkeckState()
                        newState.splice(id -1, 1, data.answer.toString())
                        console.log("VEr el new stae", newState)
                        setQuestionsState(newState)
                    })
                .catch(function (error){
                    console.log("ERROR!!!", error)
                })            
        }

        return(
            <div className={style} onClick={sendOption}>{ aOption }</div>
        )
    }

    return(
        <div className="QuestionWrapper" >
            <div>{ question }</div>
            <Option style={questionsState[0]} id={1}  aOption={option1}/>
            <Option style={questionsState[1]} id={2}  aOption={option2}/>
            <Option style={questionsState[2]} id={3}  aOption={option3}/>
            <Option style={questionsState[3]} id={4}  aOption={option4}/>
        </div>
    )
}

export default Question;