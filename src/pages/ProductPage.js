import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductPage() {
    const params = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadProduct = async () => {
            const res = await fetch(`http://localhost:4000/product/${params.id}`)
            const data = await res.json();
    
            //! TODO bad response handling
            if (res.status >= 400)
                return;
            
            setProduct(data);
            setIsLoading(false);
        }

        loadProduct();
    }, [params.id]);

    const handleAddToCart = () => {
        console.log(product);
        alert("Товар добавлено в корзину");
    }


    if (isLoading) {
        return null;
    }

    return (
        <div className="product-content">
            <img className="product-image" src={product.image_path} alt={product.category + " image"} />
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
                <button className="product-info-add-to-cart" onClick={handleAddToCart} type="button">
                    Додати до кошику
                </button>
            </div>
        </div>
    );
}

export default ProductPage;