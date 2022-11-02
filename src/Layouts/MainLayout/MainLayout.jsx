import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../../Components/MainNav";
import Music from "../../Components/Music";

function MainLayout() {
    return (
        <React.Fragment>
            <MainNav/>
            <Outlet/>
            <Music/>
        </React.Fragment>
    )
};

export default MainLayout;