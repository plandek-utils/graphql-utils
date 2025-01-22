"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  loadTypeDefs: () => loadTypeDefs,
  makeLoadGQL: () => makeLoadGQL
});
module.exports = __toCommonJS(index_exports);
var import_node_path = require("path");
var import_graphql_file_loader = require("@graphql-tools/graphql-file-loader");
var import_load = require("@graphql-tools/load");
function makeLoadGQL(dirname) {
  return function loadGQL(relativeFilePath) {
    return loadTypeDefs((0, import_node_path.join)(dirname, relativeFilePath));
  };
}
function loadTypeDefs(filePath) {
  const list = (0, import_load.loadTypedefsSync)(filePath, {
    loaders: [new import_graphql_file_loader.GraphQLFileLoader()]
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  loadTypeDefs,
  makeLoadGQL
});
//# sourceMappingURL=index.cjs.map