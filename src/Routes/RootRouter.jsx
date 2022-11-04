import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constans/routes';
import MainLayout from '../Layouts/MainLayout/MainLayout';
import Home from '../Scenes/Home';
import Shop from '../Scenes/Shop';
import MindMap from '../Scenes/MindMap';
import License from '../Scenes/License';
import Privacy from '../Scenes/PrivacyPolicy';

function RootRoute() {
    return (
        <Routes>
            <Route path={ROUTES.homePage} element={<MainLayout/>}>
                <Route path={ROUTES.homePage} element={<Home/>}></Route>
            </Route>
            <Route path={ROUTES.shopPage} element={<MainLayout/>}>
                <Route path={ROUTES.shopPage} element={<Shop/>}></Route>
            </Route>
            <Route path={ROUTES.mindMapPage} element={<MainLayout/>}>
                <Route path={ROUTES.mindMapPage} element={<MindMap/>}></Route>
            </Route>
            <Route path={ROUTES.license} element={<MainLayout/>}>
                <Route path={ROUTES.license} element={<License/>}></Route>
            </Route>
            <Route path={ROUTES.privacyPolicy} element={<MainLayout/>}>
                <Route path={ROUTES.privacyPolicy} element={<Privacy/>}></Route>
            </Route>
            <Route path='*' element={<h2 className='erorr--not-found'>Ресурс не найден!</h2>}></Route>
        </Routes>
    )
}

export default RootRoute;