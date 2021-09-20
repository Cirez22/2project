import React, { useEffect, useState } from 'react';
import NavBarInterface from '../NavBarInterface';
import Sidebar from '../SideBar';
import { Link } from 'react-router-dom'
import { getNewWorkFromApi } from '../../../services/NewWorkService';
import axios from 'axios'


function NewWork() {



    const [newwork, setNewWork] = useState({
        name: '',
        title: '',
        description: ''
    });

    useEffect(() => {

    }, [])



    /*  
        - Add new Product (check for reference)
        - create object that will look like new work
        - add handleChange
        - add simple handleSubmit => por ahora console.log

    */

    //handle change
    const handleChange = (event) => {
        setNewWork({
            ...newwork,
            [event.target.name]: event.target.value
        })
        // console.log(`
        //     name: ${newwork.name},
        //     title: ${newwork.title},
        //     description: ${newwork.description},
        // `)
    }

    // handle submit
    const handleSubmit = (event) => {
        event.preventDefault();
        // postNewWorkToApi(newWork);
        // for submi
        // - hacer peticion post a la ruta declarada
        // - pasar el 'newwork' en el metodo post para postearlo/guardarlo
        axios.post('http://localhost:5000/api/newworks/newwork', newwork);
        // set form to blank after submit
        setNewWork({
            name: '',
            title: '',
            description: ''
        });
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



                        <form>

                            <div className="form-outline mb-1 w-50">
                                <textarea className="form-control" id="form4Example3" rows="1"
                                    value={newwork.name}
                                    onChange={handleChange}
                                    className="form-control"
                                    name="name"
                                    type="text"
                                    placeholder="Company Name">
                                </textarea>
                            </div>

                            <div className="form-outline mb-1 w-50">
                                <textarea className="form-control" id="form4Example3" rows="1"
                                    value={newwork.title}
                                    onChange={handleChange}
                                    className="form-control"
                                    name="title"
                                    type="text"
                                    placeholder="Title">
                                </textarea>

                            </div>

                            <div className="form-outline mb-4 ">
                                <textarea className="form-control" id="form4Example3" rows="4"
                                    value={newwork.description}
                                    onChange={handleChange}
                                    className="form-control"
                                    name="description"
                                    type="text"
                                    placeholder="Description">
                                </textarea>

                            </div>

                            <Link to="/worksview">
                                <button onClick={handleSubmit} type="submit" className="btn btn-primary btn-block mb-4">
                                    Post
                                </button>
                            </Link>

                        </form>

                    </div>
                </div>
            </div>
        </div>


    );
}

export default NewWork;