const resolvers = {
  Query: {
    hello: (parent, args, context, info) => "world"
  }
};

module.exports = resolvers;
