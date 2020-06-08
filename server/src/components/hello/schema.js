const { gql } = require("apollo-server-koa");

const schema = gql`
  extend type Query {
    hello: String
  }
`;

module.exports = { schema };
