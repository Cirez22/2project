import { Link } from 'react-router-dom'


import axios from 'axios'
import React, { useEffect, useState } from 'react';




function Works() {

    const [newwork, setWork] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const response = await axios('http://localhost:5000/api/newworks/newwork');
            setWork(response.data);
        } catch (error) {
            console.log("Server not working")
        }
    }


    return (



        <div id='works' className="container" style={{ height: 800, minWidth: 1000, margin: '100px auto 0 300px' }}>
            <div className="row">
                <div id='titledash' className="col-5 " style={{ width: '200px', margin: '10px' }}>Works</div>
            </div>


            <div className="row" >

                {newwork.map(n => (
                    <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "30%", marginRight: "10px" }}>
                        <div className="card-body">
                            <h5 className="card-title">


                                <h2>{n.name}</h2>
                                <p className="card-text">
                                    {n.title}
                                </p>
                                <p className="card-text">
                                    {n.description}
                                </p>

                            </h5>
                            <Link to="/postedwork">
                                <button type="button" className="btn btn-primary newspaper" >
                                    View
                                </button>
                            </Link>
                        </div>


                    </div>
                ))}
                

            </div>

            <div className="row">
                {/* <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title">
                            {newwork.map(n => (
                                <h2>: TESTING: {n.name}</h2>
                            ))}
                        </h5>
                        <p className="card-text">Title About the Sale</p>
                        <p className="card-text">Information</p>
                        <a href="#viw" className="btn btn-primary">View</a>
                    </div>
                </div> */}

                <div className="card text-dark bg-light text-center mb-3 border-left-primary shadow h-100 py-2" style={{ width: "30%", marginRight: "10px" }}>
                    <div className="card-body">
                        <h5 className="card-title" style={{ marginTop: "30px" }}>New Sale</h5>

                        <Link to="/newwork">
                            <button type="button" className="btn btn-outline-dark newspaper" style={{ marginTop: "50px" }}>
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