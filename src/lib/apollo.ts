import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ond1s90m8i01xldq5cb6ll/master',
  cache: new InMemoryCache()
})