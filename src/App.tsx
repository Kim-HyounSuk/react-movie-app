import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from '@/styles';
import { Footer, Header } from '@/components';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
