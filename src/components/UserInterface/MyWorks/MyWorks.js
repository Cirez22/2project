import React from 'react';
import { Link } from 'react-router-dom'


// import '../../styles/Dashboard.css';


function MyWorks() {
    return (
        <div id='works' className="container" style={{ height: 800, minWidth: 1000, margin: '100px auto 0 300px' }}>
            <div className="row">
                <div id='titledash' className="col-5 " style={{ width: '200px', margin: '10px' }}>My Sales</div>
            </div>

           
            <div className="row">
                <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "30%", marginRight:"10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Volt</h5>
                        <p className="card-text">Solar Panels</p>
                        <p className="card-text">We are looking to give 10.000 houses solar energy</p>
                        <Link to="/viewmyworks">
                        <a href="#viewmyworks" className="btn btn-primary">View</a>
                        </Link>
                    </div>
                </div>
                <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "30%", marginRight:"10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">SC</h5>
                        <p className="card-text">Car Seller</p>
                        <p className="card-text">Help us to sell 10 cars per month, 20% is yours</p>
                        <Link to="/viewmyworks">
                        <a href="#viewmyworks" className="btn btn-primary">View</a>
                        </Link>
                    </div>
                </div>
                <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "30%", marginRight:"10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">Cafe XIII </h5>
                        <p className="card-text">Speciality Coffee</p>
                        <p className="card-text">Expand, Help us reach more coffee shops around Florida.</p>
                        <Link to="/viewmyworks">
                        <a href="#viewmyworks" className="btn btn-primary">View</a>
                        </Link>
                    </div>
                </div>

            </div>

            

        </div>


    );
}

export default MyWorks;