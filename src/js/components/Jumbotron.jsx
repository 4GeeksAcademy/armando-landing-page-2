import React from "react";

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

export default Jumbotron;