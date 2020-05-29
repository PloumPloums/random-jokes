import { Meteor } from 'meteor/meteor';
import Jokes from '.';

Meteor.methods({
    'jokes.create': function({ content }) {
        if (!this.userId) {
            throw new Meteor.Error('403', 'Vous devez être connectés');
        }

        Jokes.insert({
            userId: this.userId,
            content,
            createdAt: new Date(),
        });

        console.log("blague enregistrée");
    },
});