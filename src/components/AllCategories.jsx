import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
import { useEffect, useState } from "react";


const AllCategories = () => {
    const products = useLoaderData();
    const { category } = useParams();
    // const [product, setProduct] = useState([]);

    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (category ===   "all" || !category) {
            // Show all products if category is "all" or undefined
            setFilteredProducts(products);
        } else {
            // Filter products by the selected category
            const filteredByCategories = products.filter(product => product.category ===   category);
            setFilteredProducts(filteredByCategories);
        }
        // console.log(filteredByCategories);
    }, [products, category])
    // console.log(products);
    return (
        <div className="basis-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                filteredProducts.map(product => <Product
                    key={product.product_id}
                    product={product}
                ></Product>)
            }
        </div>
    );
};

export default AllCategories;