import React, {FC} from 'react';
import './selectButton.scss';


export const SeltctButton: FC = () => {
    return (
        <div className='select--container'>
            <select className='select--button'>
                <option className='select--button-item' value='EN'>EN</option>
                <option className='select--button-item' value='RU'>RU</option>
            </select>
        </div>
    );
}