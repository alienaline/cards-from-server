import React from 'react';
import SearchStyles from './Search.module.css';
import { IoSearch } from 'react-icons/io5';

function Search() {
    return (
        <div className={SearchStyles.searchContainer}>
            <fieldset className={SearchStyles.fieldset}>
                <input 
                    type='text'
                    placeholder='Поиск по каталогу'
                    className={SearchStyles.input} />
                <IoSearch  className={SearchStyles.icon} />
            </fieldset>
        </div>
    );
}

export default Search;