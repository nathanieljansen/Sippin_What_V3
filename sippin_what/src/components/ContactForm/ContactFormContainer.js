import React, {
    Component
} from 'react';

import ContactForm from ".";
import axios from "axios";


class ContactFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            message: '',
            password: '',
            is21: false,
            shouldRenderContactForm: true,

        }
    }

handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, () => console.log(this.state));
}

handleFormSubmit = event => {
    event.preventDefault();

    const {
        name,
        email,
        message
        } = this.state;

        const user = {
            name: name,
            email: email,
            message: message
        };


        console.log(name, email, message + " was submitted ")
        console.log(message, email, name);
        axios.post('https://jsonplaceholder.typicode.com/users', {
                user
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

    }

    render() {
        const {
            shouldRenderContactForm,
            
        } = this.state;

        return ( 
            <div className="ContactFormComponent" > 

            {shouldRenderContactForm && //passing these below/can change to DynamicForm
            <ContactForm
                inputs = {this.contactInputs}
                handleFormSubmit = {this.handleFormSubmit} //axios post
                handleInputChange = {this.handleInputChange}
                />
            }
            </div>
        );
    }
}

export default ContactFormContainer;