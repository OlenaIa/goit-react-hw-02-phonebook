import { Component } from "react";
import { FormStyle } from "./Form.styled";
import { InputStyle, LabelStyle, ButtonStyle } from "components/App.styled";
import PropTypes from 'prop-types'

export class Form extends Component {
    state = {
        name: '',
        number: '',
    }  

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }
    
    onSubmitAddContact = (event) => {
        event.preventDefault();
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
            <FormStyle onSubmit={this.onSubmitAddContact}>
                <LabelStyle>
                    Name
                    <InputStyle
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        onChange={this.onChangeInput}
                    />
                </LabelStyle>
                <LabelStyle>
                    Phone number
                    <InputStyle
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        onChange={this.onChangeInput}
                    />
                </LabelStyle>
                <ButtonStyle type="submit">
                    Add contact
                </ButtonStyle>
            </FormStyle>
        );
    }
}