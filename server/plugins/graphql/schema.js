const graphql = require('graphql');

const CoinPriceType = require('./types/CoinPriceType');
const UserInitialInfoType = require('./types/UserInitialInfoType');

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
    userInitialInfo: {
      type: UserInitialInfoType,
      args: { email: { type: GraphQLString } },

      resolve(parent, args) {
        const intialValues = {
          moedas: {
            real: {
              saldo: 100000.00
            },
            bitcoin: {
              saldo: 0
            },
            brita: {
              saldo: 0
            }
          }
        };

        intialValues.bitcoinHash = walletResolver.getCoinHash('btc', args.email);
        intialValues.britaHash = walletResolver.getCoinHash('bri', args.email);

        return intialValues;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: CryptocurrencyQuery
});
