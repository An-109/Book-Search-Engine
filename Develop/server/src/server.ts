import express from 'express';
import db from './config/connection.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
// import { UserDocument } from './models/User.js';
// Import the ApolloServer class
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';

// Import the two parts of a GraphQL schema
import {typeDefs,resolvers} from './schemas/index.js'
import { authenticateToken} from './services/auth.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
 
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {

  await server.start();
  await db();

  const PORT = process.env.PORT || 3001;
  const app = express();
  console.log(app)
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use('/graphql', expressMiddleware(server as any,
    {
      context: authenticateToken as any
    }
  ));
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../client/dist')));  // Correct path
  
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, '../../client/dist/index.html'));  // Correct path
    });
  
    
  }
console.log("static"+path.join(__dirname, '../client/dist/index.html'));

  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
  });
};

// Call the async function to start the server
startApolloServer();
