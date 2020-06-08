const Koa = require("koa");
const app = new Koa();
const apolloServer = require("./src/graphql/index.js");

app.use(require("./src/middlewares/auth.js"));
apolloServer.applyMiddleware({ app });

app.listen({ port: 8888 }, () => console.log(`🚀 Server ready at http://localhost:8888/graphql`));
