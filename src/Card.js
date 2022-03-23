import React from "react";

const Card = ({id, name, email }) => {
    return(
        <div className="tc bg-light-green br3 pad3 ma2 grow bw2 shadow-5 w5">
            <img alt="robots" src={`https://robohash.org/${id}?200X200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
} 

export default Card;