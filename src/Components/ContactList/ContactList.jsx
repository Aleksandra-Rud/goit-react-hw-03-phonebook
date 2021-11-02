import React from 'react';
import s from './ContactList.module.css';
import PropTypes from 'prop-types';

function ContactList({ contacts, deleteContact}) {
    return (
        <ul className={s.contactLists}>
        {contacts.map(({ name, number, id }) => (
            <li key={id} className={s.contactItem}>
                <p className={s.contactName}>
                    {name}: <span className={s.contactNumber}>{number}</span>
                </p>
                <button type="button" onClick={() => deleteContact(id)} className={s.btnDelete}>
                    Delete
                </button>
            </li>
            ))}
        </ul>
  );
}

ContactList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
