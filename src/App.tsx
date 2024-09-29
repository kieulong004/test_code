
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'
import Homepages from './components/homepages'
import CartPage from './components/cartPage'
import Product from './components/product'

function App() {

  return (
    <>
      <Routes >
        <Route path='' element={<Layout />}>
          <Route path='home' element={<Homepages />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='product' element={<Product />} />


        </Route>
      </Routes>
    </>
  )
}

export default App
