import React from 'react';
import { Link } from 'react-router-dom'


// import '../../styles/Dashboard.css';


function Works() {
    return (



        <div id='works' className="container" style={{ height: 800, minWidth: 1000, margin: '100px auto 0 300px' }}>
            <div className="row">
                <div id='titledash' className="col-5 " style={{ width: '200px', margin: '10px' }}>Works</div>
            </div>


            <div className="row" >
                <div className="card text-dark bg-light text-center mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Company Name</h5>
                        <p className="card-text">Title About the Sale</p>
                        <p className="card-text">Information</p>
                        <Link to="/postedwork">
                            <button type="button" className="btn btn-primary newspaper" >
                                View
                            </button>
                        </Link>
                    </div>


                </div>
                <div className="card text-dark bg-light text-center mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Company Name</h5>
                        <p className="card-text">Title About the Sale</p>
                        <p className="card-text">Information</p>
                        <a href="#viw" className="btn btn-primary">View</a>
                    </div>
                </div>
                <div className="card text-dark bg-light text-center mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Company Name</h5>
                        <p className="card-text">Title About the Sale</p>
                        <p className="card-text">Information</p>
                        <a href="#viw" className="btn btn-primary">View</a>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="card text-dark bg-light text-center mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Company Name</h5>
                        <p className="card-text">Title About the Sale</p>
                        <p className="card-text">Information</p>
                        <a href="#viw" className="btn btn-primary">View</a>
                    </div>
                </div>
                <div className="card text-dark bg-light text-center mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Company Name</h5>
                        <p className="card-text">Title About the Sale</p>
                        <p className="card-text">Information</p>
                        <a href="#viw" className="btn btn-primary">View</a>
                    </div>
                </div>
                <div className="card text-dark bg-light text-center mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Company Name</h5>
                        <p className="card-text">Title About the Sale</p>
                        <p className="card-text">Information</p>
                        <a href="#viw" className="btn btn-primary">View</a>
                    </div>
                </div>

            </div>

            <div className="row">



                <div className="card text-dark bg-light text-center mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{ marginTop: "30px" }}>New Sale</h5>

                        <Link to="/newwork">
                            <button type="button" className="btn btn-outline-dark newspaper" style={{ marginTop: "30px" }}>
                                Create
                            </button>
                        </Link>

                    </div>
                </div>

            </div>







        </div>


    );
}

export default Works;