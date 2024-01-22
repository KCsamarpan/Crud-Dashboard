import React from 'react'
import Dashboard from './Component/Dashboard/Dashboard'
import {
  BrowserRouter as Router , 
  Routes , 
  Route
} from 'react-router-dom'
import Product from './Component/Product/Product'

const App = () => {
  return (
    <div>
     <Router>
     <Routes>
      <Route exact path='/' element={<Dashboard/>} />
      <Route exact path='/product' element={<Product/>}/>
     </Routes>
     </Router>
    </div>
  )
}

export default App