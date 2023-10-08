import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from '@/styles';
import { Footer, Header, Layout } from '@/components';

const App = () => {
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
