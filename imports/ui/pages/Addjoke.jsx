import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form      from 'react-bootstrap/Form';
import Button    from 'react-bootstrap/Button';

class Addjoke extends Component {
    state = {
        joke: "",
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
        if (this.state.joke === "") {
            toast.error("Ecrivez une super blague");
            return;
        }

    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control
                        type="text"
                        name="blague"
                        onChange={this.handleChange}
                        value={this.state.joke}
                        placeholder="Ecrivez une super blague"
                    />
                    <Button variant="primary" type="submit">Envoyer</Button>
                </Form>
            </Container>
        );
    };
};

export default Addjoke;