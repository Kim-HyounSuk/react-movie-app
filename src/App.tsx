import { ThemeProvider } from 'styled-components';
import { Theme, GlobalStyle } from '@/styles';
import { Layout } from '@/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
