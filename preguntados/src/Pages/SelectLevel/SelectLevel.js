import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../Api/preguntados"
import NavButton from "../../components/NavButton/NavButton"
import "./SelectLevel.css"

const SelectLevel = () => {

    const [levels, setLevels] = useState([])
    
    const navigate = useNavigate()

    useEffect(() => {
        Api.getDificulty()
            .then( (data) => setLevels(data))
            .catch((error) => 
            {navigate("/error/can't access difficulty")
            console.log(error)
        })
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