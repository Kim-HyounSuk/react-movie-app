import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from '@/styles';
import { Layout } from '@/components';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
