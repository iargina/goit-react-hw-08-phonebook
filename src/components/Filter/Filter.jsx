import React from 'react';
import css from './Filter.module.css';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filter/selectors_filter';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';

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
