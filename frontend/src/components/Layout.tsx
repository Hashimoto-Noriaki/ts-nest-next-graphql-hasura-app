import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Header from './common/Header';
import Footer from './common/Footer';

type LayoutProps = {
  children: ReactNode;
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  margin: 0;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
