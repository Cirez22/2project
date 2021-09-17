import React from 'react';

import NavBarInterface from '../../UserInterface/NavBarInterface';
import SideBar from '../../UserInterface/SideBar';
import Account from './Account';






function AccountView() {
    return (
        <div>
            <NavBarInterface />

            <div className="container-fluid">
                <div className="row">
                    <div>
                        <SideBar />
                    </div>
                    {/* <div  className="col-10" style={{  backgroundColor:'#F7F9FA'}}> */}
                        <Account/>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}



export default AccountView;