import cliudicon from "../../assets/img/cloud.png";

import React, {FC} from 'react';

import './mainContent.scss';

export const MainContent: FC = () => {
    return (
        <div className='main--content'>
            <div className='main--content-wrapper'>
                <div className='left--content'>
                    <h1>Minsk, Belarus</h1>
                    <div className='data--wrapper'>
                        <div className='data--wrapper-item'>
                            Mon 28 October
                        </div>
                        <div className='data--wrapper-item'>
                        17:23
                        </div>
                    </div>
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
                    <div className="small--Number-wrapper">
                        <div className="smallNumber-item">
                            <div className="smallNumber--day">Tuesday</div>
                            <div className="item--wrapper">
                                <div className="smallNumber--temperature">7°</div>
                                <img src={cliudicon}/>
                            </div>
                        </div>
                        <div className="smallNumber-item">
                            <div className="smallNumber--day">Tuesday</div>
                            <div className="item--wrapper">
                                <div className="smallNumber--temperature">7°</div>
                                <img src={cliudicon}/>
                            </div>
                        </div>
                        <div className="smallNumber-item">
                            <div className="smallNumber--day">Tuesday</div>
                            <div className="item--wrapper">
                                <div className="smallNumber--temperature">7°</div>
                                <img src={cliudicon}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right--content'></div>
            </div>
        </div>
    );
}