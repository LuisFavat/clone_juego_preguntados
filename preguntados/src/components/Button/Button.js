const Button = ({action, tag}) => {
    return(
        <div className="MetaButtonWrapper">
            <div className="ButtonWrapper">
                <button className="Button" onClick={action}> {tag} </button>
            </div>
        </div>
)
}

export default Button;