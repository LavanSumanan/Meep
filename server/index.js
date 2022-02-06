const express = require("express");
const router = require("./routes");

const app = express();

app.use(express.json());
app.use(router);

const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    email: String
    password: String
    firstName: String
    lastName: String
    age: Int
    communities: [Community]
    dms: [DM]
  }

  type Community {
    id: ID!
    name: String
    memberCount: Int
    members: [User]
    threads: [Thread]
  }

  type Thread {
    id: ID!
    author: User
    title: String
    content: String
    timestamp: String
  }

  type DM {
    id: ID!
    friend: User
    messages: [Message]
  }

  type Message {
    id: ID!
    author: User
    content: String
    timestamp: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    users: [User]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    users: () => users,
  },
};

const Bob = {
  id: "1",
  firstName: "Bob",
  lastName: "Joe",
  age: 18,
};

const Jane = {
  id: "2",
  firstName: "Jane",
  lastName: "Smith",
  age: 23,
};

const users = [
  {
    ...Bob,
    friends: Jane,
  },
  {
    ...Jane,
    friends: Bob,
  },
];

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
