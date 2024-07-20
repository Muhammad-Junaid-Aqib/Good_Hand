// import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/services",
          element: <Services/>
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
