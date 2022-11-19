import Api from "../../Api/preguntados"
import "./Question.css"

const Question = ({questionID, question, option1, option2, option3, option4}) =>
{
    console.log("question ID", questionID)


    const Option = ({id, aOption}) => { 

        const sendOption = () => {
            Api.postOption(questionID, `option${id}`)
                .then((data) => console.log(data) )
                .catch(function (error){
                    console.log("ERROR!!!", error)
                })            
        }

        return(
            <div onClick={sendOption}>{ aOption }</div>
        )
    }

    return(
        <div className="QuestionWrapper">
            <div>{ question }</div>
            <Option  id={1} aOption={option1}/>
            <Option  id={2} aOption={option2}/>
            <Option  id={3} aOption={option3}/>
            <Option  id={4} aOption={option4}/>
        </div>
    )
}

export default Question;