import { useState } from 'react'
import './App.css';
import'./index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { Route, Routes } from 'react-router';
import Team from './pages/Team';
import Header from './components/Header';
import BookingForm from './pages/BookingForm';
import Footer from './components/Footer';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <Routes>
   <Route index element={<Home/>}/>
   <Route path='menu'element={<Menu/>}/>
   <Route path='team'element={<Team/>}/>
   <Route path='booktable'element={<BookingForm/>}/>
   </Routes>
   <Footer/>
   <ToastContainer position='top-right' autoClose={3000}/>
   </>
  )
}

export default App
