import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function ProductListPage() {
    const params = useParams();
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadProductList = async () => {
            const res = await fetch(`http://localhost:4000/product/category/${params.category}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` }
            });
            const data = await res.json();
    
            //! TODO bad response handling
            if (res.status >= 400)
                return;
            
            setProducts(data);
            setIsLoading(false);
        };

        loadProductList();      
    }, [params.category]);


    if (isLoading) {
        return null;
    }

    return (
        <>
            <Sidebar />
            <ul className="products-list">
                {products.filter(product => product.category === params.category).map(product => 
                    <li key={product._id}>
                        <Link to={"/product/" + product._id}>
                            <img className="product-list-image" src={product.image_path} alt=""/>
                        </Link>
                        <div className="product-name">
                            <Link to={"/product/" + product._id}>{product.name}</Link>
                        </div>
                        <div className="product-price">{product.price} грн</div>
                    </li>
                )}
            </ul> 
        </>
    );
}

export default ProductListPage;