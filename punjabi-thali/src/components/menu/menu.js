import React from "react";
import MyFooter from "../shared/myFooter";
import MyNavbar from "../shared/myNavbar";
import { NonVeg, Veg, Sides, Appetizers } from "./menuData";
import MenuJumbotron from "./MenuJumbotron";
import Lemon from '../../images/spices/lemon-solid.svg'
import Pepper1 from '../../images/spices/pepper1.svg'
import Pepper2 from '../../images/spices/pepper2.svg'
import Pepper3 from '../../images/spices/pepper3.svg'
import Pepper4 from '../../images/spices/pepper4.svg'




function Menu (props) {

    const appetizers = []
    for (const item of Appetizers) {
        if (item.spice === "5"){
            appetizers.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "4"){
            appetizers.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "3"){
            appetizers.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "2"){
            appetizers.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "1"){
            appetizers.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const nonVeg = []
    for (const item of NonVeg) {
        if (item.spice === "5"){
            nonVeg.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "4"){
            nonVeg.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "3"){
            nonVeg.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "2"){
            nonVeg.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "1"){
            nonVeg.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const veg = []
    for (const item of Veg) {
        if (item.spice === "5"){
            veg.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "4"){
            veg.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "3"){
            veg.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "2"){
            veg.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "1"){
            veg.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
    }


    const sides = []
    for (const item of Sides) {
        if (item.spice === "5"){
            sides.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "4"){
            sides.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "3"){
            sides.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "2"){
            sides.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (item.spice === "1"){
            sides.push(
                <div class="col-md-4">
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-header">{ item.title } <a class="float-right">£{ item.price }</a></div>
                        <div class="card-body text-center">
                            <p class="card-text">{ item.description }</p>
                                <div class="row">
    
                                        
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Lemon} style={{width : '20px', height : '20px'}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper1} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper2} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
    
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper3} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
                                            <div class="col">
                                                <label class="label_item" for="{{value}}{{ forloop.parentloop.counter }}"> <img class="lemonit" src={Pepper4} style={{width : '20px', height : '20px', opacity : 0.3}}/> </label>
                                            </div>
    
                                </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    

    return (
        <React.Fragment>
            <MyNavbar/>
            <div className="container">
                <MenuJumbotron/>
            </div>
            <div className="container">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="btn btn-lg btn-block bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Appetizers
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="row">
                                {appetizers}
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="btn btn-lg btn-block bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Non-Vegetarian
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="row">
                                {nonVeg}
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="btn btn-lg btn-block bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Vegetarian
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="row">
                                {veg}
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="btn btn-lg btn-block bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                Sides
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="row">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MyFooter/>
        </React.Fragment>
    );

}

export default Menu