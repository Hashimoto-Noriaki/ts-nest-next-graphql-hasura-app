import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import client from '../apolloClient';
import Layout from '../components/Layout';
import { AppProvider } from '../contexts/AppContext';
import GlobalStyle from '@/styles/GlobalStyle';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Layout>
        <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </ApolloProvider>
  );
};

export default MyApp;
