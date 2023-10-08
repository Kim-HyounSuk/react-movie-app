import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from '@/styles';
import { Footer, Header, Layout } from '@/components';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('popular');
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <Layout />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
