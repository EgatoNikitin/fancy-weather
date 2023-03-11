import { SeltctButton } from '../selectButton/selectButton'
import { RefreshButton } from '../refreshButton/refreshButton'

import React, {FC} from 'react';

import './Header.scss';


export const Header: FC = () => {
    return (
        <header className="header">
            <div className='controllers'>
                <RefreshButton/>
                <SeltctButton/>
                <button className='button fah unactive'>°F</button>
                <button className='button cel'>°C</button>
            </div>
        </header>
    );
}