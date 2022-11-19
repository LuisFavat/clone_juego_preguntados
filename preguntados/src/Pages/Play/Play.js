import Question from "../../components/Question/Question";
import "./Play.css"
import Api from "../../Api/preguntados"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Play = () => {

    const [questionsLoaded, setQuestionsLoaded] = useState([[],false])

    let {aDificulty} = useParams()

    console.log("Antes", questionsLoaded)

    useEffect(() => {
        Api.getQuestions(aDificulty)
            .then((data) => {
                setQuestionsLoaded([data, true])
                console.log("here iam", questionsLoaded.at(1))
    })
            .catch((error) => error)
    },[])
 
    const [actualQuestion, setActualQuestion] = useState(0)



    return(
        <div className="PlayQuestionWrapper">
            { questionsLoaded.at(1)?
                <Question 
                    question={questionsLoaded.at(0)[actualQuestion].question} 
                    option1={questionsLoaded.at(0)[actualQuestion].option1} 
                    option2={questionsLoaded.at(0)[actualQuestion].option2} 
                    option3={questionsLoaded.at(0)[actualQuestion].option3} 
                    option4={questionsLoaded.at(0)[actualQuestion].option4}
                    />
             : <div/>}
        </div>
    )

}

export default Play;