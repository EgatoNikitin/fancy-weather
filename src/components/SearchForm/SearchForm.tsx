import {FC} from 'react';
import './SearchForm.scss';


export const SearchForm:FC = () => {
    return(
        <form action="" method="get">
            <input placeholder="Search city or ZIP" type="search"/>
            <span></span>
            <button className='button search' type="submit">SEARCH</button>
        </form>
    );
}