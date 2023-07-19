import { Component } from "react";

export class Form extends Component {
    state = {
        name: '',
        number: '',
    }  
    
    onSubmitAddContact = (event) => {
        event.preventDefault();
        // console.log(this.state);
        // const form = event.currentTarget;
        this.props.onSubmit(this.state)
        this.reset();
    }

    onChangeInput = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    }

    reset = () =>
        this.setState({
            name: '',
            number: '',
        })

    render() {
        const { name, number } = this.state;

        return (
            <form onSubmit={this.onSubmitAddContact}>
                <label htmlFor="">
                    Name
                    <input
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.onChangeInput}
                    />
                </label>
                <label htmlFor="">
                    Phone number
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.onChangeInput}
                    />
                </label>
                <button type="submit">
                    Add contact
                </button>
            </form>
        
        );
    }
}