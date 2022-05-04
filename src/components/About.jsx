import React from "react";
import Aboutpng from "../images/about.png";

function About() {
	return (
		<div id="about">
			<div id="about-image">
				<img src={Aboutpng} alt="" />
			</div>
			<div className="about-text">
				<h1>KNOW US</h1>
				<p>
					{" "}
					sd adasdsa dsa das dasdsd d d asd sds s fd fd fd fsd fd sfd f dfdf df
					sdf df sdf sdf sdf sd fsd fsd fd fsd fsd fd fsd fd sf f dfsa er ewt
					rerthytnddjsha ghtrh yt j gvsdfvfdbgdjhdfb fdb gs h tg v g hfd h trg
					fdg ag er bfd ewaa.
				</p>
				<button>READ MORE</button>
			</div>
		</div>
	);
}

export default About;
