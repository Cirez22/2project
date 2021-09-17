import React from 'react';

import '../styles/Contact.css';

function Contact() {
    return (
        <div id="contact">

            <div class="contact-clean">
                <form onsubmit="return false;">
                    <h2 class="text-center">Contact us</h2>
                    <div class="form-group"><input class="form-control" type="text" name="name" placeholder="Name" /></div>
                    <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email" /></div>
                    <div class="form-group"><textarea class="form-control" name="message" placeholder="Message" rows="14"></textarea></div>
                    <div class="form-group"><button class="btn btn-primary" type="submit">send </button></div>
                </form>
            </div>

            <footer class="bg-dark py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Copyright © Your Website 2021</div></div>
                    <div class="col-auto">
                        <a class="link-light small" href="#!">Privacy</a>
                        <span class="text-white mx-1">·</span>
                        <a class="link-light small" href="#!">Terms</a>
                    </div>
                </div>
            </div>
        </footer>

        </div>


    );
}

export default Contact;