import React from "react"
import { BrowserRouter } from "react-router-dom";
import RootRoute from "./Routes/RootRouter";
import GlobalNavMode from "./HOC/GlobalNavMode";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <GlobalNavMode>
                    <RootRoute/>
                </GlobalNavMode>
            </BrowserRouter>
        </React.Fragment>
    )
}

export default App;