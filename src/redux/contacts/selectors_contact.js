import { createSelector } from '@reduxjs/toolkit';
import { getFilter } from 'redux/filter/selectors_filter';
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(client =>
      client.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
