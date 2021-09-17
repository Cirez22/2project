import React from 'react';




const TextAbout = () => {
    return (
        <header className="bg-white py-5">
            <div className="container px-5">
                <div className="row gx-5 align-items-center justify-content-center">
                    <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src="https://cdn.dribbble.com/users/19849/screenshots/13934663/media/f55bf923be38e4fc1b77b53b51a51e07.png?compress=1&resize=400x300" alt="..." /></div>
                    <div className="col-lg-8 col-xl-7 col-xxl-6">
                        <div className="my-5 text-center text-xl-start">
                            <h1 className="display-1 fw-bolder text-dark mb-2">About</h1>
                            <p className="lead fw-normal text-dark-50 mb-4">
                            We are a start up that connects companies with people so that they can sell their products or projects and get a commission.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default TextAbout;