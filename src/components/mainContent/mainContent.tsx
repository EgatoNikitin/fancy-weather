import { BigTemperature } from "./BigTemperature/BigTemperature"
import { SmallTemperature } from "./SmallTemperature/SmallTemperature"
import { MapBox } from "./MapBox/MapBox"
import { MapBox2 } from "./MapBox/MapBox2"

import React, { FC } from 'react';

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
                    <BigTemperature />
                    <SmallTemperature />
                </div>

                <div className='right--content'>
                    <MapBox />
                    <MapBox2 />
                </div>

            </div>
        </div>
    );
}