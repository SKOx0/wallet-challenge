const graphql = require('graphql');

const { GraphQLObjectType, GraphQLFloat, GraphQLNonNull } = graphql;

const CoinPriceType = new GraphQLObjectType({
  name: 'CoinPriceType',
  fields: () => ({
    buy: { type: new GraphQLNonNull(GraphQLFloat) },
    sell: { type: new GraphQLNonNull(GraphQLFloat) }
  })
});

module.exports = CoinPriceType;
