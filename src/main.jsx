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
import PageReveal from './components/pageReveal/pageReveal.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageReveal />,
  },
  {
    path:'/main',
    element:<App/>,
    children: [
      {
        path: "/main",
        element: <Main />
      },
    ]
  }
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
