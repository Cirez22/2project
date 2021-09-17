import React, { useEffect, useState } from 'react';
import NavBarInterface from '../NavBarInterface';
import Sidebar from '../SideBar';
import { Link } from 'react-router-dom'
import { getNewWorkFromApi } from '../../../services/NewWorkService';
import axios from 'axios'


function NewWork() {

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
        <div>
            <NavBarInterface />



            <div className="container-fluid">
                <div className="row">
                    <div>
                        <Sidebar />
                    </div>
                    <div id='newwork' className="container" style={{ height: 800, minWidth: 1000, margin: '100px auto 0 300px' }}>
                        <div className="row">
                            <div id='titledash' className="col-5 " style={{ width: '200px', margin: '10px' }}>New Work</div>
                        </div>


                        {newwork.map(n => (
                            <h2>: TESTING: {n.name}</h2>
                        ))}

                        <form>
                            <div class="form-outline mb-1 w-50">
                                <textarea class="form-control" id="form4Example3" rows="1"></textarea>
                                <label class="form-label" for="form4Example1" style={{ marginTop: "10px" }}>Company Name</label>
                            </div>
                            <div class="form-outline mb-1 w-50">
                                <textarea class="form-control" id="form4Example3" rows="1"></textarea>
                                <label class="form-label" for="form4Example1" style={{ marginTop: "10px" }}>Title</label>
                            </div>

                            <div class="form-outline mb-4 ">
                                <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                                <label class="form-label" for="form4Example3" style={{ marginTop: "10px" }}>Message</label>
                            </div>

                            <Link to="/worksview">
                                <button type="submit" class="btn btn-primary btn-block mb-4">
                                    Post
                                </button>
                            </Link>
                            <button type="submit" class="btn btn-danger btn-block mb-4" style={{ marginLeft: "20px" }}>
                                Delete
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>


    );
}

export default NewWork;