const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;

const CoinHashType = new GraphQLObjectType({
  name: 'CoinHashType',
  fields: () => ({
    hash: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = CoinHashType;
