import React from 'react';
const List = ({game}) => {
    return ( 
        <div className="game" style={{backgroundColor:"green"}}>
            <div>
        <h1>{game.title}</h1>
        </div>
        <p>Your value was: {game.value}</p>
        <p>Game number: {game.index}</p>
        </div>
    );
}
 
export default List;