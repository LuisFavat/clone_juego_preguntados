import "./Button.css"

const Button = ({action}) => {
    return(
        <div className="ButtonWrapper">Press
            <button className="Button" onClick={action}>Start</button>
        </div>
    )
}

export default Button;