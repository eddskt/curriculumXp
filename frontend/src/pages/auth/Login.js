import React from 'react';
import AuthConsumer from '../../auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [authed, dispatch] = AuthConsumer();
  let navigate = useNavigate();

  console.log(authed);

  return (
    <div className='w-full h-full'>
      <div style={{backgroundImage: `url(${backgroundDefault})`}}
        className='w-full min-h-screen bg-cover bg-no-repeat bg-center z-10'>
      </div>
      <div className="py-[120px] 2xl:py-[80px] px-[15px] z-20 top-0 absolute w-full">
      hehe
      </div>
      <button className='w-[160px] h-[40px] bg-green-500' onClick={(e) => {
        dispatch({type: 'login'});
        navigate('/', {replace: true})
      }}>
        Login
      </button>
    </div>
  )
}

export default Login