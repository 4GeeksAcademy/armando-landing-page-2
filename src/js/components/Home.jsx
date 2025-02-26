import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

//create your first component

const cardData = [
    {
        image: "https://photos.bandsintown.com/thumb/9823920.jpeg",
        title: "Random",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque veniam hic. Sequi totam laudantium, velit a quaerat deleniti blanditiis"
    },
    {
        image: "https://quantumbase.com/wp-content/uploads/2018/06/138913782_whitebg-300x300.jpg",
        title: "Gameboy",
        description: "La Game Boy es una consola de mano portátil fabricada por Nintendo, alimentadas con pilas (a excepción del modelo SP y Micro), lanzada inicialmente en 1989. Es uno de los sistemas más vendidos hasta la fecha."
    },
    {
        image: "https://console.kr-asia.com/wp-content/uploads/2019/07/Coding-300x300.jpg",
        title: "Bootcamp",
        description: "Los bootcamps son programas de estudios intensivos e inmersivos que tienen como objetivo desarrollar habilidades tecnológicas para profesionales que se desempeñan en el área de la ingeniería informática."
    },
	{
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfKkGTj4jWXn7qyqw9TGVs0Be_YkqyN6oTmQ&s",
        title: "REACT",
        description: "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página."
    }
];

const Home = () => {
    return (
        <div>
            <Navbar />
			<div className="container">
				<Jumbotron />
                <div className="row justify-content-center">
                    {cardData.map((card, index) => (
                        <div className="col-md-3" key={index}>
                            <Card cards={card} />
                        </div>
                    ))}
                </div>
            </div>
			<Footer />
        </div>
    );
};

export default Home;