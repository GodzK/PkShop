import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import "./components/Home.jsx"
import Login from './components/Login.jsx';
import Home from './components/Home.jsx'
import Cart from './components/Cart.jsx';
import Register from './components/Register.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
  <Routes>
  <Route path="/login" element={<Login/>} />
  <Route path="/" element={<Home/>} />
  <Route path="/Cart" element={<Cart/>} />
  <Route path="/register" element={<Register/>} />
  </Routes>
</BrowserRouter>
  </StrictMode>,
)
