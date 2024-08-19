// Code Keypad Component Here
import React from 'react';

function Keypad (){
    function handleChange(){
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password" onChange={handleChange} name="passwordis: "placeholder="Enter your password"></input>
        </div>
    )
}

export default Keypad;