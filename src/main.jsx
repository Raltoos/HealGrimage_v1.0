import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import Main from "./components/layout/Main.jsx";
import Services from "./components/pages/servicesPage/Services.jsx";
import hotelStore from "./store/store.js";
// import SmoothScrolling from "./components/scroll/SmoothScrolling.jsx";
import AYUSH from "./components/pages/ayushPage/AYUSH.jsx";
import Register from "./components/UserAuth/Register/RegisterPage.jsx";
import Login from "./components/UserAuth/Login/LoginPage.jsx";
import HealthMain from "./components/pages/healthCard/HealthMain.jsx";
import AyushServices from "./components/pages/ayushPage/AyushServicePage/AyushServices.jsx";
import EmailOTPVerify from "./components/UserAuth/EmailOTPVerification/EmailOTPVerify.jsx";
import AboutUsMain from "./components/pages/aboutUs/AboutUsMain.jsx";
import Cities from "./components/pages/cities/Cities.jsx";
import Delhi from "./components/pages/cities/Delhi.jsx";
import DashboardLayout from "./routes/DashboardLayout.jsx";
import Landing from "./components/Landing-page/Landing.jsx";
import PageTitle from "./dashboard/src/components/PageTitle.jsx";
import ECommerce from "./dashboard/src/pages/Dashboard/ECommerce.jsx";
import SignIn from './dashboard/src/pages/Authentication/SignIn';
import SignUp from './dashboard/src/pages/Authentication/SignUp';
import Calendar from './dashboard/src/pages/Calendar';
import Profile from './dashboard/src/pages/Profile';
import Settings from './dashboard/src/pages/Settings';
import Tables from './dashboard/src/pages/Tables';
<<<<<<< HEAD
import CartPage from "./components/Cart/CartPage.jsx";
=======
import DefaultLayout from "./dashboard/src/layout/DefaultLayout.jsx";
>>>>>>> refs/remotes/origin/main

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <React.Fragment>
            <PageTitle title="HealGrimage" />
            <ECommerce />
          </React.Fragment>
        ),
      },
      {
        path: "/dashboard/calendar",
        element: (
          <>
            <PageTitle title="HealGrimage" />
            <Calendar />
          </>
        ),
      },
      {
        path: "profile",
        element: (
          <>
            <PageTitle title="HealGrimage" />
            <Profile />
          </>
        ),
      },
      {
        path: "tables",
        element: (
          <>
            <PageTitle title="HealGrimage" />
            <Tables />
          </>
        ),
      },
      {
        path: "settings",
        element: (
          <>
            <PageTitle title="HealGrimage" />
            <Settings />
          </>
        ),
      },
      {
        path: "auth/signin",
        element: (
          <>
            <PageTitle title="HealGrimage" />
            <SignIn />
          </>
        ),
      },
      {
        path: "auth/signup",
        element: (
          <>
            <PageTitle title="HealGrimage" />
            <SignUp />
          </>
        ),
      }
    ],
  },
  {
    path: "/verify/email/otp",
    element: <EmailOTPVerify />,
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        index: true,
        // element: <DefaultLayout/>
        element: <DefaultLayout/>
      },
      {
        path: "/app/calendar",
        element: (
          <>
            <PageTitle title="HealGrimage" />
            <Calendar />
          </>
        ),
      },
      {
        path: "/app/profile",
        element: (
          <>
            <PageTitle title="HealGrimage" />
            <Profile />
          </>
        ),
      },
      {
        path: "/app/tables",
        element: (
          <>
            <PageTitle title="HealGrimage" />
            <Tables />
          </>
        ),
      },
      {
        path: "/app/settings",
        element: (
          <>
            <PageTitle title="HealGrimage" />
            <Settings />
          </>
        ),
      },
      {
        path: "/app/ayush",
        element: <AYUSH />,
      },
      {
        path: "ayush/services",
        element: <AyushServices />,
      },
      {
        path: "/app/healthcard",
        element: <HealthMain />,
      },
      {
        path: "/app/services",
        element: <Services />,
      },
      {
        path: "/app/aboutus",
        element: <AboutUsMain />,
      },
      {
        path: "/app/cities",
        element: <Cities />,
      },
      {
<<<<<<< HEAD
        path: "cart",
        element: <CartPage/>,
      },

      {
        path: "delhi",
=======
        path: "/app/cities/delhi",
>>>>>>> refs/remotes/origin/main
        element: <Delhi />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <SmoothScrolling> */}
    <Provider store={hotelStore}>
      <RouterProvider router={router} />
    </Provider>
    {/* </SmoothScrolling> */}
  </React.StrictMode>
);
