import React, { useState, useEffect } from 'react';
import Lights from '../component/Lights';

import "../../styles/index.css";
import Button from '../component/Button';

const App = (props) => {
    const [lightSelected, setLightSelected] = useState('red');
    const [isCycling, setIsCycling] = useState(false);

    const handleClick = (lightSelected) => {
        if (isCycling === true) {
            setIsCycling(false);
        } else setLightSelected(lightSelected);

    }

    const handleCycle = () => {
        setIsCycling(true);
        console.log(isCycling);
    }

    const cycleColors = () => {
        setLightSelected((prevLight) => {
            switch (prevLight) {
                case 'red':
                    return 'yellow';
                    break;
                case 'yellow':
                    return 'green';
                    break;
                case 'green':
                    return 'red';
                default:
                    return 'red';
            }
        })
    }

    useEffect(() => {
        let intervalId = 0;

        if (isCycling) {
            intervalId = setInterval(cycleColors, 3000);
        } else {
            clearInterval(intervalId);
        }
        return () => {
            clearInterval(intervalId);
        };
    }, [isCycling]);

    return (
        <>
            <div className="top"></div>
            <div className="trafficContainer">
                <Lights selectLight={lightSelected} onRed={() => handleClick('red')} onYellow={() => handleClick('yellow')} onGreen={() => handleClick('green')} />
            </div>
            <Button onClick={handleCycle} />
        </>


    )
};

export default App;