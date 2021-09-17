import React from 'react';
import { Link } from 'react-router-dom'
import NavBarInterface from '../NavBarInterface';
import Sidebar from '../SideBar';




function PostedWork() {
    return (
        <div>
            <NavBarInterface />

            <div className="container-fluid">
                <div className="row">
                    <div>
                        <Sidebar />
                    </div>
                    <div id='postedwork' className="container" style={{ height: 800, minWidth: 1000, margin: '100px auto 0 300px' }}>
                        <div className="row">
                            <div id='titledash' className="col-5 " style={{ width: '200px', margin: '10px' }}>Posted Work</div>
                        </div>

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

                            {/* <button type="submit" class="btn btn-primary btn-block mb-4">
                    Edit
                </button> */}
                            <Link to="/worksview">
                                <button type="submit" class="btn btn-success btn-block mb-4" style={{ marginLeft: "20px" }}>
                                    Save
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

export default PostedWork;