import React from 'react';

import Setting from './Setting';
import NavBarInterface from '../../UserInterface/NavBarInterface';
import SideBar from '../../UserInterface/SideBar';






function SettingView() {
    return (
        <div>
            <NavBarInterface />

            <div className="container-fluid">
                <div className="row">
                    <div>
                        <SideBar />
                    </div>
                    {/* <div  className="col-10" style={{  backgroundColor:'#F7F9FA'}}> */}
                        <Setting/>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}



export default SettingView;