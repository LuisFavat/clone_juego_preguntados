import Question from "../../components/Question/Question";
import "./Play.css"

const Play = () => {
    return(
        <div className="PlayQuestionWrapper">
            <Question question={"como se llama tu hermana?"} option1={"lala"} option2={"lolo"} option3={"manolo"} option4={ "lotro" }/>
        </div>
    )
}

export default Play;