import React from "react";
import PropTypes from "prop-types";

const numbers = [0,1,2,3]

export const Card = ({...props}) => {
    return (
            <div className = "card-group">
                {numbers.map ((number,index) =>{
                    return(
                     <div className="card m-4">
                            <img className="card-img-top" src={props.imageUrl} alt="Imagen" /> 
                            <div className="card-body">                    <h5 className="card-tittle">{props.title}</h5>
                                <p className="card-text">{props.text}</p>
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                     </div>)
                })}
               
            </div>
    );
};

Card.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
};