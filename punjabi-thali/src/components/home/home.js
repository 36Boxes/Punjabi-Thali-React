import React from "react";
import MyFooter from "../shared/myFooter";
import MyJumbotron from "../shared/MyJumbotron";
import MyNavbar from "../shared/myNavbar";
import ThreeTiles from "./threeTiles";

function Home (props) {

    return (
        <React.Fragment>
        <MyNavbar/>
        <div className="container">
            <br/>
        <MyJumbotron/>
        <ThreeTiles/>
        </div>
        <MyFooter/>
    </React.Fragment>
    );
}
export default Home