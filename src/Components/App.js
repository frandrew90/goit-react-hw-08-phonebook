import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { getAllContacts } from '../Redux/phonebook/phonebook-operations';
import { getContacts } from '../Redux/phonebook/phonebook-selectors';
import ContactList from './contactList/ContactList';
import ContactForm from './contatctForm/ContactForm';
import Filter from './filter/Filter';
import s from '../Components/App.module.css';

const App = () => {
  const dispatch = useDispatch(getContacts);

  useEffect(() => {
    dispatch(getAllContacts());

    // eslint-disable-next-line
  }, [getAllContacts]);

  return (
    <>
      <h1 className={s.title}>Phonebook</h1>

      <ContactForm />

      <h2 className={s.title}>Contacts</h2>

      <Filter />

      <ContactList />
    </>
  );
};

export default App;

// App.propTypes = {
//   getAllContacts: PropTypes.func.isRequired,
// };
