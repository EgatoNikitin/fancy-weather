import cliudicon from "../../../assets/img/cloud.png";

import React, {FC} from 'react';

import './SmallTemperature.scss';


export const SmallTemperature: FC = () => {
    return (
        <div className="small--Number-wrapper">
            <div className="smallNumber-item">
                <div className="smallNumber--day">Tuesday</div>
                <div className="item--wrapper">
                    <div className="smallNumber--temperature">7°</div>
                    <img className="small--cloud" src={cliudicon}/>
                </div>
            </div>
            <div className="smallNumber-item">
                <div className="smallNumber--day">Tuesday</div>
                <div className="item--wrapper">
                    <div className="smallNumber--temperature">7°</div>
                    <img className="small--cloud" src={cliudicon}/>
                </div>
            </div>
            <div className="smallNumber-item">
                <div className="smallNumber--day">Tuesday</div>
                <div className="item--wrapper">
                    <div className="smallNumber--temperature">7°</div>
                    <img className="small--cloud" src={cliudicon}/>
                </div>
            </div>
        </div>
    );
}
