import React from 'react'
import './App.css'
import  About from './components/about/About'
import  Header from './components/header/Header'
import  Footer from './components/footer/Footer'
import  Contact from './components/contact/Contact'
import  Services from './components/services/Services'
import Navbar from './components/navbar/Navbar'


const App = () => {
  return (
    <div className= "App gradient__bg">
        <div className="gradient__bg">
            <Navbar />
            <Header/>
            <About/>
            <Services/>
            <Contact />
            <Footer />

        </div>
    </div>
  )
}

export default App

