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
        path: '/country/:country',
        element: <Country></Country>,
        loader: ({ params }) =>
          fetch(
            `https://server-side-zeta.vercel.app/country/${params.country}`
          ),
      },
      {
        path: '/region/:region',
        element: <City></City>,
        loader: ({ params }) =>
          fetch(`https://server-side-zeta.vercel.app/region/${params.region}`),
      },
      {
        path: '/topic/:topic',
        element: <Country></Country>,
        loader: ({ params }) =>
          fetch(`https://server-side-zeta.vercel.app/topic/${params.topic}`),
      },
      {
        path: '/sector/:sector',
        element: <Country></Country>,
        loader: ({ params }) =>
          fetch(`https://server-side-zeta.vercel.app/sector/${params.sector}`),
      },
      {
        path: '/pestle/:pestle',
        element: <Country></Country>,
        loader: ({ params }) =>
          fetch(`https://server-side-zeta.vercel.app/pestle/${params.pestle}`),
      },
      {
        path: '/source/:source',
        element: <Country></Country>,
        loader: ({ params }) =>
          fetch(`https://server-side-zeta.vercel.app/source/${params.source}`),
      },
      {
        path: '/insight/:insight',
        element: <Country></Country>,
        loader: ({ params }) =>
          fetch(
            `https://server-side-zeta.vercel.app/insight/${params.insight}`
          ),
      },
      {
        path: '/date/:date',
        element: <Country></Country>,
        loader: ({ params }) =>
          fetch(`https://server-side-zeta.vercel.app/date/${params.added}`),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
