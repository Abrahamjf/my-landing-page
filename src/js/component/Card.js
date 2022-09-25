import React from "react";

export const Card = () => {
    return (
        <div className="card m-4">
            <img className="card-img-top" src="https://picsum.photos/200/300?random" alt="Imagen" /> 
            <div className="card-body">
                <h5 className="card-tittle">Card Title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
};