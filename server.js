const { ApolloServer, gql } = require("apollo-server");
const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

const todos = [
  { task: "Wash car", completed: false },
  { task: "Clean room", completed: true }
];

const typeDefs = gql`
  type Query {
    getTodos: [Todo]
  }

  type Todo {
    task: String
    completed: Boolean
  }
`;

const server = new ApolloServer({
  typeDefs
});

server.listen().then(({ url }) => {
  console.log(`server listeing on ${url}`);
});
