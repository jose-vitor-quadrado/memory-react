import React, { Fragment } from 'react';

export default function GameOver(props) {
    return (
        props.show ? 
            <div id="gameOver">
                <div>Congrats, you win the game!</div>
                <button id="restart" onClick={props.handleRestart}>Play again</button>
            </div> 
            :
            <Fragment/>
    )
}  