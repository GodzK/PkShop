import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import App from "./App"
import List from "../src/components/list"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
  <Routes>
  <Route path="/" element={<App/>} />
  <Route path="/item-list" element={<List/>}/>
  </Routes>
</BrowserRouter>
  </StrictMode>,
)