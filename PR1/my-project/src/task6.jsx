import React, {useState} from "react";


function Hooks(props) {

    const [color, setColor] = useState("red");
    return (
        <div>
            <p>This is {color} Product</p>
            <select onChange={(e)=> setColor(e.target.value)}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
            </select>
        </div>
    );
}

export default Hooks


