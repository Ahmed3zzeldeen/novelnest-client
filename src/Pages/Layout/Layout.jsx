import { Outlet } from 'react-router-dom';
import { Header } from '../../Components';
import { Dashboard } from '../index';

// TODO: Add isAdmin validation with Axios
const isAdmin = true;

const Layout = () => {
  return (
    <>
      <Header />
      {isAdmin ?
        <Dashboard>
            <Outlet />
        </Dashboard >
        :
          <Outlet />
      }
    </>
  )
}

export default Layout