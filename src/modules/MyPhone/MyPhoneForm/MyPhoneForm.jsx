import { Component } from "react";
import PropTypes from "prop-types";

import inititalState from "./initialState";
import Button from "shared/components/Button/Button";

import css from "./myPhoneForm.module.css";

class MyPhoneForm extends Component {
    state = { ...inititalState } 

handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const resultSubmit = onSubmit({ ...this.state });
        if(resultSubmit) {
            this.reset();
        }
}

reset() {
        this.setState({...inititalState})
}    
    
handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({
        [name]: value,
    })
    }
    
render() {
    const { handleChange, handleSubmit } = this;
    const { name, number } = this.state;
    return (
         <form action="" onSubmit={handleSubmit}>
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
        )
    }
}

export default MyPhoneForm;

MyPhoneForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}