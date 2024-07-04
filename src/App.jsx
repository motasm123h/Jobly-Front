/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddJob from './Pages/AddJob/AddJob';
import EditJob from './Pages/EditJob/EditJob';
import About from './Pages/About/About';

import { useSelector } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Home2 from './Pages/Home2/index';
import Register from './Pages/RegisterPages/Register/Register';
import Login from './Pages/Login/Login';
import SecondPage from './Pages/RegisterPages/SecondPage/SecondPage';
import TheerdPage from './Pages/RegisterPages/TheerdPage/TheerdPage';
import Vacancy from './Pages//Vacancy/Vacancy';
import Jobs from './Pages/Jobs/Jobs';
import Location from './Pages/Location/Location';
import ProfileCompany from './Pages/ProfileCompany/ProfileCompany';
import EditPersonal from './Pages/Edit/EditPersonal/EditPersonal'
import EditCompany from './Pages/Edit/EditCompany/EditCompany'
import EditAddress from './Pages/Edit/EditAddress/EditAddress';
const App = () => {
  const user = useSelector((state) => state.auth.authData)
  // const user = useSelector((state) => state.auth.authData)
  // console.log(user);
  const Layout = () => {
    return (
      <div >
          <Outlet/>
        {/* <Outlet /> */}
      </div>
    );
  };
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/register" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home2 />,
          errorElement: <Error />,
        },
        {
          path: "/home",
          element: <Home />,
          errorElement: <Error />,
        },
        {
          path: "/profile/:id",
          // element: <ProFile />,
          errorElement: <Error />,
        },

        {
          path: "/AddJobs",
          element: <AddJob />,
          errorElement: <Error />,
        },

        {
          path: "/editjob/:vacancyId",
          element: <EditJob />,
          errorElement: <Error />,
        },
        
        // {
        //   path: "/vacancy",
        //   element: <Vacancy />,
        //   errorElement: <Error />,
        // },
        {
          path: "/location",
          element: <Location />,
          errorElement: <Error />,
        },
        
        {
          path: "/edit-personal-info",
          element: <EditPersonal/>,
          errorElement: <Error />,
        },
        {
          path: "/edit-address",
          element: <EditAddress/>,
          errorElement: <Error />,
        },
      
        {
          path: "/edit-company-info",
          element: <EditCompany />,
          errorElement: <Error />,
        },
    
        {
          path: "/profile_company",
          element: <ProfileCompany />,
          errorElement: <Error />,
        },

        {
          path: "/vacancy",
          element: <Jobs />,
          errorElement: <Error />,
        },
    
      ],
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
    {
      path: "/register-two",
      element: <SecondPage />,
      errorElement: <Error />,
    },
    {
      path: "/register-three",
      element: <TheerdPage />,
      errorElement: <Error />,
    },
  ]);

  return (

    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
