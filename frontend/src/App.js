import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';
//import AuthWrapper from './auth/AuthWrapper';
import { Auth, ForgotPassword, Login, Register } from './pages/auth';
import PrivateRoutes from './utility/PrivateRoutes';
import { Desktop } from './pages/desktop';
import { Bios } from './pages/bios';

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <PrivateRoutes><Desktop /></PrivateRoutes>,
      children: [
        
      ]
    },
    {
      path: "/login",
      element: <Login />,
      index: true,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
    }
  ]);

  return routes;

  // return (
  //   <div className='App'>
      
  //       <Routes>
  //         <Route element={<PrivateRoutes/>}> 
  //           <Route element={<Desktop />} path='/' exact/>
  //         </Route>
  //         <Route path='bios' element={<Bios />} />
  //         <Route path='auth' element={<Auth />}>
  //           <Route element={<Login />} path='login' />
  //           <Route element={<Register />} path='register' />
  //           <Route element={<ForgotPassword />} path='forgotpassword' />
  //         </Route>
  //       </Routes>

  //   </div>
  // );
}

export default App;
