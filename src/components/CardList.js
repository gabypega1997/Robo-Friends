import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    if(true){
        throw new Error ("NOOOOOOOOO!");
    }
    return(
        <div className="flex flex-wrap">

            {robots.map((robot, i) =>{
            return(
                <Card key={i} 
                id={robot.id} 
                name={robot.name}
                email={robot.email}>
            </Card>
            )
            }
            ) 
            }

        </div>
        

    )
}

export default CardList;