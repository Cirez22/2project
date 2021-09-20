import React from 'react';
import { Link } from 'react-router-dom'




function Messages() {
    return (
        <div id='messages' className="container" style={{ height: 800, minWidth: 1000, margin: '100px auto 0 300px' }}>
            <div className="row">
                <div id='titledash' className="col-5 " style={{ width: '200px', margin: '10px' }}>Messages</div>
            </div>


            <div className="row">
                <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "45%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Volt</h5>

                        <div className="card" style={{ marginBottom: '10px' }}>
                            <div className="card-body">
                                I have a buyer
                            </div>
                        </div>

                        <Link to="/viewmessage">
                        <a href="#viewmessage" className="btn btn-primary">View</a> 
                        </Link>
                    </div>
                </div>
                <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "45%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">SC</h5>

                        <div className="card" style={{ marginBottom: '10px' }}>
                            <div className="card-body">
                                I need four mustgans
                            </div>
                        </div>

                        <Link to="/viewmessage">
                        <a href="#viewmessage" className="btn btn-primary">View</a> 
                        </Link>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "45%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Showshop</h5>

                        <div className="card" style={{ marginBottom: '10px' }}>
                            <div className="card-body">
                                Do you have a powerpoint?
                            </div>
                        </div>

                        <Link to="/viewmessage">
                        <a href="#viewmessage" className="btn btn-primary">View</a> 
                        </Link>
                    </div>
                </div>
                <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "45%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">CAFE XIII</h5>

                        <div className="card" style={{ marginBottom: '10px' }}>
                            <div className="card-body">
                                I need samples of your coffees
                            </div>
                        </div>
                        <Link to="/viewmessage">
                        <a href="#viewmessage" className="btn btn-primary">View</a> 
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "45%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Manchester U </h5>

                        <div className="card" style={{ marginBottom: '10px' }}>
                            <div className="card-body">
                                Hi i am Cristiano
                            </div>
                        </div>

                        <Link to="/viewmessage">
                        <a href="#viewmessage" className="btn btn-primary">View</a> 
                        </Link>
                    </div>
                </div>
                <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "45%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">F1</h5>

                        <div className="card" style={{ marginBottom: '10px' }}>
                            <div className="card-body">
                                Go RedBull
                            </div>
                        </div>

                        <Link to="/viewmessage">
                        <a href="#viewmessage" className="btn btn-primary">View</a> 
                        </Link>
                    </div>
                </div>
            </div>




        </div>


    );
}

export default Messages;