import Button from "../../components/NavButton/NavButton";
import preguntados from "./preguntados.webp"
import "./Home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate()

    return(
        <div className="HomeWrapper">
            <img className="PreguntadosImage" src={preguntados}/>
            <div className="ButtonAtHomeMetaWrapper">
                <div className="ButtonAtHomeWrapper"> 
                    <Button url={"/select_level"} tag={"Start"}/>
                </div>
            </div>
        </div>
)}

export default Home;