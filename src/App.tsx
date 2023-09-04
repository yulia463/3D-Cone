import React, { useState } from 'react';
import ThreeCone from './ThreeCone';
//@ts-ignore
import s from './App.module.css'

const App: React.FC = () => {
    const [height, setHeight] = useState(1);
    const [radius, setRadius] = useState(1);
    const [segments, setSegments] = useState(8);
    const [key, setKey] = useState(0); // Состояние для обновления компонента ThreeCone

    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHeight(parseFloat(e.target.value));
    };

    const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadius(parseFloat(e.target.value));
    };

    const handleSegmentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSegments(parseInt(e.target.value));
    };

    const handleUpdateClick = () => {
        setKey((prevKey) => prevKey + 1); // Обновляем ключ компонента ThreeCone
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
            <ThreeCone key={key} height={height} radius={radius} segments={segments}  /> {/* Используем ключ для обновления компонента ThreeCone */}
        </div>
    );
};


export default App;
