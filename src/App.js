import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./Components/ContactForm/Form";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import "./App.css";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };
  handleSubmitForm = ({ name, number }) => {
    const addNewContact = {
      id: uuidv4(),
      name,
      number,
    };

    this.state.contacts.find(
      (contact) =>
        contact.name.toLowerCase() === addNewContact.name.toLowerCase()
    )
      ? alert(`${name} is already in contacts`)
      : this.setState((prevState) => ({
          contacts: [addNewContact, ...prevState.contacts],
        }));
  };

  componentDidUpdate = (prevProps, prevState) => {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  };

  componentDidMount = () => {
    const newContacts = JSON.parse(localStorage.getItem("contacts"));
    this.setState({
      contacts: newContacts ?? initialState,
    });
  };

  onDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleFilteredInput = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };

  onFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().trim().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <div className="App">
        <ContactForm addNewContact={this.handleSubmitForm} />
        <h2>Contacts</h2>
        <Filter value={filter} filteredValue={this.handleFilteredInput} />
        <ContactList
          title="Contacts"
          deleteContact={this.onDeleteContact}
          contacts={this.onFilteredContacts()}
        ></ContactList>
      </div>
    );
  }
}

export default App;
