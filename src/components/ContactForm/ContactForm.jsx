import React, { useState } from 'react';
import { getContacts } from 'redux/contacts/selectors_contact';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContact } from 'redux/contacts/operations';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const [clientName, setName] = useState('');
  const [clientNumber, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = ev => {
    switch (ev.currentTarget.name) {
      case 'clientName':
        setName(ev.currentTarget.value);
        break;
      case 'clientNumber':
        setNumber(ev.currentTarget.value);
        break;
      default:
        Notify.failure('Something went wrong');
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const client = {
      name: clientName,
      number: clientNumber,
    };

    const result = contacts.find(
      el => el.name.toLowerCase() === client.name.toLowerCase()
    );
    if (result) {
      Notify.warning(`${client.name} is already in your contact list`);
      return;
    }

    dispatch(addContact(client));
    setNumber('');
    setName('');
    return;
  };

  return (
    <form className={css.contactForm} onSubmit={onSubmit}>
      <label htmlFor="" className={css.formLabel}>
        Name
        <input
          type="text"
          name="clientName"
          className={css.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={clientName}
          onChange={handleChange}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="" className={css.formLabel}>
        Phone number
        <input
          type="tel"
          name="clientNumber"
          className={css.input}
          value={clientNumber}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.submit}>
        Add contact
      </button>
    </form>
  );
};
