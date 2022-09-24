import React from "react";
import "./Timeline.css";

function Timeline() {
	return (
		<div className="timeline-container">
			<div>
				<ul>
					<li>
						<div>
							<time>1910</time>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullamcorper suscipit lobortis nisl ut
								aliquip ex ea commodo consequat.
							</p>
						</div>
					</li>
					<li>
						<div>
							<time>1920</time>
							<p>
								Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
								diam nonummy nibh euismod tincidunt ut laoreet dolore magna
								aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullamcorper suscipit lobortis nisl ut
								aliquip ex ea commodo consequat.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Timeline;
