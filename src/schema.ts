import { makeSchema } from "nexus";
import path from "path";
import { fileURLToPath } from "url";

import * as types from "./models";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const schema = makeSchema({
  types,
  outputs: {
    typegen: path.join(__dirname, "..", "nexus-typegen.ts"),
    schema: path.join(__dirname, "..", "schema.graphql"),
  },
  contextType: {
    module: path.join(__dirname, "./context.ts"),
    export: "Context",
  },
});
