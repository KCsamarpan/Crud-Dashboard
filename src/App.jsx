import React from 'react'
import {
  BrowserRouter as Router , 
  Routes , 
  Route
} from 'react-router-dom'
import Product from './Component/Product/Product'
import HomePage from './Component/Dashboard/HomePage'
import Login from './Component/Auth/Login'
import SignUp from './Component/Auth/Sign'

const App = () => {
  return (
    <div>
     <Router>
      <HomePage/>
     <Routes>
      <Route exact path='/' element={<HomePage/>} />
      <Route exact path='/product' element={<Product/>}/>
      {/* <Route exact path='/login' element={<Login/>} /> */}
      {/* <Route exact path='/signup' element={<SignUp/>}  /> */}
     </Routes>
     </Router>


    </div>
  )
}

export default App