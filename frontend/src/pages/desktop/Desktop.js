/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import React, {useEffect, useState} from 'react';
import AuthConsumer from "../../auth/AuthProvider";
import { backgroundDefault, myComputer, window } from '../../static';
import { Row, Col } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faWindowMaximize, faMaximize} from '@fortawesome/free-regular-svg-icons';

const Desktop = () => {
  const [authed, dispatch] = AuthConsumer();
  const [activeDesktopButton, setActiveDesktopButton] = useState(0);
  const [oppenedOrder, setOppenedOrder] = useState([]);
  const [applications, setApplications] = useState([{
    id: 1,
    name: "Profile Picture",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    type: "photoview", //its like a ddl name, for the open a correct component based
    icon: require("../../static/desktopIcons/imageFile.png")
  },{
    id: 2,
    name: "About Me",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    type: "notepad", //its like a ddl name, for the open a correct component based
    icon: require("../../static/desktopIcons/notepad.png")
  },{
    id: 3,
    name: "Experience",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    type: "dllView", //its like a ddl name, for the open a correct component based
    icon: require("../../static/desktopIcons/iniFile.png")
  },{
    id: 4,
    name: "Contact",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    type: "outlookCard", //its like a ddl name, for the open a correct component based
    icon: require("../../static/desktopIcons/outlook.png")
  },{
    id: 5,
    name: "Tools Expertise",
    active: false,
    maximizer: false,
    opened: false,
    minimized: false,
    clicked: false,
    type: "paint", //its like a ddl name, for the open a correct component based
    icon: require("../../static/desktopIcons/paint.webp")
  }]);

  const handleClickOpenApplication = (event, clicado) => {
    setActiveDesktopButton(clicado);
    if (event.detail === 1) {
      //console.log('one click', event);
    }

    if (event.detail === 2) {
      const help = applications;

      console.log(oppenedOrder);
      if(!oppenedOrder.includes(clicado)){
        setOppenedOrder(prevOppenedOrder => ([...prevOppenedOrder, clicado]));
        console.log(oppenedOrder)
      }

      const helposo = help.map((app, index) => {
        if(app.id === clicado) app.opened = true; app.active = true;
        if(app.id !== clicado && app.active) {
          app.active = false;
          return app;
        } 
      });
      setApplications(prevApplications => ([...help]));
    }
  };

  const handleClickBottomBar = (event, clicado) => {
    const help = applications.map((app, index) => {
      if(clicado === app.id){
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
          <button className={`flex flex-col items-center p-1 min-w-[128px] ${activeDesktopButton === application.id ? 'desktop-active -m-[2px]': ''}`} onClick={(e) => {handleClickOpenApplication(e, application.id)}} >
            <img src={application.icon} className='w-12'/>
            <p className='text-base text-white drop-shadow-appTextDk'>{application.name}</p>
          </button>
          </Col>
        ))
      }
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
          {
            oppenedOrder.map((number) => (
              applications.map((application, index) => (
                application.id === number ? <button className={`my-1 rounded whitespace-nowrap 
                application-bottom-bar ${application.active ? 'active' : ''}
                text-ellipsis overflow-hidden flex flex-row 
                max-w-[160px] px-2 items-center h-10
                left-0`} onClick={(e) => {handleClickBottomBar(e, application.id)}}>
                  <img src={application.icon} height={25} width={20} className='mr-2'/>
                  <p className='text-white text-ellipsis overflow-hidden'>{application.name}</p>
                </button> : <></>
                )
            ))
          /* {applications.map((application, index) => (
            application.opened ? <button className={`my-1 rounded whitespace-nowrap 
            application-bottom-bar ${application.active ? 'active' : ''}
            text-ellipsis overflow-hidden flex flex-row 
            max-w-[160px] px-2 items-center h-10
            left-0`} onClick={(e) => {handleClickBottomBar(e, index)}}>
              <img src={application.icon} height={25} width={20} className='mr-2'/>
              <p className='text-white text-ellipsis overflow-hidden'>{application.name}</p>
            </button> : <></>
            ) }*/
          )}
        </div>
        
        <div className='flex flex-row items-center w-32 xs:w-16 sm:w-16 md:w-16 lg:w-14 xl:w-36 2xl:w-40 
        bg-blueLight shadow-[inset_2px_4px_4px_0_rgba(255,255,255,0.3)]
        '>
          <p className='text-white'> 5:20</p> 
        </div>
      </div>


      {
        applications.map((application, index) => (
          application.opened ? <div className={` absolute z-[22] notepad rounded-10`}>
            <div className='appTop flex flex-row px-2'>
              <div className='leftGroup flex flex-row w-fit'>
                <img src={application.icon} height={25} width={20} className='mr-2'/>
                <p className='text-white font-bold'>{application.name}</p>
              </div>
              <div className='buttonGroup flex flex-row w-auto gap-1'>
                <button className='topButton minimize'>
                  <FontAwesomeIcon icon={faWindowMinimize} fontSize={18} color='white' style={{fontWeight: 'bolder'}} />
                </button>
                <button className='topButton maximize'>
                  <FontAwesomeIcon icon={faWindowMaximize} fontSize={24} color='white' style={{fontWeight: 'bolder'}} inverse/>
                </button>
                <button className='topButton close'>
                  <FontAwesomeIcon icon={faXmark} fontSize={28} color='white' style={{fontWeight: 'bolder'}}  />
                </button>
              </div>
            </div>
            <div className='flex flex-row appOptions py-1 gap-4 pl-4'>
              <button>File</button>
              <button>Edit</button>
              <button>View</button>
              <button>Favorite</button>
              <button>Tools</button>
              <button>Help</button>
            </div>
          </div> : <></>
        ))
      }
    </div>
  )
}

export default Desktop