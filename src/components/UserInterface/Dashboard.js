import React from 'react';
import { Coin, Wallet, Cart } from 'react-bootstrap-icons';



import '../../styles/Dashboard.css';


function Dashboard() {
    return (
        <div id='dashboard' className="container" style={{ height: 800, minWidth: 1000, margin: '100px auto 0 300px' }}>
            <div className="row">
                <div id='titledash' className="col-5" style={{ width: '200px', margin: '10px' }}>Dashboard</div>
            </div>

            <div className="row">
                <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text mb-1">
                                        Monthly Earnings </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$ 43,013</div>
                                </div>
                                <div className="col-auto">
                                    <i className='icon'><Coin/></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text mb-1">
                                        Total Earnings </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$ 1,120,291</div>
                                </div>
                                <div className="col-auto">
                                    <i className='icon'><Wallet /></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><div className="col-xl-3 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-primary text mb-1">
                                        Products </div>
                                    <div className="h5 mb-0 font-weight-bold text-gray-800">1349</div>
                                </div>
                                <div className="col-auto">
                                    <i className='icon'><Cart /></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className="col-lg-6 mb-4">

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                    </div>
                    <div className="card-body">
                        <h4 className="small font-weight-bold">Server Migration <span className="float-right">20%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-danger" role="progressbar" style={{ width: " 20%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Sales Tracking <span className="float-right">40%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: " 40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Customer Database <span className="float-right">60%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar" role="progressbar" style={{ width: " 60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Payout Details <span className="float-right">80%</span></h4>
                        <div className="progress mb-4">
                            <div className="progress-bar bg-info" role="progressbar" style={{ width: " 80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 className="small font-weight-bold">Account Setup <span className="float-right">Complete!</span></h4>
                        <div className="progress">
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: " 100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
                  
            </div>

            <div className="col-xl-8">
          <div className="card">
            <div className="card-header border-0">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="mb-0">Page visits</h3>
                </div>
                <div className="col text-right">
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table align-items-center table-flush">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Page name</th>
                    <th scope="col">Visitors</th>
                    <th scope="col">Unique users</th>
                    <th scope="col">Bounce rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      /argon/
                    </th>
                    <td>
                      4,569
                    </td>
                    <td>
                      340
                    </td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3"></i> 46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      /argon/index.html
                    </th>
                    <td>
                      3,985
                    </td>
                    <td>
                      319
                    </td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3"></i> 46,53%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      /argon/charts.html
                    </th>
                    <td>
                      3,513
                    </td>
                    <td>
                      294
                    </td>
                    <td>
                      <i className="fas fa-arrow-down text-warning mr-3"></i> 36,49%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      /argon/tables.html
                    </th>
                    <td>
                      2,050
                    </td>
                    <td>
                      147
                    </td>
                    <td>
                      <i className="fas fa-arrow-up text-success mr-3"></i> 50,87%
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      /argon/profile.html
                    </th>
                    <td>
                      1,795
                    </td>
                    <td>
                      190
                    </td>
                    <td>
                      <i className="fas fa-arrow-down text-danger mr-3"></i> 46,53%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>





        </div>








    );
}

export default Dashboard;