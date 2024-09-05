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
import Register from './components/UserAuth/Register/RegisterPage.jsx'
import Login from './components/UserAuth/Login/LoginPage.jsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register />
  },
 
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/main",
        element: <Main />
      },
      {
        path: "/ayush",
        element: <AYUSH />
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
