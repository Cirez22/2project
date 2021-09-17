import React from 'react';

import MyWorks from './MyWorks';
import NavBarInterface from '../../UserInterface/NavBarInterface';
import SideBar from '../../UserInterface/SideBar';






function MyWorksView() {
    return (
        <div>
            <NavBarInterface />

            <div className="container-fluid">
                <div className="row">
                    <div>
                        <SideBar />
                    </div>
                    {/* <div  className="col-10" style={{  backgroundColor:'#F7F9FA'}}> */}
                        <MyWorks/>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}



export default MyWorksView;