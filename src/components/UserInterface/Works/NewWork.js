import React from 'react';


// import '../../styles/Dashboard.css';


function NewWork() {
    return (
        <div id='newwork' className="container" style={{ height: 800, minWidth: 1000, margin: '100px auto 0 40px' }}>
            <div className="row">
                <div id='titledash' className="col-5 " style={{ width: '200px', margin: '10px' }}>New Work</div>
            </div>

            <form>
                <div class="form-outline mb-1 w-50">
                <textarea class="form-control" id="form4Example3" rows="1"></textarea>
                    <label class="form-label" for="form4Example1" style={{marginTop:"10px"}}>Company Name</label>
                </div>
                <div class="form-outline mb-1 w-50">
                <textarea class="form-control" id="form4Example3" rows="1"></textarea>
                    <label class="form-label" for="form4Example1" style={{marginTop:"10px"}}>Title</label>
                </div>

                <div class="form-outline mb-4 ">
                    <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                    <label class="form-label" for="form4Example3" style={{marginTop:"10px"}}>Message</label>
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">
                    Send
                </button>
                <button type="submit" class="btn btn-danger btn-block mb-4" style={{marginLeft:"20px"}}>
                    Delete
                </button>
            </form>

        </div>


    );
}

export default NewWork;