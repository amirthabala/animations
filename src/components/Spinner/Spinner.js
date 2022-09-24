import React from "react";
import logo from "../../assets/triangle.png";
import "./Spinner.css";

function Spinner() {
	return (
		<div className="vh-100 vw-100 d-flex align-items-center justify-content-center">
			<div style={{ width: "100px", height: "100px" }}>
				<svg width="100px" height="100px" viewBox="-4 -1 38 28">
					<polygon
						fill="transparent"
						stroke="#FC2E20"
						stroke-width="2"
						points="15,0 30,30 0,30"
					></polygon>
				</svg>
				<div className="logo-container">
					<img src={logo} alt="logo" width={"100%"} height={"100%"} />
				</div>
			</div>
		</div>
	);
}

export default Spinner;
