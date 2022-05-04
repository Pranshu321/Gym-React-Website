import React from "react";

function FeatureBox(props) {
    return(
    <div className="a-box">
        <div className="a-b-img">
            <img src={props.image} alt='' />
        </div>
        <div className="a-b-text">
          <h2>{props.title}</h2>
          <p>fd df dsfd fdf dfs dfsf fsf fsdffs dfsdf fdsad </p>
        </div>
    </div>
    );
  }

export default FeatureBox;