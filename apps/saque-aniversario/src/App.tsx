import { ThemeProvider } from '@calculadoras/ui/theme';
import { AppRoutes } from './routes';

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
