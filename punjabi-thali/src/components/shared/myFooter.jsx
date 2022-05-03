import React from "react";
import logo from '../../images/Punjabi-Thali-Logo.png'

function MyFooter (props) {

    return (
        <footer class="page-footer font-small">
            <div class="container text-center text-md-left">
                <div class="row">
                    <div class="col-lg">
                        <div class="text-center">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4 text-white">Get In Contact</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a class="text-white" href="tel:07495731335" >07495731335</a>
                                </li>
                                <li>
                                    <a class="text-white" >PunjabiThaliGravesend@Gmail.com</a>
                                </li>
                                <li>
                                    <a class="text-white" >Elm Hollow Old Road East, Gravesend</a>
                                </li>
                                <li>
                                    <a class="text-white" >Kent, DA12 1NQ United Kingdom</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr class="clearfix w-100 d-md-none"/>
                    <div class="col-lg">
                        <div class="text-center">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">&nbsp;</h5>
                            <ul class="list-unstyled">
                                <li>
                                </li>
                                <li>
                                    <a class="text-white" href="/menu">Menu</a>
                                </li>
                                <li>
                                    <a class="text-white" href="/">Home</a>
                                </li>
                                <li>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr class="clearfix w-100 d-md-none"/>
                    <div class="col-lg">
                        <h5 class="font-weight-bold text-uppercase mt-3 mb-4 text-white text-center">Follow Us!</h5>
                        <ul class="list-unstyled">
                            <li class="text-center">
                                <a target="_blank" href="https://instagram.com/thalipunjabi?igshid=gsk2clof2ar8"><i id="social-in" class="fab fa-instagram fa-2x social"></i></a>
                            </li>
                            <li class="text-center">
                                <a target="_blank" href="https://www.facebook.com/Punjabi-Thali-182634522631511/"><i id="social-fb" class="fab fa-facebook-square fa-2x social"></i></a>
                            </li>
                            <li class="text-center">
                                <a target="_blank" href="https://g.page/Punjabi-Thali-Gravesend?gm"><i id="social-tw" class="fab fa-google fa-2x social"></i></a>
                            </li>
                            <li class="text-center">
                                <a href="mailto:punjabithaligravesend@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-2x social"></i></a>
                            </li>
                        </ul>
                    </div>
                    <hr class="clearfix w-100 d-md-none"/>
                    <div class="col-lg">
                        <div class="text-center">
                            <h5 class="font-weight-bold text-uppercase mt-3 mb-4">&nbsp;</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="/"><img src={logo} style={{width : '100px'}}/></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div class="footer-copyright text-center text-white py-3">
                Website Created By <a class="text-white" href="https://36-boxes.com" target={"_blank"}>36-Boxes.com</a>
            </div>
        </footer>
    );

}

export default MyFooter