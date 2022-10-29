import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchStyles from './Search.module.css';
import searchIcon from '../../assets/img/searchIcon.svg';

function Search(props) {
    const [focus, setFocus] = useState(false);

    return (
        <div className={SearchStyles.searchContainer}>
            <fieldset 
                data-state={`${focus ? 'focus' : ''}`}
                className={SearchStyles.fieldset}>
                <legend
                    data-state={`${focus ? 'focus' : ''}`}
                    className={SearchStyles.legend} >
                    Search
                </legend>
                <form   
                    className={SearchStyles.form}
                    onSubmit={(event) => props.handleSearch(event)}>
                    <input 
                        type='text'
                        placeholder={`${focus ? '' : 'Search by names'}`}
                        data-state={`${focus ? 'focus' : ''}`}
                        value={props.inputValue}
                        onChange={(event) => props.setInputvalue(event.target.value)}
                        onFocus={() => setFocus(true)}
                        onBlur={() => setFocus(false)}
                        className={SearchStyles.input} />
                    <button 
                        type='submit'
                        className={SearchStyles.buttonSearch} >
                        <img
                            src={searchIcon}
                            className={SearchStyles.icon} />
                </button>
                </form>
            </fieldset>
        </div>
    );
}

Search.propTypes = {
    inputValue: PropTypes.string,
    setInputvalue: PropTypes.func,
    handleSearch: PropTypes.func
};

export default Search;