import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadTypedefsSync } from "@graphql-tools/load";
import { join } from "path";

export function makeLoadGQL(dirname: string) {
  return function loadGQL(relativeFilePath: string) {
    return loadTypeDefs(join(dirname, relativeFilePath));
  };
}

export function loadTypeDefs(filePath: string) {
  const list = loadTypedefsSync(filePath, {
    loaders: [new GraphQLFileLoader()],
  });
  if (list.length > 1) {
    throw new Error(`multiple sources detected on filePath ${JSON.stringify(list, null, 2)}`);
  }

  const doc = list[0].document;

  if (!doc) {
    throw new Error(`no document detected in the source loaded on filePath ${JSON.stringify(list, null, 2)}`);
  }

  return doc;
}
