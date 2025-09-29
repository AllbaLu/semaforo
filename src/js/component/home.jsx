import React from "react";
import Card from "./Card";
import ReactDOM from "react-dom";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import react from "react";

//create your first component
const Home = () => {
	return ( 
		<div>
			<h1 className="mt-3 ms-5">Prueba</h1>
	
			<Card />
		</div>
	);
};

export default Home;


