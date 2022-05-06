
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
import NotFound from './component/NotFound/NotFound';


function App() {
  return (
    <div>
       <Navbar></Navbar>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/home' element={<Home></Home>}></Route>
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
         <Route path='/add-item' element={
           <RequireAuth>
             <AddItems></AddItems>
           </RequireAuth>
         }></Route>
         <Route path='/login' element={<Login></Login>}></Route>
         <Route path='/signup' element={<SignUp></SignUp>}></Route>
         <Route path='*' element={<NotFound></NotFound>}></Route>
       </Routes>
       <Footer></Footer>
       <Toaster />
    </div>
  );
}

export default App;
