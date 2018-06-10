const graphql = require('graphql');

const CoinPriceType = require('./types/CoinPriceType');
const CoinHashType = require('./types/CoinHashType');

const bitcoinResolver = require('./resolvers/bitcoin');
const britaResolver = require('./resolvers/brita');
const walletResolver = require('./resolvers/wallet');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
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
    },
    wallet: {
      type: CoinHashType,
      args: { coin: { type: GraphQLString }, email: { type: GraphQLString } },

      resolve(parent, args) {
        const value = walletResolver.getCoinHash(args.coin, args.email);
        const hash = { hash: value };
        return hash;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: CryptocurrencyQuery
});
