import  {useState, useEffect} from 'react';
import './App.css';
import {api} from './Api/api';
import ConeRenderer from './ConeRenderer';

type ConeData = {
    vertices: Array<number>;
    indices: Array<number>;
};

const App: React.FC = () => {
    const [threeCone, setThreeCone] = useState({
        height: 1,
        radius: 1,
        segments: 8,
    });

    const [coneData, setConeData] = useState<ConeData | null>(null);

    const [height, setHeight] = useState(1);
    const [radius, setRadius] = useState(1);
    const [segments, setSegments] = useState(8);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        api
            .getConeTriangulation(threeCone)
            .then((res) => {
                setConeData({
                    indices: res?.data?.indices,
                    vertices: res?.data?.vertices,
                });
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [threeCone]);


    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0) {
            return;
        }
        setHeight(parseFloat(e.target.value));
    };

    const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0) {
            return;
        }
        setRadius(parseFloat(e.target.value));
    };

    const handleSegmentsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) < 0) {
            return;
        }
        setSegments(parseInt(e.target.value));
    };

    const handleUpdateClick = () => {
        setThreeCone({
            height,
            radius,
            segments,
        });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSegments(360);
        } else {
            setSegments(8);
        }
    };

    return (
        <div>
            <h1 className="appContainer">Введите параметры конуса:</h1>
            <div className="labelsAndInputs">
                <label htmlFor="height">
                    <b>Высота:</b>
                </label>
                <input type="number" id="height" value={height} onChange={handleHeightChange} step="0.1" max={7}/>
                <label htmlFor="radius">
                    <b>Радиус:</b>
                </label>
                <input type="number" id="radius" value={radius} onChange={handleRadiusChange} step="0.1" max={6}/>
                <div>
                    <label htmlFor="segments">
                        <b>Сегменты:</b>
                    </label>
                    <input type="number" id="segments" value={segments} onChange={handleSegmentsChange} max={80}/>
                </div>
            </div>
            <label className="checkbox">
                <input type="checkbox" checked={segments >= 360} onChange={handleCheckboxChange}/>
                Дополнительное задание (гладкий конус)
            </label>
            <button className={`button ${isLoading ? "loading" : ''}`} onClick={handleUpdateClick}>
                {isLoading ? 'Загрузка...' : 'Обновить конус'}
            </button>
            {coneData && <ConeRenderer vertices={coneData?.vertices} indices={coneData?.indices}/>}
        </div>
    );
};

export default App;
