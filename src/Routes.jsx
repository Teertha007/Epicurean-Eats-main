import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './Layout/Home';
import HomePage from './Pages/HomePage';
import Menu from './Components/Menu';
import MenuPage from './Pages/MenuPage';
import OrderPage from './Pages/OrderPage';
import Login from './Components/Login';
import SignUp from './Pages/SignUp';
import PrivateRoutes from './PrivateRoutes';
import Dashboard from './Layout/Dashboard';
import MyCart from './DComponents/MyCart';
import DUsers from './DComponents/Dusers';
import AdminRoutes from './AdminRoutes';
import AddItem from './DComponents/AddItem';
import ManageItem from './DComponents/ManageItem';
import Payment from './DComponents/Payment';
import UserHome from './DComponents/UserHome';
import AdminHome from './DComponents/AdminHome';


export const router = createBrowserRouter([
            {
              path: "/",
              element: <Home></Home>,
              children: [
                {
                  path: "/",
                  element: <HomePage></HomePage>,
                },
                {
                  path: "menu",
                  element: <MenuPage></MenuPage>,
                },
                {
                  path: "order/:category",
                  element: <PrivateRoutes><OrderPage></OrderPage></PrivateRoutes>,
                },
                {
                  path: "/login",
                  element: <Login></Login>,
                },
                {
                  path: "/signUp",
                  element: <SignUp></SignUp>,
                },
              ],
            },
            {
              path: 'dashboard',
              element: <Dashboard></Dashboard>,
              children: [
                {
                  path: 'userHome',
                  element: <UserHome></UserHome>
                },
                {
                  path: 'myCart',
                  element: <MyCart></MyCart>
                },
                {
                  path: 'payment',
                  element: <Payment></Payment>
                },
                {
                  path: 'users',
                  element: <AdminRoutes><DUsers></DUsers></AdminRoutes>
                },
                {
                  path: 'adminHome',
                  element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
                },
                {
                  path: 'addItem',
                  element: <AdminRoutes><AddItem></AddItem></AdminRoutes>
                },
                {
                  path: 'manageItem',
                  element: <AdminRoutes><ManageItem></ManageItem></AdminRoutes>
                }

              ]
              
            }
          ]);


