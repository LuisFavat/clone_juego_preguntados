import Question from "../../components/Question/Question";
import "./Play.css"
import Api from "../../Api/preguntados"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button/Button";



const Play = () => {

    const [questionsLoaded, setQuestionsLoaded] = useState([[],false])

    let {dificulty} = useParams()
    console.log("a dificulty: ", dificulty)

    useEffect(() => {
        Api.getQuestions(dificulty)
            .then((data) => {
                setQuestionsLoaded([data, true])
    })
            .catch((error) => error)
    },[])
 
    const [actualQuestion, setActualQuestion] = useState(0)

    const navigate = useNavigate()

    const submitAnswer = () => {
       setActualQuestion(actualQuestion + 1)
       navigate(`/play/${dificulty}?question=${actualQuestion+1}`)
    }

    return(
        <div className="PlayQuestionWrapper">
            { questionsLoaded.at(1)?
                <Question 
                    submit={submitAnswer}
                    questionID={ questionsLoaded.at(0)[actualQuestion].id }
                    question={ questionsLoaded.at(0)[actualQuestion].question } 
                    option1={ questionsLoaded.at(0)[actualQuestion].option1 } 
                    option2={ questionsLoaded.at(0)[actualQuestion].option2 } 
                    option3={ questionsLoaded.at(0)[actualQuestion].option3 } 
                    option4={ questionsLoaded.at(0)[actualQuestion].option4 }
                    />
             : <div/>}
             <div>
                <Button action={ submitAnswer } tag ={"Next question"}/>
             </div>
        </div>
    )

}

export default Play;