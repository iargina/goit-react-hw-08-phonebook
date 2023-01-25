import React from 'react';
import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts/selectors_contact';
import { useDispatch } from 'react-redux';

import { deleteContacts } from 'redux/contacts/operations';

import css from './ContactList.module.css';

export const ContactList = () => {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {visibleContacts.map(el => {
        return (
          <li key={el.id} className={css.listItem}>
            {el.name}: {el.number}
            <button
              type="button"
              className={css.deleteButton}
              onClick={() => dispatch(deleteContacts(el.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
