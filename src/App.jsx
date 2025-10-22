import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { Route, Routes } from 'react-router';
import Team from './pages/Team';
import Header from './components/Header';
import Footer from './components/Footer';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { useScrollToTop } from './components/CustomHook';

function App() {
  useScrollToTop();
  return (
   <>
   <Header/>
   <Routes>
   <Route index element={<Home/>}/>
   <Route path='menu'element={<Menu/>}/>
   <Route path='team'element={<Team/>}/>
   </Routes>
   <Footer/>
   <ToastContainer position='top-right' autoClose={3000}/>
   
   </>
  )
}

export default App
