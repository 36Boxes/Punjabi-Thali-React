import React from "react";
import stars from '../../images/rating5.png'

function ThreeTiles (props) {

    return (
        <div class="row">
            <div class="col-md">
                <div class="card text-white bg-dark mb-3">
                    <div class="card-header text-center">Cooking Hours</div>
                    <div class="card-body text-center">
                        <p>Please order 24 HOURS IN ADVANCE!</p>
                        <div className="row">
                            <div className="col">
                                <p>Monday</p>
                            </div>
                            <div className="col">
                                <p>Closed</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Tuesday</p>
                            </div>
                            <div className="col">
                                <p>18:00 - 22:00</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Wednesday</p>
                            </div>
                            <div className="col">
                                <p>18:00 - 22:00</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Thursday</p>
                            </div>
                            <div className="col">
                                <p>Closed</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Friday</p>
                            </div>
                            <div className="col">
                                <p>18:00 - 22:00</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Saturday</p>
                            </div>
                            <div className="col">
                                <p>10:00 - 22:00</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Sunday</p>
                            </div>
                            <div className="col">
                                <p>10:00 - 22:00</p>
                            </div>
                        </div>
                    </div>
        
                </div>
            </div>
            <div class="col-md">
                <div class="card text-white bg-dark mb-3">
                    <div class="card-header text-center">Catering</div>
                    <div class="card-body text-center">
                        <p class="card-text">Along with providing a service for home cooked food delivered to your doorstep we also provide a catering service that can suit parties call us for more info!</p>
                        <a href="tel:07495731335" class="btn btn-light">Call Now</a>
                    </div>
        
                </div>
            </div>
            <div class="col-md">
                <div class="card text-white bg-dark mb-3">
                    <div class="card-header text-center">Hygiene Rating</div>
                    <img src={stars} class="card-img-top" alt="..."/>
                    <div class="card-body text-center">
                        <p class="card-text">We hate germs as much as you do! We ensure <strong>ALL</strong> our food is handled hygienically!</p>
                    </div>
        
                </div>
            </div>
        </div>
    )

}

export default ThreeTiles;