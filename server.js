const express = require('express');
const app = express();
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js');

app.use(
  '/graphql',
  expressGraphQL({
    schema: schema,
    graphiql: true
  })
);

app.listen(5000, () => {
  console.log('Server running on PORT 5000');
});
