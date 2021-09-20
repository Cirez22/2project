import React from 'react';
import NavBarInterface from '../../UserInterface/NavBarInterface';
import SideBar from '../../UserInterface/SideBar';




function ViewMyWorks() {
    return (
        <div>
            <NavBarInterface />

            <div className="container-fluid">
                <div className="row">
                    <div>
                        <SideBar />
                    </div>


                    <div id='viewmyworks' className="container" style={{ height: 800, minWidth: 1000, margin: '100px auto 0 300px' }}>
                        <div className="row">
                            <div id='titledash' className="col-5 " style={{ width: '200px', margin: '10px' }}>My Sales</div>
                        </div>


                        <div className="row">
                            <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "30%", marginRight: "10px" }}>
                                <div className="card-body">
                                    <img src="https://cms.qz.com/wp-content/uploads/2021/01/2020-11-09T000000Z_661104130_RC2DZJ9ALD02_RTRMADP_3_AUSTRALIA-RENEWABLES-e1613940440657.jpg?quality=75&strip=all&w=1200&h=900&crop=1" class="card-img-top" alt="..." />
                                    <h5 className="card-title" style={{ marginTop: "20px" }}>Volt</h5>
                                    <p className="card-text">Solar Panels</p>
                                    <p className="card-text">We are looking to give 10.000 houses solar energy</p>
                                </div>
                            </div>
                            <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "30%", marginRight: "10px" }}>
                                <div className="card-body">
                                    <img src="https://www.ford.com/is/image/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2021/collections/dm/2020_GT500_08-08-19-3Q_Front_bro.tif?croppathe=1_21x9&wid=1440" class="card-img-top" alt="..." />
                                    <h5 className="card-title" style={{ marginTop: "20px" }}>SC</h5>
                                    <p className="card-text">Car Seller</p>
                                    <p className="card-text">Help us to sell 10 cars per month, 20% is yours</p>
                                </div>
                            </div>
                            <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "30%", marginRight: "10px" }}>
                                <div className="card-body">
                                    <img src="https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2017/11/1140-coffee-lovers-aarp-esp.imgcache.rev.web.900.518.jpg" class="card-img-top" alt="..." />
                                    <h5 className="card-title" style={{ marginTop: "20px" }}>Cafe XIII </h5>
                                    <p className="card-text">Speciality Coffee</p>
                                    <p className="card-text">Expand, Help us reach more coffee shops around Florida.</p>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
            </div>
        </div>


    );
}

export default ViewMyWorks;