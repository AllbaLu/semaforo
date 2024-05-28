import React, { useState } from "react";
import styles from "/src/styles/index.css";

const Card = () =>{


    const [color, setColor] = useState("");
    


    return ( 
    <div >
        <div className="barra"></div>
        <div className="TrafficLight">
            <div onClick={()=> setColor("red")} className={`firstLight ${color=="red" ? "glow": " " }`}></div>
            <div onClick={()=> setColor("yellow")}className={`secondLight ${color == "yellow" ? "glow": " "}`}></div>
            <div onClick={()=> setColor("green")}className={`thirdLight ${color == "green" ? "glow": " "}`}></div>
        </div>
        
    </div>
    )
}

export default Card;