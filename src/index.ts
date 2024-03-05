import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { Context, createContext } from "./context";

const typeDefs = `#graphql
  type User {
    id: ID
    name: String
    email: String
    password: String
  }

  type Book {
    id: ID
    title: String
    author: String
  }

  type Query {
    users: [User]
    books: [Book]
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Mutation {
    signup(email: String!, password: String!, name: String!): AuthPayload    login(email: String!, password: String!): AuthPayload 
  }
`;

const resolvers = {
  Query: {
    users: async (_parent: any, _args: any, context: Context) => {
      const users = await context.prisma.user.findMany();
      return users;
    },
    books: async (_parent: any, _args: any, context: Context) => {
      const books = await context.prisma.book.findMany();
      return books;
    },
  },

  Mutation: {
    signup: async (_parent: any, args: SignUpArgs, context: any) => {
      const { name, email, password } = args;
      // Your signup logic here
    },
    login: async (_parent: any, args: LoginArgs, context: any) => {
      const { email, password } = args;
      // Your login logic here
    },
  },
};

interface SignUpArgs {
  name: string;
  email: string;
  password: string;
}

interface LoginArgs {
  email: string;
  password: string;
}

const start = async () => {
  const server = new ApolloServer<Context>({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    context: createContext,
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at: ${url}`);
};

start();
