import React from "react";
import { Outlet } from "react-router-dom";
import HomeNav from "../../Components/HomeNav";
import HomeMusic from "../../Components/HomeMusic";

function MainLayout() {
    return (
        <React.Fragment>
            <HomeNav/>
            <Outlet/>
            <HomeMusic/>
        </React.Fragment>
    )
};

export default MainLayout;