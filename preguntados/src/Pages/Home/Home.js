import Button from "../../components/Button/Button";
import preguntados from "./preguntados.webp"
import "./Home.css"

const Home = () => {

    return(
        <div className="HomeWrapper">
            <img className="PreguntadosImage" src={preguntados}/>   
            <Button className="ButtonOnHome" />
        </div>
)}

export default Home;