import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Dashboard from './views/Dashboard';

import createGlobalStyle from './theme/global';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={createGlobalStyle}>
          <Dashboard />
          <StatusBar />
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
