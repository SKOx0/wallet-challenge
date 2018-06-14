const graphql = require('graphql');

const {
  GraphQLObjectType, GraphQLString, GraphQLNonNull
} = graphql;

const MoedaType = require('./MoedaType');

const UserInitialInfoType = new GraphQLObjectType({
  name: 'UserInitialInfoType',
  fields: () => ({
    bitcoinHash: { type: new GraphQLNonNull(GraphQLString) },
    britaHash: { type: new GraphQLNonNull(GraphQLString) },
    moedas: { type: MoedaType }
  })
});

module.exports = UserInitialInfoType;
