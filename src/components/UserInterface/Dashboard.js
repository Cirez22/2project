import React from 'react';


import '../../styles/Dashboard.css';


function Dashboard() {
    return (
        <div id='dashboard' className="container" style={{ height: 800, minWidth: 1000, margin: '100px auto 0 300px' }}>
            <div className="row">
                <div id='titledash' className="col-5" style={{width:'200px', margin: '10px' }}>Dashboard</div>
            </div>

            <div className="row">
                <div className="card text-white bg-success mb-3" style={{ width: "30%", marginRight:"10px" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Success card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card text-white bg-danger mb-3" style={{ width: "30%", marginRight:"10px" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Danger card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card text-dark bg-warning mb-3" style={{ width: "30%", marginRight:"10px" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Warning card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>
               
            <div className="row">
                <div className="card text-white bg-success mb-3" style={{ width: "30%", marginRight:"10px" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Success card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card text-white bg-danger mb-3" style={{ width: "30%", marginRight:"10px" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Danger card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card text-dark bg-warning mb-3" style={{ width: "30%", marginRight:"10px" }}>
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h5 className="card-title">Warning card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>

        </div>


    );
}

export default Dashboard;