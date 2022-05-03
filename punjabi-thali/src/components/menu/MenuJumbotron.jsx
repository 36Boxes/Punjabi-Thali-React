import React from "react";
import somosa from '../../images/cropped_samosa.jpg'
function MenuJumbotron (props) {

    return (
        <div class="jumbotron p-0 bg-dark">
            <div class="view overlay rounded-top">
                <img src={somosa} class="img-fluid" alt="Sample image"/>
                <a href="#">
                    <div class="mask rgba-white-slight"></div>
                </a>
            </div>
            <div class="card-body text-center text-white mb-3">
                <h3 class="card-title h3 my-4">Please order <strong>24 Hours</strong> in Advance</h3>
                <p class="card-text py-2">Curries are cooked to the specified spice rating unless told otherwise</p>
            </div>
        </div>
    )
}

export default MenuJumbotron;
