import React from "react";
import curry from '../../images/chickenCurry.jpg'

function MyJumbotron (props) {

    return (
        <div className="container">
            <div class="jumbotron p-0 bg-dark">
                <div class="view overlay rounded-top">
                    <img src={curry} class="img-fluid" alt="Sample image"/>
                    <a href="#">
                        <div class="mask rgba-white-slight"></div>
                    </a>
                </div>
                <div class="card-body text-center text-white mb-3">
                    <h3 class="card-title h3 my-4"><strong>Home Cooked Food With A Difference</strong></h3>
                    <p class="card-text py-2">PLEASE ORDER 24 HOURS IN ADVANCE!</p>
                    <a href="/menu" class="btn btn-light">Check Out Our Menu!</a>
                </div>
            </div>
        </div>
    )

}

export default MyJumbotron