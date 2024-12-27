import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Login from './pages/Login/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter basename='/'>
<Routes>
  <Route path='/'element={ <App />} >
  <Route index element={<Home/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/login' element={<Login/>}/>

  </Route>


</Routes>

</BrowserRouter>
    
  </StrictMode>,
  
  
)
