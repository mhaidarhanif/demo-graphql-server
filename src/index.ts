import "dotenv/config";

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { Context, createContext } from "./context";
import { schema } from "./schema";

// const typeDefs = `#graphql
//   type User {
//     id: ID
//     name: String
//     email: String
//     password: String
//   }

//   type Book {
//     id: ID
//     title: String
//     author: String
//   }

//   type Query {
//     users: [User]
//     books: [Book]
//   }

//   type AuthPayload {
//     token: String!
//     user: User!
//   }

//   type Mutation {
//     signup(email: String!, password: String!, name: String!): AuthPayload    login(email: String!, password: String!): AuthPayload
//   }
// `;

// const resolvers = {
//   Query: {
//     users: async (_parent: any, _args: any, context: Context) => {
//       const users = await context.prisma.user.findMany();
//       return users;
//     },
//     books: async (_parent: any, _args: any, context: Context) => {
//       const books = await context.prisma.book.findMany();
//       return books;
//     },
//   },

//   Mutation: {
//     signup: async (_parent: any, args: SignUpArgs, context: any) => {
//       const { email, name } = args;

//       const password = await bcrypt.hash(args.password, 10);

//       const user = await context.prisma.user.create({
//         data: { email, name, password },
//       });

//       const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

//       return {
//         token,
//         user,
//       };
//     },
//     login: async (_parent: any, args: LoginArgs, context: any) => {
//       const user = await context.prisma.user.findUnique({
//         where: { email: args.email },
//       });
//       if (!user) throw new Error("No such user found");

//       const valid = await bcrypt.compare(args.password, user.password);
//       if (!valid) throw new Error("Invalid password");

//       const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

//       return {
//         token,
//         user,
//       };
//     },
//   },
// };

const start = async () => {
  const server = new ApolloServer<Context>({ schema });

  const { url } = await startStandaloneServer(server, {
    context: createContext,
    listen: { port: 4000 },
  });

  console.log(`🚀 Server ready at: ${url}`);
};

start();
