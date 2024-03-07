# GraphQL Server Example

Just a simple GraphQL server example using this tech stack.

## Tech Stack

### Backend

- Core: Node.js/TS
- GraphQL Schema: Apollo GraphQL Server, Nexus Schema
- ORM: Prisma
- DBMS: MongoDB

Links:

- Node.js: <https://nodejs.org>
  - JavaScript runtime
- TypeScript: <https://typescriptlang.org>
  - Type-safe JavaScript
- GraphQL: <https://graphql.org>
  - Query language for APIs, to replace REST API or traditional HTTP API
- Apollo GraphQL Server: <https://apollographql.com/docs/apollo-server>
  - GraphQL server that's compatible with any GraphQL client
- GraphQL Nexus: <https://nexusjs.org>
  - Declarative, Code-First GraphQL Schemas for JavaScript/TypeScript
- Prisma: <https://prisma.io>
  - Node.js and TypeScript ORM with a readable data model, automated migrations, type-safety, and auto-completion
- MongoDB: <https://mongodb.com>
  - Document-oriented NoSQL database
- dotenv: <https://www.npmjs.com/package/dotenv>
  - Loads environment variables from a `.env` file into `process.env`
- bcryptjs: <https://www.npmjs.com/package/bcryptjs>
  - Optimized bcrypt in JavaScript
- jsonwebtoken: <https://www.npmjs.com/package/jsonwebtoken>
  - An implementation of JSON Web Tokens (JWT) in JavaScript
- tsx: <https://github.com/privatenumber/tsx>
  - TypeScript Execute: Node.js enhanced to run TypeScript & ESM. Faster alternative to replace `ts-node` or `ts-node-dev`.

### Frontend

Just the expectation.

- Core: HTML/CSS/JS/TS
- UI Library: React v18
- Routing Library: React Router v6
- Apollo Client for GraphQL in the client-side React

## Development

### Setup environment variables

Copy example `.env` file:

```sh
cp .env.example .env
```

Just be careful not to overwrite the existing `.env` that you have.

Set the required values:

```sh
APP_SECRET="your_secret_value"
DATABASE_URL="mongodb://user:password@localhost:27017/database
```

- `APP_SECRET`: for encoding the JWT.
- `DATABASE_URL`: for connecting to the MongoDB database. Can be using the URI from MongoDB Atlas.
