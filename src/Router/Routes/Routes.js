import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import City from '../../Pages/City/City';
import Country from '../../Pages/Country/Country';
import Dashboard from '../../Pages/Dashboard/Dashboard';
import Login from '../../Shared/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/country',
        element: <Country></Country>,
      },
      {
        path: '/city',
        element: <City></City>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
