import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";



function App() {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="header">
                    <div className="header-menu">
                        <Link to="/">foodLike</Link>
                    </div>
                    <div className="header-links">
                        <a href="signin.html">Реєстрація</a>
                        <a href="cart.html">Корзина</a>
                    </div>
                </header>
                <section>
                    <div className="content">
                        <Routes>
                            <Route path="/product/:id" element={<ProductPage />} />
                            <Route path="/" element={<HomePage />} />
                        </Routes>
                    </div>
                </section>
            </div>
        </BrowserRouter>
    );
}

export default App;