import './App.css'
import Login from './Components/Login'
import Register from './Components/Register'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './React-router-dom/HomePage';
import NavBar from './React-router-dom/Navbar';
import SinglePage from './React-router-dom/SinglePage';
import UseMemo from './Components/UseMemo';

function App() {
  return (
    <>
    <UseMemo/>
    <NavBar/>
    <Routes>
      <Route path='/products/:id' element={<SinglePage/>}/>
      <Route path='/HomePage' element={<HomePage/>}/>
      <Route path='/' element={<Navigate to="/Register" />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Login' element={<Login />} />
      {/* <Route path='/SinglePage' element={<SinglePage/>}/> */}
    </Routes>
    </>
  );
}

export default App;

// function App() {
//   return (
//     <>
//     <Register/>
//     <Login/>
//     </>
//   )
// }
// export default App
