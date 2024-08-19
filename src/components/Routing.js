import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ListUsers from "./ListUsers";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

function Routing() {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/list" element={<ListUsers />} />
                    <Route path="/add" element={<AddUser />} />
                    <Route path="/edit" element={<EditUser />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default Routing;