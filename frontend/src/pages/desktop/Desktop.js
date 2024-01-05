/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React, {useEffect, useState} from 'react';
import AuthConsumer from "../../auth/AuthProvider";
import { backgroundDefault, myComputer, window } from '../../static';
import { Row, Col } from 'antd';

const Desktop = () => {
  const [authed, dispatch] = AuthConsumer();
  const [activeDesktopButton, setActiveDesktopButton] = useState(0);
  const [applications, setApplications] = useState([{
    id: 1,
    name: "Profile Picture",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    icon: require("../../static/desktopIcons/imageFile.png")
  },{
    id: 2,
    name: "About Me",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    icon: require("../../static/desktopIcons/notepad.png")
  },{
    id: 3,
    name: "Experience",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    icon: require("../../static/desktopIcons/iniFile.png")
  },{
    id: 4,
    name: "Contact",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    icon: require("../../static/desktopIcons/outlook.png")
  },{
    id: 5,
    name: "Tools Expertise",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    icon: require("../../static/desktopIcons/paint.webp")
  }]);
  //console.log(authed);  
  

  const handleClickOpenApplication = (event, clicado) => {
    setActiveDesktopButton(clicado + 1);
    if (event.detail === 1) {
      //console.log('one click', event);
    }

    if (event.detail === 2) {
      const help = applications;
      help[clicado].opened = true;
      help[clicado].active = true;

      const helposo = help.map((app, index) => {
        if(clicado !== index && app.active) {
          app.active = false;
          return app;
        } 
      });
      setApplications(prevApplications => ([...help]));
    }
  };

  const handleClickBottomBar = (event, clicado) => {
    const help = applications.map((app, index) => {
      if(clicado === index){
        app.active = true;
        app.minimized = false;
        return app;
      }else{
        app.active = false;
        return app;
      }
    });
    setApplications(prevApplications => ([...help]))
  }

  return (
    <div className='flex w-full h-full'>
      <div style={{backgroundImage: `url(${backgroundDefault})`}}
        className='w-full min-h-screen bg-cover bg-no-repeat bg-center z-10'>
      </div>
      <Row className="flex flex-col z-20 absolute w-full py-4" gutter={[0, 40]}>
      {applications.map((application, index) => (
        <Col xs={10} sm={8} md={6} lg={4} xl={4} xxl={2} className={`flex flex-col items-center`}>
          <button className={`flex flex-col items-center p-1 min-w-[128px] ${activeDesktopButton === application.id ? 'desktop-active -m-[2px]': ''}`} onClick={(e) => {handleClickOpenApplication(e, index)}} >
            <img src={application.icon} className='w-12'/>
            <p className='text-base text-white drop-shadow-appTextDk'>{application.name}</p>
          </button>
          </Col>
        ))
      }
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
        
        <div className='w-full mr-1 flex flex-row gap-1'>
          {applications.map((application, index) => (
            application.opened ? <button className={`my-1 rounded whitespace-nowrap 
            application-bottom-bar ${application.active ? 'active' : ''}
            text-ellipsis overflow-hidden flex flex-row 
            max-w-[160px] px-2 items-center h-10
            left-0`} onClick={(e) => {handleClickBottomBar(e, index)}}>
              <img src={application.icon} height={25} width={20} className='mr-2'/>
              <p className='text-white text-ellipsis overflow-hidden'>{application.name}</p>
            </button> : <></>
            )
          )}
          {/* <button className={`my-1 rounded whitespace-nowrap 
          text-ellipsis overflow-hidden flex flex-row 
          max-w-[160px] px-2 items-center h-10 bg-[#3980f4]
          left-0`}>
            <img src={myComputer} height={25} width={20} className='mr-2'/>
            <p className='text-white text-ellipsis overflow-hidden'>Meu Computador Testando o Grande pois não pode passar</p>
          </button> */}
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