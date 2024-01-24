import React from 'react'
import {
  BrowserRouter as Router , 
  Routes , 
  Route
} from 'react-router-dom'
import Product from './Component/Product/Product'
import HomePage from './Component/Dashboard/HomePage'

const App = () => {
  return (
    <div>
     <Router>
     <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/product' element={<Product/>}/>
     </Routes>
     </Router>
    </div>
  )
}

export default App