import { Component } from "react";
import { nanoid } from 'nanoid';
import css from "./myPhone.module.css";
import Button from "shared/components/Button/Button";

class MyPhone extends Component {
    state = {
        contacts: [
                {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
                {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
                {id: nanoid(), name: 'Eden Clements', number: '645-17-79'},
                
        ],
        filter: "",
        name: "",
        number: "",
    }

addContact = (e) => {
    e.preventDefault();
    this.setState(prevState => {
        const { name, number, contacts } = prevState;
        if (this.isDublicate(name, number)) {
            return alert(`${name} is already ixist`)
        }
        const newContact = {
            id: nanoid(),
            name,
            number,
        }
        return {contacts: [newContact, ...contacts], name:"", number:""}
    })
}

removeContact(id) {
    this.setState(({contacts}) => {
        const newContacts = contacts.filter(contact => contact.id !== id);
        return {contacts: newContacts}
    })
}
    
    
handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({
        [name]: value,
    })
}

isDublicate(name, number) {
    const normName = name.toLowerCase();
    const normNumber = number.toLowerCase();
    const { contacts } = this.state;
    const persone = contacts.find(({ name, number }) => {
        return (name.toLowerCase() === normName && number.toLowerCase() === normNumber)
    })
    return Boolean(persone)
}   
    
render() {
        const { addContact, handleChange } = this;
        const { contacts, name, number } = this.state;
        const phone = contacts.map(({ id, name, number }) =>
            <li key={id} className={css.textItem}>
                {name}       {number}
                <Button onClick={() => this.removeContact(id) }type="button">delete</Button>
            </li>)
        return (
            <div>
                <h2 className={css.titlePage}>Contacts of worcers of caffe Expresso</h2>
                <div className={css.wrapper}>
                    <div className={css.block}>
                        <h3 className={css.title}>PhoneBook</h3>
                        <form action="" onSubmit={addContact}>
                            <div className={css.formInput}>
                                <label className={css.labelText}>Name:</label>
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="name"
                                    value={name}
                                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                    required
                                />
                            </div>
                                <div className={css.formInput}>
                                <label className={css.labelText}>Number:</label>
                                <input
                                    onChange={handleChange}
                                    type="tel"
                                    name="number"
                                    value={number}
                                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                                    required
                                />
                            </div>
                                <Button type="submit">Add contact</Button>
                        </form>
                    </div>
                    <div className={css.block}>
                        <h3 className={css.title}>Contacts</h3>
                      
                            <div className={css.formInput}>
                                <label className={css.labelText}>Find contacts by name</label>
                                <input
                                    type="text"
                                    name="filter"
                            />
                            <ul>
                                {phone}
                            </ul>
                            </div>
                                

                    
                    </div>
                </div>
            </div>
        )
    }
}

export default MyPhone; 