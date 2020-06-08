const Koa = require("koa");
const { ApolloServer } = require("apollo-server-koa");
const typeDefs = require("./types");
const resolvers = require("./resolvers");
const db = require("./data");

const PORT = 4001;
const app = new Koa();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return { db };
  },
  tracing: false,
});

server.applyMiddleware({ app });
app.listen({ port: PORT }, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
