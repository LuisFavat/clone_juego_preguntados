import "./Error.css"
import NavButton from "../../components/NavButton/NavButton"
import { useParams } from "react-router-dom"

const Error = () => {
    
    let {message} = useParams()

    return(
    <div className="Error">
        <div className="Message">
            <div>Something was wrong!!!</div>
        {message}
        <NavButton url={"/"} tag={"Play again"}/>
        </div>
    
    </div>
)}

export default Error;