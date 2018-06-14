const graphql = require('graphql');

const { GraphQLObjectType, GraphQLFloat, GraphQLNonNull } = graphql;

const RealType = new GraphQLObjectType({
  name: 'RealType',
  fields: () => ({
    saldo: { type: new GraphQLNonNull(GraphQLFloat) }
  })
});

const BitcoinType = new GraphQLObjectType({
  name: 'BitcoinType',
  fields: () => ({
    saldo: { type: new GraphQLNonNull(GraphQLFloat) }
  })
});

const BritaType = new GraphQLObjectType({
  name: 'BritaType',
  fields: () => ({
    saldo: { type: new GraphQLNonNull(GraphQLFloat) }
  })
});

const MoedaType = new GraphQLObjectType({
  name: 'MoedaType',
  fields: () => ({
    real: { type: RealType },
    bitcoin: { type: BitcoinType },
    brita: { type: BritaType }
  })
});

module.exports = MoedaType;
