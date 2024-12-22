import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import { AppProps } from 'next/app';

// Apollo Clientの設定
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
