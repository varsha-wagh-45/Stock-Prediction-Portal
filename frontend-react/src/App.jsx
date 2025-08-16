import { useState } from 'react'
import './assets/css/style.css'
import Header from './componants/Header'
import Main from './componants/main'
import Footer from './componants/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './componants/Register'
import Login from './componants/Login'

function App() {
  

  return (
    
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Main />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login/>}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
