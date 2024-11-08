import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {product_image,
        product_title,
        price,
        product_id,
    } = product;
    return (
        <div className="border p-5 rounded-xl">
            <div className="border items-center flex justify-center p-2 bg-gray-100">
                <img className="h-60" src={product_image} alt="" />
            </div>
            <div className="space-y-3">
                <h2 className="mt-4 text-[#09080F] text-2xl font-semibold">{product_title}</h2>
                <p className="text-gray-500">Price: {price}</p>
                <Link to={`/product/${ product_id}`}><button className="text-[#9538E2] btn bg-white border-2 border-[#9538E2] rounded-2xl">View Details</button></Link>
            </div>
        </div>
    );
};

Product.propTypes = {
    product:PropTypes.object.isRequired,
}

export default Product;