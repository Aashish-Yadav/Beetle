import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import SignIn from './Pages/SignIn'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'


export const BackendURL = 'http://localhost:8080'

function App() {

  return (
   <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Router>
   </div>
  )
}

export default App
