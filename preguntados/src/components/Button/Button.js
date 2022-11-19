const Button = ({action, tag}) => {
    return(
      
        <div className="ButtonWrapper">
            <button className="Button" onClick={action}> {tag} </button>
        </div>
   
)
}

export default Button;