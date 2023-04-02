import { useParams } from "react-router-dom";
import items from "../items";

function ProductPage() {
    const params = useParams();
    const product = items.products.find(item => item._id === params.id);
    return (
        <div className="product-content">
            <div className="product-image">
                <img src={product.image} alt="" />
            </div>
            <div className="product-info">
                <h2 className="product-info-name">{product.name}</h2>
                <div className="product-info-price">
                    <p>{product.price} грн</p>
                </div>
                <div className="product-info-description">
                    <p>
                        Description product id: {product._id}. 
                    </p>
                </div>
                <button className="product-info-add-to-cart" type="button">
                    Додати до кошику
                </button>
            </div>
        </div>
    );
}

export default ProductPage;