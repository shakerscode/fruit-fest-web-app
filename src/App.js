import logo from './logo.svg';
import './App.css';
import Navbar from './component/Shared/Navbar/Navbar';
import Footer from './component/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';

function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
       </Routes>
       <Footer></Footer>
    </div>
  );
}

export default App;
