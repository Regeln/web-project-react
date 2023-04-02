import { Link } from "react-router-dom";
import items from "../items";

function HomePage() {
    return (
        <div>
            <ul className="products-list">
                {items.products.map(product => 
                    <li>
                        <div className="product">
                            <Link to={"product/" + product._id}>
                                <img className="product-image" src={product.image} alt=""/>
                            </Link>
                            <div className="product-name">
                                <Link to={"/product/" + product._id}>{product.name}</Link>
                            </div>
                            <div className="product-price">{product.price} грн</div>
                        </div>
                    </li>
                )}
            </ul> 
        </div>
    );
}

export default HomePage;