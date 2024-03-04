import express, { Application, NextFunction, Request, Response } from 'express';
import schema, { schemaRoot } from './graphqlSchema';
import dotenv from 'dotenv';
import { createHandler } from 'graphql-http';

//For env File
dotenv.config();
const port = process.env.PORT || 8000;

const app: Application = express();

// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
app.all('/graphql', createHandler({ schema: schema, rootValue: schemaRoot }));

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
