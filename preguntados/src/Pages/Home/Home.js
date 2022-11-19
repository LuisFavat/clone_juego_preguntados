import Button from "../../components/Button/Button";
import preguntados from "./preguntados.webp"
import "./Home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()
    const goToSelecLevel = () => {navigate("/select_level")}

    return(
        <div className="HomeWrapper">
            <img className="PreguntadosImage" src={preguntados}/>
                <div className="ButtonAtHomeWrapper"> 
                    <Button action={goToSelecLevel}/>
                </div>
        </div>
)}

export default Home;