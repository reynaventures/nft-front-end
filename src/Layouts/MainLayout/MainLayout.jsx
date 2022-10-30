import React from "react";
import './mainLayout.scss';
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <div className="main">
            <Outlet/>
        </div>
    )
};

export default MainLayout;