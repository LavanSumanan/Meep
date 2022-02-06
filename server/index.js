const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    age: Int
    friends: [User]
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
    friends: Bob,
  },
  {
    ...Jane,
    friends: Jane,
  },
];

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
