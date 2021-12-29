import { ThemeProvider } from 'styled-components';
import  { NewContextProvider } from './providers/NewContextProvider';
import Router from './routes';
import Theme from './styles/theme/'


function App() {
  return (
      <ThemeProvider theme={Theme}>
        <NewContextProvider>
          <Router />
        </NewContextProvider>
      </ThemeProvider>
  );
}

export default App;
