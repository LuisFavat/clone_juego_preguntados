import Question from "../../components/Question/Question";
import "./Play.css"
import Api from "../../Api/preguntados"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Play = () => {

    
    //El estado es el siguiente: el indice 0 representa la lista de preguntas,
    // el indice 1 representa si se cargaron las preguntas.
    
    const [questionsLoaded, setQuestionsLoaded] = useState([[],false])
    const [score, setScore] = useState(0)

    const getScoreFromChild = (aScore) => {
        setScore(aScore)
    }

    let {dificulty} = useParams()

    useEffect(() => {
        Api.getQuestions(dificulty)
            .then((data) => {
                setQuestionsLoaded([data, true])
    })
            .catch((error) => {
                navigate("/error/can't access questions")
                console.log(error)
            })
    },[])
 
    const [actualQuestion, setActualQuestion] = useState(0)

    const navigate = useNavigate()

    const submitAnswer = () => {
       if(questionsLoaded.at(0).length !== actualQuestion + 1)
       {
            setActualQuestion(actualQuestion + 1)
       }
       else
       {
            navigate(`/end/${score}`)
       }

    }

    const goToStart = () => {navigate("/")}

    return(
        <div className="playWrapper">
            <div className="Exit" onClick={goToStart}>Exit</div>
            <div className="PlayQuestionWrapper">
                <div className="InfoQuestions">Question number: {actualQuestion + 1} of {questionsLoaded.at(0).length}</div>
                { questionsLoaded.at(1)?
                    <Question 
                        toParent = {getScoreFromChild}
                        submit={submitAnswer}
                        questionID={ questionsLoaded.at(0)[actualQuestion].id }
                        question={ questionsLoaded.at(0)[actualQuestion].question } 
                        option1={ questionsLoaded.at(0)[actualQuestion].option1 } 
                        option2={ questionsLoaded.at(0)[actualQuestion].option2 } 
                        option3={ questionsLoaded.at(0)[actualQuestion].option3 } 
                        option4={ questionsLoaded.at(0)[actualQuestion].option4 }
                        />
                : <div>Loading...</div>}
            </div>
        </div>
    )

}

export default Play;