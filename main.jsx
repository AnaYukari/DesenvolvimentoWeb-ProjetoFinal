import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/pages/App.jsx'
import { Corredor } from './src/pages/Corredor/corredor.jsx'
import { QuartoYuka } from './src/pages/Quarto03/quarto03.jsx'
import { QuartoBonas } from './src/pages/Quarto02/quarto02.jsx';
import { Entrada } from './src/pages/Entrada/entrada.jsx';
import { PortaCrime } from './src/pages/Crime/crime.jsx';
import { QuartoAlex } from './src/pages/Quarto01/quarto01.jsx';
import { QuartoMiguelito } from './src/pages/Quarto05/quarto05.jsx';
import { QuartoLorencini } from './src/pages/Quarto04/quarto04.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './src/Error/erro.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/entrada',
    element: <Entrada />,
  },
  {
    path: '/corredor',
    element: <Corredor />
  },
  {
    path: '/quartoYuka',
    element: <QuartoYuka />
  },
  {
    path: '/quartoBonas',
    element: <QuartoBonas />
  },
  {
    path: '/crime',
    element: <PortaCrime />
  },
  {
    path: '/quartoAlex',
    element: <QuartoAlex />
  },
  {
    path: '/quartoMiguelito',
    element: <QuartoMiguelito />
  },
  {
    path: '/quartoLorencini',
    element: <QuartoLorencini />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
