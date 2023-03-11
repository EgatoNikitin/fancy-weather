import cliudicon from "../../../assets/img/cloud.png";

import React, {FC} from 'react';

import './BigTemperature.scss';


export const BigTemperature: FC = () => {
    return (
        <div className='big-number'>
            <img className="big-cloud" src={cliudicon}/>
            <div className='temp--number'>10°</div>
            <ul className="info--list">
                <li className="info--list-item">overcast</li>
                <li className="info--list-item">Feels like: 7°</li>
                <li className="info--list-item">Wind: 2 m/s</li>
                <li className="info--list-item">Humidity: 83%</li>
            </ul>
        </div>
    );
}
