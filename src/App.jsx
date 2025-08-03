import LoginForm from './components/Loginform'

import ProductSection from './components/ProductSection'
import PageNotFound from './components/PageNotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Cart from './components/Cart'
import CartProvider from './components/Cartcontext';



import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
   console.log("App loaded")
  return (
      <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route
            path="/"
            element={<ProtectedRoute><ProductSection /></ProtectedRoute>}
          />
          <Route
            path="/cart"
            element={<ProtectedRoute><Cart /></ProtectedRoute>}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  

  )
}



export default App
