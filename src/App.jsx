import LoginForm from './components/Loginform'

import ProductSection from './components/ProductSection'
import PageNotFound from './components/PageNotFound'
import ProtectedRoute from './components/ProtectedRoute'
import Cart from './components/Cart'
import CartProvider from './components/Cartcontext';
import Home from './components/Home'; 
import Payment from './components/Payment'



import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
   console.log("App loaded")
  return (
      <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route
            path="/products"
            element={<ProtectedRoute><ProductSection /></ProtectedRoute>}
          />
          <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
          <Route
            path="/cart"
            element={<ProtectedRoute><Cart /></ProtectedRoute>}
          />
          <Route
            path="/payment"
            element={<ProtectedRoute><Payment /></ProtectedRoute>}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  

  )
}



export default App
