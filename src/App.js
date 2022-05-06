
import './App.css';
import Navbar from './component/Shared/Navbar/Navbar';
import Footer from './component/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import ManageInv from './component/ManageInv/ManageInv';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';
import SingleInven from './component/SingleInven/SingleInven';
import { Toaster } from 'react-hot-toast';
import RequireAuth from './component/RequierAuth/RequierAuth';
import AddItems from './component/AddItems/AddItems';


function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
         <Route path='/add-item' element={<AddItems></AddItems>}></Route>
         <Route path='/inventory/:id' element={
           <RequireAuth>
             <SingleInven></SingleInven>
           </RequireAuth>
         }></Route>
         <Route path='/manage-inventory' element={
           <RequireAuth>
             <ManageInv></ManageInv>
           </RequireAuth>
         }></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/signup' element={<SignUp></SignUp>}></Route>
       </Routes>
       <Footer></Footer>
       <Toaster />
    </div>
  );
}

export default App;
