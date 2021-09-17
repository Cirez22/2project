import React from 'react';

import Works from './Works';
import NavBarInterface from '../../UserInterface/NavBarInterface';
import SideBar from '../../UserInterface/SideBar';






function WorksView() {
    return (
        <div>
            <NavBarInterface />

            <div className="container-fluid">
                <div className="row">
                    <div>
                        <SideBar />
                    </div>
                    {/* <div  className="col-10" style={{  backgroundColor:'#F7F9FA'}}> */}
                        <Works/>
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
}



export default WorksView;