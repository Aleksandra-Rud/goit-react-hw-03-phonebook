import React from "react";
import s from './Filter.module.css';
import PropTypes from 'prop-types'

const Filter = ({ value, filteredValue }) => {
    return (
        <>
            <label className={s.filterInputLabel}>Find contacts by name</label>
            <br />
            <input
                className={s.filteredInput}
                type="text"
                name="filter"
                value={value}
                onChange={filteredValue}
                placeholder="Contact"
            />
        </>
    );
}


Filter.propTypes = {
    value: PropTypes.string.isRequired,
    filteredValue: PropTypes.func.isRequired,
};

export default Filter;