import { Mongo } from "meteor/mongo";

const Jokes = new Mongo.Collection("jokes");

export default Jokes;