import React from "react";

function HomePage() {
    return (
        <div>
            <ul className="products-list">
                <li>
                    <div className="product">
                        <img className="product-image" src="images/p1.jpg" alt=""/>
                        <div className="product-name">
                            <a href="product.html">Папероні</a>
                        </div>
                        <div className="product-price">150 грн</div>
                    </div>
                </li>
                <li>
                    <div className="product">
                        <img className="product-image" src="images/p2.jpg" alt=""/>
                        <div className="product-name">
                            <a href="product.html">Американа</a>
                        </div>
                        <div className="product-price">140 грн</div>
                    </div>
                </li>
                <li>
                    <div className="product">
                        <img className="product-image" src="images/p3.jpg" alt=""/>
                        <div className="product-name">
                            <a href="product.html">Прошуто</a>
                        </div>
                        <div className="product-price">120 грн</div>
                    </div>
                </li>
            </ul> 
        </div>
    )
}

export default HomePage;