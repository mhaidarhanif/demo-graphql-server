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

### 1. Setup Environment Variables

Copy the example `.env` file:

```sh
cp .env.example .env
```

Make sure not to overwrite any existing `.env` file you have. Then, set the required values:

```sh
APP_SECRET="your_secret_value"
DATABASE_URL="mongodb://user:password@localhost:27017/database"
```

- `APP_SECRET`: This is used for encoding the JWT.
- `DATABASE_URL`: This is the connection URL for your MongoDB database. If you're using MongoDB Atlas, you can use the URI provided as well.

### 2. Install Dependencies

It's recommended to use `pnpm` (Fast, disk space efficient package manager) to replace the regular `npm` to get these benefits:

- Much faster performance.
- Lighter `node_modules` in the workspace.
- Simpler command to run, such `pnpm <command>` compared to `npm run <command>`.

Install `pnpm` with `npm`:

```sh
npm install -g pnpm
```

Then, install the project dependencies:

```sh
pnpm install
```

### 3. Run the Server

Once the dependencies are installed and environment variables are set up, you can start the GraphQL server by running:

```sh
pnpm dev
```

This command will start the server in development mode, allowing you to make changes and see the results immediately.

```sh
🚀 Server ready at: http://localhost:4000
```

Then, acess the host and port <http://localhost:4000> in the browser or any HTTP client.

### 4. Access the GraphQL Playground

Once the server is running, you can access the GraphQL Playground by navigating to <http://localhost:4000> in your web browser. This interactive tool allows you to explore the GraphQL API, execute queries, and see the results in real-time.

That's it! You now have the GraphQL server up and running locally, ready for development and testing.

### 5. Try to query data

```graphql
query AllUsers {
  users {
    id
    name
    email
  }
}
```

### 6. Try to sign up a new user

```graphql
mutation SignUp($name: String!, $email: String!, $password: String!) {
  signup(name: $name, email: $email, password: $password) {
    token
    user {
      id
      name
      email
    }
  }
}
```

The variables:

```json
{
  "name": "Example",
  "email": "example@example.com",
  "password": "example"
}
```

### 7. Try to login with the user

```graphql
mutation Login($loginEmail2: String!, $loginPassword2: String!) {
  login(email: $loginEmail2, password: $loginPassword2) {
    token
    user {
      id
      name
      email
    }
  }
}
```

The variables:

```json
{
  "email": "example@example.com",
  "password": "example"
}
```

### 8. Done

Congratulations! We're done.
