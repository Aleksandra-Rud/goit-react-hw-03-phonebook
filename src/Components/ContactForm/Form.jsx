import React, { Component } from "react";
import s from "./Form.module.css"
import { v4 as uuidv4 } from 'uuid';


class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    // console.log(e.currentTarget.value);
    this.setState({[name]: value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewContact(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ id: "", name: "", number: "" });
  };
  
  render() {
    const nameId = uuidv4();
    const numberId = uuidv4();
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={nameId} className={s.formLbl}>
          {" "}
          Name
            <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                className={s.inputLbl}
            />
        </label>
        <br />    
        <label htmlFor={numberId} className={s.formLbl}>
          Number
            <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                className={s.inputLbl}
            />
        </label>
        <br />    
        <button type="submit" value="Отправить" className={s.btnInput}>Add Contact</button>
      </form>
    );
  }
}

// console.log(s.input);

export default ContactForm;