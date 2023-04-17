import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import Footer from './Footer/Footer';
import { Suspense } from 'react';
import { Container } from './Container/Container.styled';
import { GlobalStyles } from './GlobalStyles/GlobalStyles.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
      <GlobalStyles />
    </Container>
  );
};
