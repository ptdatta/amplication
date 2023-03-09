import { GraphQLModule } from "@nestjs/graphql";
import { TestingModule } from "@nestjs/testing";
import { ApolloServer } from "apollo-server-express";

/**
 *
 * @param testingModule the Nest.js testing module
 * @returns Apollo Server's test client
 */
export function createApolloServerTestClient(
  testingModule: TestingModule
): ApolloServer {
  // GraphQLModule doesn't expose the apolloServer property
  const graphqlModule = testingModule.get(GraphQLModule) as any;
  return graphqlModule.apolloServer;
}
