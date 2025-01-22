"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const path_1 = require("path");
const vitest_1 = require("vitest");
const __1 = require("..");
const expectedTest1 = `
type Query {
  hello: String
}`;
(0, vitest_1.describe)("loadTypeDefs", () => {
    (0, vitest_1.it)("should load type definitions from a .graphql file", () => {
        const typeDefs = (0, __1.loadTypeDefs)((0, path_1.join)(__dirname, "./test-1.graphql"));
        (0, vitest_1.expect)(typeDefs).toBeDefined();
        const actual = (0, graphql_1.print)(typeDefs);
        (0, vitest_1.expect)(actual.trim()).toEqual(expectedTest1.trim());
    });
    (0, vitest_1.it)("throws if there missing file", () => {
        (0, vitest_1.expect)(() => (0, __1.loadTypeDefs)((0, path_1.join)(__dirname, "./missing.graphql"))).toThrowError();
    });
    (0, vitest_1.it)("throws if there is no schema in the file", () => {
        (0, vitest_1.expect)(() => (0, __1.loadTypeDefs)((0, path_1.join)(__dirname, "./test-empty.graphql"))).toThrowError();
    });
});
(0, vitest_1.describe)("makeLoadGQL", () => {
    (0, vitest_1.it)("prepares a function to load files directly from the given directory", () => {
        const loadGQL = (0, __1.makeLoadGQL)(__dirname);
        const typeDefs = loadGQL("./test-1.graphql");
        (0, vitest_1.expect)(typeDefs).toBeDefined();
        const actual = (0, graphql_1.print)(typeDefs);
        (0, vitest_1.expect)(actual.trim()).toEqual(expectedTest1.trim());
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9fX3Rlc3RzX18vaW5kZXguc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFnQztBQUNoQywrQkFBNEI7QUFDNUIsbUNBQThDO0FBQzlDLDBCQUErQztBQUUvQyxNQUFNLGFBQWEsR0FBRzs7O0VBR3BCLENBQUM7QUFFSCxJQUFBLGlCQUFRLEVBQUMsY0FBYyxFQUFFLEdBQUcsRUFBRTtJQUM1QixJQUFBLFdBQUUsRUFBQyxtREFBbUQsRUFBRSxHQUFHLEVBQUU7UUFDM0QsTUFBTSxRQUFRLEdBQUcsSUFBQSxnQkFBWSxFQUFDLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBQSxlQUFNLEVBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBQSxlQUFLLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0IsSUFBQSxlQUFNLEVBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0lBRUgsSUFBQSxXQUFFLEVBQUMsOEJBQThCLEVBQUUsR0FBRyxFQUFFO1FBQ3RDLElBQUEsZUFBTSxFQUFDLEdBQUcsRUFBRSxDQUFDLElBQUEsZ0JBQVksRUFBQyxJQUFBLFdBQUksRUFBQyxTQUFTLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDbEYsQ0FBQyxDQUFDLENBQUM7SUFFSCxJQUFBLFdBQUUsRUFBQywwQ0FBMEMsRUFBRSxHQUFHLEVBQUU7UUFDbEQsSUFBQSxlQUFNLEVBQUMsR0FBRyxFQUFFLENBQUMsSUFBQSxnQkFBWSxFQUFDLElBQUEsV0FBSSxFQUFDLFNBQVMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyRixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxpQkFBUSxFQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDM0IsSUFBQSxXQUFFLEVBQUMscUVBQXFFLEVBQUUsR0FBRyxFQUFFO1FBQzdFLE1BQU0sT0FBTyxHQUFHLElBQUEsZUFBVyxFQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzdDLElBQUEsZUFBTSxFQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLE1BQU0sTUFBTSxHQUFHLElBQUEsZUFBSyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLElBQUEsZUFBTSxFQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=