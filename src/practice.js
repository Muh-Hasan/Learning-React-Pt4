import React, { useState } from 'react';
import './practice.css';

function Room() {
    let [isLit, setLit] = useState(true);
    let [temperature, setTemperature] = useState(72);

    return(
        <div className={`room ${isLit ? "lit" : "dark"}`}>
            This room is { isLit ? "dark" : "light"}
            <br />
            <br />
            <button onClick={() => setLit(true)}>ON</button>
            <button onClick={() => setLit(false)}>OFF</button>
            <br />
            <br />
            Temperature : {temperature}
            <br />
            <br />
            <button onClick={() => setTemperature(++temperature)}>+</button>
            <button onClick={() => setTemperature(--temperature)}>-</button>
        </div>
    );
}

export default Room;