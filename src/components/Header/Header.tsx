import { SeltctButton } from '../selectButton/selectButton'
import { RefreshButton } from '../refreshButton/refreshButton'
import { SearchForm } from '../SearchForm/SearchForm';

import React, { FC, useState } from 'react';

import './Header.scss';

type HeaderProps = {
    setImg: (value: string) => void,
}

export const Header: FC<HeaderProps> = ({ setImg }) => {

    const changeBackground = () => {

    }

    return (
        <header className="header">
            <div className='controllers'>
                <RefreshButton onClick={changeBackground} />
                <SeltctButton />
                <button className='button fah unactive'>°F</button>
                <button className='button cel'>°C</button>
            </div>
            <SearchForm />
        </header>
    );
}