import React from "react";
import './styleElements.css'

function FirstElement1(props) {
    console.log(props.name);
    return (

        <div className='containerItem'>
            <div className='image'>
                <img src={props.img} alt=''/>
            </div>
            <div className='productName'>
                {props.name}
            </div>
            <div className='productPrice'>
                {props.price} ₴
            </div>
        </div>
    );
}

export default FirstElement1