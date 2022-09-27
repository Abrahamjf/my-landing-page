import React from "react";
import {Navbar} from "./Navbar.js";
import {Jumbotron} from "./Jumbotron.js";
import {Card} from "./Card.js";

//create your first component
export const Home = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Jumbotron />
			<Card
			imageUrl="https://picsum.photos/200/200?random"
			title ="Card's Title"
			text = "Some quick example text to build on the card title and make up the bulk of the card's content."
			 />
		</React.Fragment>
	);
};