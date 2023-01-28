import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Dashboard from './views/Dashboard';

import { GlobalStyle, theme } from './theme/global';
import Credits from './component/Credits/Credits';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <StatusBar />
          <Dashboard />
          <Credits />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
