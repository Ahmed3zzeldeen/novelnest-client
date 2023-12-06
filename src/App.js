import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './Constants/routes.js';
import { Home , DashboardHome , DashboardBooks, DashboardUsers  } from './Pages/index.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    dark: {
      main: '#000000',
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={ROUTES.LANDING} element={<Home />} >
            <Route path={ROUTES.HOME} element={<Home />} />
          </Route>
          <Route path={ROUTES.DASHBOARD_HOME}  element={<DashboardHome/>}></Route>
          <Route path={ROUTES.DASHBOARD_BOOKS} element={<DashboardBooks/>}></Route>
          <Route path={ROUTES.DASHBOARD_USERS} element={<DashboardUsers/>}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
