import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import App from "./App"
import List from "../src/components/list"
import Login from './components/Login';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
  <Routes>
  <Route path="/" element={<App/>} />
  <Route path="/item-list" element={<List/>}/>
  <Route path="/login" element={<Login/>}/>
  </Routes>
</BrowserRouter>
  </StrictMode>,
)