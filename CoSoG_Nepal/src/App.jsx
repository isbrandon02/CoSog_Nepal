import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./pages/Home.jsx"
import Header from "./components/Header.jsx"
import AboutUs from "./pages/AboutUs.jsx"

function App() {
  return (
    <>
      <Home />
      <AboutUs />
    </>
  )
}

export default App
