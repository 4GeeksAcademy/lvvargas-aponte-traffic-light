import React from "react";
import 'bootstrap';

//create your first component
const Button = ({ onClick }) => {

	return (
		<div className="text-center">
			<button className="btn btn-light" onClick={onClick} >Cycle Button</button>
		</div>
	);
};

export default Button;
