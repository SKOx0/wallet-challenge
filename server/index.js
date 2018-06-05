const hapi = require('hapi');
const graphqlPlugins = require('./plugins/graphql');

const server = hapi.server({
  port: 4000,
  host: 'localhost'
});

const init = async () => {
  await server.register([graphqlPlugins.graphql, graphqlPlugins.graphiql]);

  await server.start();

  process.stdout.write(`Server running at: ${server.info.uri}`);
};

init();
