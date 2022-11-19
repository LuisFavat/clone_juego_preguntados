import { useNavigate } from "react-router-dom"
import "./NavButton.css"

const NavButton = ({url, tag}) => {

    const navigate = useNavigate()

    const action = () => {
        navigate(url)
    }

    return(
      
            <div className="ButtonWrapper">
                <button className="Button" onClick={action}>{tag}</button>
            </div>
       
    )
}

export default NavButton;