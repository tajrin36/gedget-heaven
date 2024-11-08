import PropTypes from 'prop-types'; 
import { RxCross1 } from "react-icons/rx";

const DashProduct = ({ product }) => {
    const {
        product_image,
        product_title,
        price,
        description,
    } = product;
    return (
        <div className="border p-5 bg-white rounded-xl my-3 flex justify-between">
            <div className="flex items-center gap-5">
                <div>
                    <img className="w-36" src={product_image} alt="" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-[#09080F] text-2xl font-semibold">{product_title}</h2>
                    <p className="text-black/60 text-lg font-medium">{description}</p>
                    <p className="text-black/80 text-lg font-semibold">Price: $ {price}</p>
                </div>

            </div>
            <div>
                <RxCross1 className="text-red-600" />
            </div>
        </div>
    );
};

DashProduct.propTypes = {
    product:PropTypes.object.isRequired,
}

export default DashProduct;