import Button from "../../components/Button/Button";
import preguntados from "./preguntados.webp"
import "./Home.css"

const Home = () => {

    const goToSelecLevel = () => {console.log("FUNCIONA")}

    return(
        <div className="HomeWrapper">
            <img className="PreguntadosImage" src={preguntados}/>
                <div className="ButtonAtHomeWrapper"> 
                    <Button action={goToSelecLevel}/>
                </div>
        </div>
)}

export default Home;