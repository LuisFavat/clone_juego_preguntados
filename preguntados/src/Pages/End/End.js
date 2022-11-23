import "./End.css"
import NavButton from "../../components/NavButton/NavButton"
import { useParams } from "react-router-dom"

const End = () => {
    
    let {score} = useParams()

    return(
    <div className="End">
        <div className="Score">
            Your score is: {score}
        <NavButton url={"/"} tag={"Play again"}/>
        </div>
    
    </div>
)}

export default End;