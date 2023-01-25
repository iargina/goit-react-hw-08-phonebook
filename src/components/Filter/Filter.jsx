import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { getFilter } from 'redux/filter/selectors_filter';
import { setFilter } from 'redux/filter/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const renderOnChange = ev => {
    dispatch(setFilter(ev.currentTarget.value));
  };

  return (
    <>
      <input
        type="text"
        name="filter"
        className={css.input}
        value={filter}
        onChange={renderOnChange}
      />
    </>
  );
};
