import React from "react";
import "./Loader.css";

function Loader() {
	return (
		<div className="d-flex vh-100 vw-100 justify-content-center align-items-center">
			<div className="spinner">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default Loader;
