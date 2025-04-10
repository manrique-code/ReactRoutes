import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App(): React.ReactNode {
    return (
        <>
            <BrowserRouter>
                <Header>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/vans"}>Vans</Link>
                </Header>
                <Routes>
                    {/*Here is defined the path of the page: "/contacts", "/about", "/store", amongst others! */}
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/about"} element={<About/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App