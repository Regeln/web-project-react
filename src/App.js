import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProductsListPage from "./pages/ProductsListPage";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem("userToken")
    );

    return (
        <BrowserRouter>
            <div className="grid-container">
                <Header />
                <section>
                    <div className="content">
                        <Routes>
                            {isLoggedIn && 
                                <>
                                    <Route path="/cart" element={<CartPage />} />
                                    <Route path="/category/:id" element={<ProductsListPage />} />
                                    <Route path="/product/:id" element={<ProductPage />} />
                                </> 
                            }
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/login" element={<LoginPage />} /> 
                            <Route path="/" element={<HomePage />} />
                        </Routes>
                    </div>
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;