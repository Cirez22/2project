import React from 'react';
import { Briefcase, Chat, Gear, House, Newspaper, Person } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'


import '../../styles/SideBar.css';


function Sidebar() {
    return (

        <div id="sticky-sidebar" className='sidebar' style={{marginLeft:"0px"}}>
            <ul className='content '>

                <li id='links'>
                    <Link to="/dashboard">
                        <button id='text' type="button" className="btn btn-outline-dark newspaper">
                            <House /> Dashboard
                        </button>
                    </Link>
                </li>


                <li id='links'>
                    <Link to="/works">
                        <button type="button" className="btn btn-outline-dark newspaper">
                            <Newspaper /> Sales
                        </button>
                    </Link>
                </li>

                <li id='links'>
                    <Link to="/myworks">
                        <button type="button" className="btn btn-outline-dark newspaper">
                            <Briefcase /> My Sales
                        </button>
                    </Link>
                </li>
                <li id='links'>
                    <Link to="/messages">
                        <button type="button" className="btn btn-outline-dark newspaper">
                            <Chat /> Message
                        </button>
                    </Link>
                </li>
                <li id='links'>
                    <Link to="/account">
                        <button type="button" className="btn btn-outline-dark newspaper">
                            <Person /> Account
                        </button>
                    </Link>
                </li>
                <li id='links'>
                <Link to="/settings">
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