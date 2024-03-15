import { objectType, extendType, nonNull, stringArg } from "nexus";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { Context } from "../context";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("email");
    t.string("password");
  },
});

export const AuthPayload = objectType({
  name: "AuthPayload",
  definition(t) {
    t.string("token");
    t.field("user", { type: "User" });
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("users", {
      type: "User",
      resolve(_parent, _args, context: Context) {
        console.log({ userId: context.userId });

        return context.prisma.user.findMany();
      },
    });
  },
});

export const UserMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("signup", {
      type: "AuthPayload",
      args: {
        name: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(_root, args, context: Context) {
        const { email, name } = args;

        const existingUser = await context.prisma.user.findUnique({
          where: { email },
        });

        if (existingUser) {
          throw new Error(
            "Email is already in use. Please use a different email address."
          );
        }

        const password = await bcrypt.hash(args.password, 10);

        const user = await context.prisma.user.create({
          data: { email, name, password },
        });

        const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

        return { token, user };
      },
    }),
      t.nonNull.field("login", {
        type: "AuthPayload",
        args: {
          email: nonNull(stringArg()),
          password: nonNull(stringArg()),
        },
        async resolve(_root, args, context: Context) {
          const user = await context.prisma.user.findUnique({
            where: { email: args.email },
          });
          if (!user) throw new Error("No such user found");

          const valid = await bcrypt.compare(args.password, user.password);
          if (!valid) throw new Error("Invalid password");

          const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

          return { token, user };
        },
      });
  },
});
