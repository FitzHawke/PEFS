import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import NewWorkout from './pages/NewWorkout';

function App() {
  return (
    <>
    <Router>
    <div className='container'>
      <Header />
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/newWorkout' element={<NewWorkout />}/>
      </Routes>
    </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
