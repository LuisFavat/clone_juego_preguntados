import { useNavigate } from "react-router-dom"
import "./NavButton.css"

const NavButton = ({url, tag}) => {

    const navigate = useNavigate()

    const action = () => {
        navigate(url)
    }

    return(
      
            <div className="MetaButtonWrapper">
                <div className="ButtonWrapper">
                    <button className="Button" onClick={action}>{tag}</button>
                </div>
            </div>
    )
}

export default NavButton;