import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import Main from './components/layout/Main.jsx';
import hotelStore from './store/store.js';
import SmoothScrolling from './components/scroll/SmoothScrolling.jsx';
import AYUSH from './components/pages/ayushPage/AYUSH.jsx';
<<<<<<< HEAD
import Services from './components/pages/servicesPage/Services.jsx';
=======
import HealthCard from './components/pages/healthCard/HealthCard.jsx';
import HealthMain from './components/pages/healthCard/HealthMain.jsx';
>>>>>>> 19dc7391acd0ce22ab10ba7eeb1a2e03e00c34b5

const router = createBrowserRouter([
  
  {
    path:'/',
    element:<App/>,
    children: [
      {
        path: "/main",
        element: <Main />
      },
      {
        path: "/ayush",
        element: <AYUSH />
      },
      {
<<<<<<< HEAD
        path: "/services",
        element: <Services />
=======
        path: "/healthcard",
        element: <HealthMain />
>>>>>>> 19dc7391acd0ce22ab10ba7eeb1a2e03e00c34b5
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScrolling>
    <Provider store={hotelStore}>
      <RouterProvider router={router} />
    </Provider>
    </SmoothScrolling>
  </React.StrictMode>,
)
