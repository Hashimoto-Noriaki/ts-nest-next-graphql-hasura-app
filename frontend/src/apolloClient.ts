import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3000/api/graphql', // Next.jsのAPIルート
  cache: new InMemoryCache(),
  credentials: 'include' // 認証情報が必要なら含める
});

export default client;
