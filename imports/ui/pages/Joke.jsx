import { Meteor } from 'meteor/meteor';

import React, { Component } from 'react';

import Button    from 'react-bootstrap/Button';

import { AiOutlineLogout } from 'react-icons/ai';

import Createjoke from '/imports/ui/components/Createjoke';
import Viewjoke  from '/imports/ui/components/Viewjoke';

import './Joke.css';

class Joke extends Component {
    handleClick = () => {
        Meteor.logout();
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1 className="header">
                    J'aime l'humour
                    <Button className="logout" onClick={this.handleClick}>
                        <AiOutlineLogout />
                    </Button>
                </h1>
                <Viewjoke />
                <Createjoke />
            </div>
        );
    };
};

export default Joke;