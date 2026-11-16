// src/index.ts
import { join } from "node:path";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadTypedefsSync } from "@graphql-tools/load";
function makeLoadGQL(dirname) {
  return function loadGQL(relativeFilePath) {
    return loadTypeDefs(join(dirname, relativeFilePath));
  };
}
function loadTypeDefs(filePath) {
  const list = loadTypedefsSync(filePath, {
    loaders: [new GraphQLFileLoader()]
  });
  if (list.length > 1) {
    throw new Error(`multiple sources detected on filePath ${JSON.stringify(list, null, 2)}`);
  }
  const doc = list[0].document;
  if (!doc) {
    throw new Error(
      `no document detected in the source loaded on filePath ${JSON.stringify(list, null, 2)}`
    );
  }
  return doc;
}
export {
  loadTypeDefs,
  makeLoadGQL
};
//# sourceMappingURL=index.mjs.map