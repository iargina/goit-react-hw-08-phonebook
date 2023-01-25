import { useEffect } from 'react';
import {
  getContacts,
  getError,
  getIsLoading,
} from 'redux/contacts/selectors_contact';
import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchContact } from 'redux/contacts/operations';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Spinner } from 'components/Spinner/Spinner';

export default function Contacts() {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
      }}
    >
      <h2 className="formTitle">PhoneBook</h2>
      <ContactForm />
      <h2 className="contactListTitle">Contacts</h2>
      {isLoading && <Spinner />}
      {error && Notify.failure('Something went wrong.')}
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Your have no contacts in your phone book</p>
      )}
    </section>
  );
}
