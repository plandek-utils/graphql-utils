import * as graphql from 'graphql';

declare function makeLoadGQL(dirname: string): (relativeFilePath: string) => graphql.DocumentNode;
declare function loadTypeDefs(filePath: string): graphql.DocumentNode;

export { loadTypeDefs, makeLoadGQL };
