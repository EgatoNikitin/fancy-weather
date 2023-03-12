import React, {FC} from 'react';
import './refreshButton.scss';
import reficon from '../../assets/img/vector.svg';

type RefreshButtonProps = {
    onClick: ()=>void
}

export const RefreshButton: FC<RefreshButtonProps> = ({onClick}) => {
    return (
        <button type='button' className='RefreshButton'><img src={reficon} alt="#"/></button>
    );
}