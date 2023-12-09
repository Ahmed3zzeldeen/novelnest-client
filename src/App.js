import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './Constants/routes.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Home, Layout , Login, NotFound, SingUp, DB_HOME , DB_BOOKS , DB_USERS , DB_ORDERS ,OneUser, Books , DBOneBook , OneBook , DBAddOneBook} from './Pages/index.js';
import ShoppingCartProvider from "./contexts/ShoppingCartContext";


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
      <ShoppingCartProvider>
        <Router>
          <Routes>
            <Route path={ROUTES.LANDING} element={<Layout />} >
              <Route index element={<Home />} />
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.SING_UP} element={<SingUp />} />
              <Route path={ROUTES.LOG_IN} element={<Login />} />
              <Route path={ROUTES.BOOKS} element={<Books />} />
              <Route path={ROUTES.ONE_BOOK} element={<OneBook />} />

              <Route path={ROUTES.DASHBOARD_HOME} element={<DB_HOME />} />
              <Route path={ROUTES.DASHBOARD_ADDBOOK} element={<DBAddOneBook />} />
              <Route path={ROUTES.DASHBOARD_BOOKS} element={<DB_BOOKS />} />
              <Route path={ROUTES.DASHBOARD_USERS} element={<DB_USERS/>} />
              <Route path={ROUTES.DASHBOARD_ORDERS} element={<DB_ORDERS/>} />
              <Route path={ROUTES.DB_ONE_USER} element={<OneUser />}/>
              <Route path={ROUTES.DB_ONE_BOOK} element={<DBOneBook />}/>
              
              
              <Route path="*" element={<NotFound/>}/>
            </Route>
          </Routes>
        </Router>
    </ShoppingCartProvider>
    </ThemeProvider>
  );
}

export default App;
