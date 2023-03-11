import React, {FC} from 'react';
import './refreshButton.scss';
import reficon from '../../assets/img/vector.svg';

export const RefreshButton: FC = () => {
    return (
        <button type='button' className='RefreshButton'><img src={reficon} alt="#"/></button>
    );
}