import React, {useState} from 'react';
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
        if (Number(e.target.value) < 0) {
            return
        }
        setHeight(parseFloat(e.target.value));
    };

    const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0) {
            return
        }
        setRadius(parseFloat(e.target.value));
    };

    const handleSegmentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0) {
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
                <label htmlFor="height"><b>Высота:</b> </label>
                <input type="number" id="height" value={height} onChange={handleHeightChange} step="0.1" max={7}/>

                <label htmlFor="radius"><b>Радиус:</b></label>
                <input type="number" id="radius" value={radius} onChange={handleRadiusChange} step="0.1" max={6}/>

                <label htmlFor="segments"><b>Сегменты:</b></label>
                <input type="number" id="segments" value={segments} onChange={handleSegmentsChange} max={80}/>
            </div>
            <div className={s.text}>
                <span>Min Value - 1 and Max Value - 7</span>
                <span>Min Value - 1 and Max Value - 6</span>
                <span>Min Value - 2 and Max Value - 80</span>


            </div>
            <button className={s.button} onClick={handleUpdateClick}>Обновить конус</button>
            <ThreeCone
                height={threeCone.height}
                radius={threeCone.radius}
                segments={threeCone.segments}
            />
        </div>
    );
};


export default App;
