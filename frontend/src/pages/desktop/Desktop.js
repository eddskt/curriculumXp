import React from 'react';
import AuthConsumer from "../../auth/AuthProvider";
import { backgroundDefault, window } from '../../static';

const Desktop = () => {
  const [authed, dispatch] = AuthConsumer();
  console.log(authed);

  return (
    <div className='w-full h-full'>
      <div style={{backgroundImage: `url(${backgroundDefault})`}}
        className='w-full min-h-screen bg-cover bg-no-repeat bg-center z-10'>
      </div>
      <div className="py-[120px] 2xl:py-[80px] px-[15px] z-20 top-0 absolute w-full">
      hehe
      </div>
      {/* <button className='w-[160px] h-[40px] bg-red-500' onClick={() => {
        dispatch({type: 'logout'})
      }}>
        Loggout
      </button> */}
      <div className='min-w-full bg-bluePrimary h-12 bottom-0 z-20 absolute overflow-hidden'>
        <div className='-mt-2 flex w-32 h-16 bg-greenStart items-center pl-1.5 rounded-tr-3xl rounded-br-3xl'>
          <img src={window} className='w-8 h-8 mx-2'/>
          <p className='text-white font-medium text-2xl pb-1'>start</p>
        </div>
      </div>

    </div>
  )
}

export default Desktop