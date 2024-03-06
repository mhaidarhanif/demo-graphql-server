import { objectType, extendType } from "nexus";
import { Context } from "../context";

export const Book = objectType({
  name: "Book",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("author");
  },
});

export const BookQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("books", {
      type: "Book",
      resolve(_parent, _args, context: Context) {
        return context.prisma.book.findMany();
      },
    });
  },
});
