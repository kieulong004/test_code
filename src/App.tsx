
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout'

import Page from './components/page'

import CartPage from './components/cartPage'




function App() {

  return (
    <>
      <Routes >
        <Route path='' element={<Layout />}>

          <Route path='page' element={<Page />}/>
          <Route path='page' element={<CartPage />}/>
          
          <Route path='cart' element={<CartPage />}/>



        </Route>
      </Routes>
    </>
  )
}

export default App
