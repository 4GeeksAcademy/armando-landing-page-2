import React from "react";

//create your first component

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Acerca de Nosotros</a>
                        </li>
						<li className="nav-item">
                            <a className="nav-link" href="#">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const Jumbotron = () => {
    return (
        <div className="mb-4 bg-secondary text-white rounded-3 mt-4">
            <div className="container-fluid py-0 py-md-5 text-start">
                <h1 className="display-5 fw-bold">Bienvenido!</h1>
                <p className="col-md-16 fs-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore facere distinctio voluptates quia officiis unde nobis neque veniam hic. Sequi totam laudantium, velit a quaerat deleniti blanditiis facere reiciendis cumque!
                </p>
                <button className="btn btn-primary btn-lg" type="button">
                    Comenzar
                </button>
            </div>
        </div>
    );
};

const Card = (props) => {
    const { image, title, description } = props.cards;
    return (
        <div className="card h-100">
            <img src={image} className="card-img-top" style={{ height: '200px', objectFit: 'cover' }} alt={title} />
            <div className="card-body">
                <h5 className="card-title fw-bold">{title}</h5>
                <p className="card-text">{description}</p>
                <hr style={{ border: 'none', height: '1px', backgroundColor: '#343a40', margin: '0 -15px', marginBottom: '20px' }} />
                <button className="btn btn-primary">
                    Información
                </button>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
                <p> <small>Copyright &copy; Your Website {new Date().getFullYear()}</small></p>
            </div>
        </footer>
    );
};

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