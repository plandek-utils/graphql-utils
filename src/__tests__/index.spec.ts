import { print } from "graphql";
import { join } from "path";
import { loadTypeDefs, makeLoadGQL } from "..";

const expectedTest1 = `
type Query {
  hello: String
}`;

describe("loadTypeDefs", () => {
  it("should load type definitions from a .graphql file", () => {
    const typeDefs = loadTypeDefs(join(__dirname, "./test-1.graphql"));
    expect(typeDefs).toBeDefined();
    const actual = print(typeDefs);
    expect(actual.trim()).toEqual(expectedTest1.trim());
  });

  it("throws if there missing file", () => {
    expect(() => loadTypeDefs(join(__dirname, "./missing.graphql"))).toThrowError();
  });

  it("throws if there is no schema in the file", () => {
    expect(() => loadTypeDefs(join(__dirname, "./test-empty.graphql"))).toThrowError();
  });
});

describe("makeLoadGQL", () => {
  it("prepares a function to load files directly from the given directory", () => {
    const loadGQL = makeLoadGQL(__dirname);
    const typeDefs = loadGQL("./test-1.graphql");
    expect(typeDefs).toBeDefined();
    const actual = print(typeDefs);
    expect(actual.trim()).toEqual(expectedTest1.trim());
  });
});
