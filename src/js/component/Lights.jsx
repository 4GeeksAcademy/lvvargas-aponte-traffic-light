import React from 'react';


export const Lights = (props) => {


    return (
        <>
            <div className={`red light ${props.selectLight === 'red' ? 'selected' : ''}`} onClick={props.onRed}></div>
            <div className={`yellow light ${props.selectLight === 'yellow' ? 'selected' : ''}`} onClick={props.onYellow}></div>
            <div className={`green light ${props.selectLight === 'green' ? 'selected' : ''}`} onClick={props.onGreen}></div>
        </>
    );
}

export default Lights;