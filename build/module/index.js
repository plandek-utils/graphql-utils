import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadTypedefsSync } from "@graphql-tools/load";
import { join } from "path";
export function makeLoadGQL(dirname) {
    return function loadGQL(relativeFilePath) {
        return loadTypeDefs(join(dirname, relativeFilePath));
    };
}
export function loadTypeDefs(filePath) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU1QixNQUFNLFVBQVUsV0FBVyxDQUFDLE9BQWU7SUFDekMsT0FBTyxTQUFTLE9BQU8sQ0FBQyxnQkFBd0I7UUFDOUMsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxZQUFZLENBQUMsUUFBZ0I7SUFDM0MsTUFBTSxJQUFJLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxFQUFFO1FBQ3RDLE9BQU8sRUFBRSxDQUFDLElBQUksaUJBQWlCLEVBQUUsQ0FBQztLQUNuQyxDQUFDLENBQUM7SUFDSCxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUMseUNBQXlDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDM0Y7SUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBRTdCLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixNQUFNLElBQUksS0FBSyxDQUFDLHlEQUF5RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzNHO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIn0=