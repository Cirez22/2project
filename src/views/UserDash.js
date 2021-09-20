import React from 'react';
import Dashboard from '../components/UserInterface/Dashboard';


import NavBarInterface from '../components/UserInterface/NavBarInterface';
import SideBar from '../components/UserInterface/SideBar.js';






function Dash() {
    return (
        <div>
            <NavBarInterface />
            <div className="container-fluid">
                <div className="row">
                    <div>
                        <SideBar />
                    </div>
                    {/* <div  className="col-10" style={{  backgroundColor:'#F7F9FA'}}> */}
                    <Dashboard />
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}



export default Dash;