import React from 'react';


import '../../styles/Dashboard.css';


function Dashboard() {
    return (
        <div id='dashboard' className="container" style={{ height: 800, minWidth: 1000, margin: '100px auto 0 300px' }}>
            <div className="row">
                <div id='titledash' className="col-5" style={{ width: '200px', margin: '10px' }}>Dashboard</div>
            </div>

            <div className="row">
                <div className="card text-dark bg-success mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-header text-center"><h2>Title</h2></div>
                    <div className="card-body">
                        <h3 className="text-center">300 Sales</h3>
                    </div>
                </div>
                <div className="card text-dark bg-danger mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-header text-center"><h2>Title</h2></div>
                    <div className="card-body">
                        <h3 className="text-center">10 Sales</h3>
                    </div>
                </div>
                <div className="card text-dark bg-warning mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-header text-center"><h2>Title</h2></div>
                    <div className="card-body">
                        <h3 className="text-center">120 Sales</h3>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="card text-dark bg-success mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-header text-center"><h2>Title</h2></div>
                    <div className="card-body">
                        <h3 className="text-center">300 Sales</h3>
                    </div>
                </div>
                <div className="card text-dark bg-danger mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-header text-center"><h2>Title</h2></div>
                    <div className="card-body">
                        <h3 className="text-center">10 Sales</h3>
                    </div>
                </div>
                <div className="card text-dark bg-warning mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-header text-center"><h2>Title</h2></div>
                    <div className="card-body">
                        <h3 className="text-center">120 Sales</h3>
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="card text-dark bg-success mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-header text-center"><h2>Title</h2></div>
                    <div className="card-body">
                        <h3 className="text-center">300 Sales</h3>
                    </div>
                </div>
                <div className="card text-dark bg-danger mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-header text-center"><h2>Title</h2></div>
                    <div className="card-body">
                        <h3 className="text-center">10 Sales</h3>
                    </div>
                </div>
                <div className="card text-dark bg-warning mb-3" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-header text-center"><h2>Title</h2></div>
                    <div className="card-body">
                        <h3 className="text-center">120 Sales</h3>
                    </div>
                </div>

            </div>



        </div>


    );
}

export default Dashboard;