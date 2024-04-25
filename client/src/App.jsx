import { useState } from 'react'

import Navbar from './components/layout/Navbar'
import Home from './components/Home'
import Gigs from './components/Gigs'
import JobList from './components/JobList'
import Login from './components/Login'
import Signup from './components/Signup'
import Footer from './components/layout/Footer'
import RegistrationSuccessful from './components/RegistrationSuccessful'

import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import { AuthProvider } from './components/AuthContext'

function Root() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/gigs/*" element={<Gigs />} />
          <Route path="/jobs/*" element={<JobList/>} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/signup/*" element={<Signup />} />
          <Route path="/registration-successful/*" element={<RegistrationSuccessful />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

const router = createBrowserRouter(
  [{ path: "*", Component: Root },]
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
