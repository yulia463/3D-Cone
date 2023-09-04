import React, { useState } from 'react';
import ThreeCone from './ThreeCone';
//@ts-ignore
import s from './App.module.css'

const App: React.FC = () => {
    const [threeCone, setThreeCone] = useState({
        height: 1,
        radius: 1,
        segments: 8,
    })
    const [height, setHeight] = useState(1);
    const [radius, setRadius] = useState(1);
    const [segments, setSegments] = useState(8);

    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0){
            return
        }
        setHeight(parseFloat(e.target.value));
    };

    const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0){
            return
        }
        setRadius(parseFloat(e.target.value));
    };

    const handleSegmentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) > 2){
            return
        }
        setSegments(parseInt(e.target.value));
    };

    const handleUpdateClick = () => {
        setThreeCone({
            height,
            radius,
            segments,
        })
    };

    return (
        <div>
            <h1 className={s.appContainer}>Введите параметры конуса:</h1>
            <div className={s.labelsAndInputs}>
                <label htmlFor="height">Высота:</label>
                <input type="number" id="height" value={height} onChange={handleHeightChange} step="0.1" />

                <label htmlFor="radius">Радиус:</label>
                <input type="number" id="radius" value={radius} onChange={handleRadiusChange} step="0.1" />

                <label htmlFor="segments">Сегменты:</label>
                <input type="number" id="segments" value={segments} onChange={handleSegmentsChange} />
            </div>

            <button onClick={handleUpdateClick}>Обновить конус</button> {/* Кнопка для обновления конуса */}
            <ThreeCone
                height={threeCone.height}
                radius={threeCone.radius}
                segments={threeCone.segments}
            />
        </div>
    );
};


export default App;
