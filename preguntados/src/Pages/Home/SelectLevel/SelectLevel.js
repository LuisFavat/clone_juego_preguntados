import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../../Api/preguntados"
import NavButton from "../../../components/Button/NavButton"
import "./SelectLevel.css"

const SelectLevel = () => {

    const [levels, setLevels] = useState([])
    
    useEffect(() => {
        Api.getDificulty()
            .then( (data) => setLevels(data))
            .catch((error) => error)
    })


    


    return(
        <div className="LevelSelectButtonMetaWrapper">
            <div className="LevelSelectButtonWrapper">
            Select a difficulty
                {levels.map(level => <NavButton key={level} url={`/play/${level}`} tag={level}/>)}
            </div>
        </div>
    )
}


export default SelectLevel;