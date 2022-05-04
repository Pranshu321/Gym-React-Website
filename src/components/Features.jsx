import React from "react";
import FeatureBox from "./FeatureBox";
import fimage1 from "../images/1.svg";
import fimage2 from "../images/2.svg";
import fimage3 from "../images/3.svg";
import fimage4 from "../images/4.svg";

function Feature() {
	return(
    <div id="features">
		<h1>Features</h1>
		<div className="a-container">
			<FeatureBox image={fimage1} title="WeightLifting" />
			<FeatureBox image={fimage2} title="SpecificMuscle" />
			<FeatureBox image={fimage3} title="FlexYourMuscle" />
			<FeatureBox image={fimage4} title="CardioExercise" />
		</div>
	</div>
    );
}

export default Feature;
