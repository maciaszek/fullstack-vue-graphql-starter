const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'typeDefs.gql');
const typeDefs = fs.readFileSync(filePath, 'utf-8');
const resolvers = require('./resolvers.gql');

require("dotenv").config({ path: "variables.env" });

const User = require('./models/user');
const Post = require('./models/post');

mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose
  .connect(process.env.MONGO_URI, {useNewUrlParser: true})
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

const todos = [
  { task: "Wash car", completed: false },
  { task: "Clean room", completed: true }
];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    User,
    Post
  }
});

server.listen().then(({ url }) => {
  console.log(`server listeing on ${url}`);
});
