const apollo = require('apollo-server-hapi');

const schema = require('./schema');

const graphiql = {
  plugin: apollo.graphiqlHapi,
  options: {
    path: '/graphiql',
    graphiqlOptions: {
      endpointURL: '/graphql'
    },
    route: {
      cors: true
    }
  }
};

const graphql = {
  plugin: apollo.graphqlHapi,
  options: {
    path: '/graphql',
    graphqlOptions: {
      schema
    },
    route: {
      cors: true
    }
  }
};

module.exports = { graphiql, graphql };
