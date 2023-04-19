import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProductListPage from "./pages/ProductListPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";
import RequireAuth from "./components/RequireAuth";

export const Context = React.createContext({});

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("userToken")
    );
    
    return (
        <Context.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            <BrowserRouter>
                <div className="grid-container">
                    <Header />
                    <section className="content">
                        <Routes>
                            <Route element={<RequireAuth />}>
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/category/:category" element={<ProductListPage />} />
                                <Route path="/product/:id" element={<ProductPage />} />
                            </Route>
                            
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/login" element={<LoginPage />} /> 
                            <Route path="/" element={<HomePage />} />
                        </Routes>
                    </section>
                </div>
            </BrowserRouter>
        </Context.Provider>
    );
}

export default App;