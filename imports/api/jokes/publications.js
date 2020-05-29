import { Meteor } from 'meteor/meteor';
import Jokes from '.';

Meteor.publish('jokes.all', function () {
    if (!this.userId) {
        this.ready();
    } else {
        return Jokes.find({}, {
            limit: 10000,
            sort: {
                createdAt: -1,
            },
        });
    }
});