import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { deleteContacts, fetchContact, addContact } from './operations';
import { logOut } from 'redux/auth/authOperations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const extraActions = [fetchContact, addContact, deleteContacts];

const getActions = type => extraActions.map(action => action[type]);

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  Notify.failure('Something went wrong');
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsInitialState = { items: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContact.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload.id);
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = null;
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});
export const contactsReducer = contactsSlice.reducer;
