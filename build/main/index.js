"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTypeDefs = exports.makeLoadGQL = void 0;
const graphql_file_loader_1 = require("@graphql-tools/graphql-file-loader");
const load_1 = require("@graphql-tools/load");
const path_1 = require("path");
function makeLoadGQL(dirname) {
    return function loadGQL(relativeFilePath) {
        return loadTypeDefs((0, path_1.join)(dirname, relativeFilePath));
    };
}
exports.makeLoadGQL = makeLoadGQL;
function loadTypeDefs(filePath) {
    const list = (0, load_1.loadTypedefsSync)(filePath, {
        loaders: [new graphql_file_loader_1.GraphQLFileLoader()],
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
exports.loadTypeDefs = loadTypeDefs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNEVBQXVFO0FBQ3ZFLDhDQUF1RDtBQUN2RCwrQkFBNEI7QUFFNUIsU0FBZ0IsV0FBVyxDQUFDLE9BQWU7SUFDekMsT0FBTyxTQUFTLE9BQU8sQ0FBQyxnQkFBd0I7UUFDOUMsT0FBTyxZQUFZLENBQUMsSUFBQSxXQUFJLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUM7QUFDSixDQUFDO0FBSkQsa0NBSUM7QUFFRCxTQUFnQixZQUFZLENBQUMsUUFBZ0I7SUFDM0MsTUFBTSxJQUFJLEdBQUcsSUFBQSx1QkFBZ0IsRUFBQyxRQUFRLEVBQUU7UUFDdEMsT0FBTyxFQUFFLENBQUMsSUFBSSx1Q0FBaUIsRUFBRSxDQUFDO0tBQ25DLENBQUMsQ0FBQztJQUNILElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyx5Q0FBeUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMzRjtJQUVELE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFFN0IsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMseURBQXlELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDM0c7SUFFRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFmRCxvQ0FlQyJ9