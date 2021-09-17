import React from 'react';
import { Briefcase, Chat, Gear, House, Newspaper, Person } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'


import '../../styles/SideBar.css';


function Sidebar() {
    return (

        <div id="sticky-sidebar" className='sidebar' >
            <ul className='content '>

                <li id='links'>
                    <Link to="/userinterface">
                        <button id='text' type="button" className="btn btn-outline-dark newspaper">
                            <House /> Dashboard
                        </button>
                    </Link>
                </li>


                <li id='links'>
                    <Link to="/worksview">
                        <button type="button" className="btn btn-outline-dark newspaper">
                            <Newspaper /> Sales
                        </button>
                    </Link>
                </li>

                <li id='links'>
                    <Link to="/myworksview">
                        <button type="button" className="btn btn-outline-dark newspaper">
                            <Briefcase /> My Sales
                        </button>
                    </Link>
                </li>
                <li id='links'>
                    <Link to="/messagesview">
                        <button type="button" className="btn btn-outline-dark newspaper">
                            <Chat /> Message
                        </button>
                    </Link>
                </li>
                <li id='links'>
                    <Link to="/accountview">
                        <button type="button" className="btn btn-outline-dark newspaper">
                            <Person /> Account
                        </button>
                    </Link>
                </li>
                <li id='links'>
                <Link to="/settingview">
                        <button type="button" className="btn btn-outline-dark newspaper">
                            <Gear /> Settings
                        </button>
                 </Link>
                </li>


            </ul>
        </div>

    );
}

export default Sidebar;