import React from "react";

const ImageCard = (props) => (
	<div className="card">
	    <div className="img-container">
	    	<img alt={props.name} src={props.image} />
	    </div>
  	</div>
);

export default ImageCard