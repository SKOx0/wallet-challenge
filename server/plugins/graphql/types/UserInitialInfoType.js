const graphql = require('graphql');

const {
  GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLNonNull
} = graphql;

const UserInitialInfoType = new GraphQLObjectType({
  name: 'UserInitialInfoType',
  fields: () => ({
    bitcoinHash: { type: new GraphQLNonNull(GraphQLString) },
    britaHash: { type: new GraphQLNonNull(GraphQLString) },
    saldo: { type: new GraphQLNonNull(GraphQLFloat) }
  })
});

module.exports = UserInitialInfoType;
