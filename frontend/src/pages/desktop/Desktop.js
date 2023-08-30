import React from 'react';
import AuthConsumer from "../../auth/AuthProvider";
import { backgroundDefault, myComputer, window } from '../../static';
import { Row, Col } from 'antd';

const Desktop = () => {
  const [authed, dispatch] = AuthConsumer();
  console.log(authed);

  return (
    <div className='flex w-full h-full'>
      <div style={{backgroundImage: `url(${backgroundDefault})`}}
        className='w-full min-h-screen bg-cover bg-no-repeat bg-center z-10'>
      </div>
      <Row className="flex flex-col z-20 absolute w-full py-4" gutter={[0, 40]}>
        <Col xs={10} sm={8} md={6} lg={4} xl={4} xxl={2} className=''>
          <div className='flex flex-col items-center'>
            <img src={myComputer} className='w-14'/>
            <p className='text-base text-white drop-shadow-appTextDk'>Meu Computador</p>
          </div>
        </Col>
        <Col xs={10} sm={8} md={6} lg={4} xl={4} xxl={2} className=''>
          <div className='flex flex-col items-center'>
            <img src={myComputer} className='w-14'/>
            <p className='text-base text-white drop-shadow-appTextDk'>Meu Computador</p>
          </div>
        </Col>
        {/* <Col xs={24} sm={12} md={12} lg={3} xl={3} className='bg-red-500'>
          <div>
            hehe
          </div>
        </Col> */}
      </Row>
      {/* <button className='w-[160px] h-[40px] bg-red-500' onClick={() => {
        dispatch({type: 'logout'})
      }}>
        Loggout
      </button> */}
      <div className='flex flex-row min-w-full bg-bluePrimary h-12 bottom-0 z-20 absolute overflow-hidden shadow-[inset_2px_4px_4px_0_rgba(255,255,255,0.3)]'>
        <div className='-mt-2 flex mr-1 w-[140px] overflow-hidden
        xs:w-[80px] sm:w-[80px] md:w-[75px] lg:w-[148px] xl:w-[154px] 2xl:w-[170px]
        h-16 bg-greenStart items-center pl-1.5 rounded-tr-3xl rounded-br-3xl shadow-[inset_2px_12px_6px_0_rgba(255,255,255,0.3)]'>
          <img src={window} className='w-8 h-8 mx-2'/>
          <p className='text-white font-medium text-2xl pb-1 md:hidden'>start</p>
        </div>
        
        <div className='w-full mr-1'>
          <p>fdsfds</p>
        </div>
        
        <div className='flex flex-row items-center w-32 xs:w-16 sm:w-16 md:w-16 lg:w-14 xl:w-36 2xl:w-40 
        bg-blueLight shadow-[inset_2px_4px_4px_0_rgba(255,255,255,0.3)]
        '>
          <p className='text-white'> 5:20</p> 
        </div>
      </div>

    </div>
  )
}

export default Desktop