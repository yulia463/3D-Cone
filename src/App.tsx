import React, { useState } from 'react';
import ThreeCone from './ThreeCone';
import s from './App.module.css'

const App = () => {
    const [height, setHeight] = useState(1);
    const [radius, setRadius] = useState(1);
    const [segments, setSegments] = useState(8);

    const handleHeightChange = (e:any) => {
        setHeight(parseFloat(e.target.value));
    };

    const handleRadiusChange = (e:any) => {
        setRadius(parseFloat(e.target.value));
    };

    const handleSegmentsChange = (e:any) => {
        setSegments(parseInt(e.target.value));
    };

    return (
        <div>
            <h1 className={s.appContainer}>Введите параметры конуса:</h1>
            <label htmlFor="height">Высота:</label>
            <input type="number" id="height" value={height} onChange={handleHeightChange} step="0.1" />

            <label htmlFor="radius">Радиус:</label>
            <input type="number" id="radius" value={radius} onChange={handleRadiusChange} step="0.1" />

            <label htmlFor="segments">Сегменты:</label>
            <input type="number" id="segments" value={segments} onChange={handleSegmentsChange} />

            <ThreeCone height={height} radius={radius} segments={segments} />
        </div>
    );
};

export default App;
