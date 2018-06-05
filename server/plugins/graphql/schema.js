const graphql = require('graphql');

const CoinPriceType = require('./types/CoinPriceType');

const bitcoinResolver = require('./resolvers/bitcoin');
const britaResolver = require('./resolvers/brita');

const {
  GraphQLObjectType,
  GraphQLSchema
} = graphql;

const CryptocurrencyQuery = new GraphQLObjectType({
  name: 'Cryptocurrencies',
  description: 'Api para busca de informações de criptomoedas',
  fields: {
    bitcoin: {
      type: CoinPriceType,
      resolve() {
        return bitcoinResolver.getBitcoinPrice();
      }
    },
    brita: {
      type: CoinPriceType,
      resolve() {
        return britaResolver.getBritaPrice();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: CryptocurrencyQuery
});
