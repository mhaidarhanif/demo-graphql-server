import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

export const APP_SECRET = process.env.APP_SECRET;

export const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  userId?: number;
}

export interface AuthTokenPayload {
  userId: number;
}

export function decodeToken(authorizationString: string): AuthTokenPayload {
  const token = authorizationString.replace("Bearer ", "");

  if (!token) {
    throw new Error("No token found");
  }

  return jwt.verify(token, APP_SECRET) as AuthTokenPayload;
}

export const createContext = async ({ req }) => {
  const verifiedToken =
    req && req.headers.authorization
      ? decodeToken(req.headers.authorization)
      : null;

  return {
    prisma: prisma,
    userId: verifiedToken?.userId,
  };
};
