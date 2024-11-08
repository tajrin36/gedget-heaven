import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import star from '../assets/star.png';
import ReactStars from "react-rating-stars-component";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { addToStoredCartList, addToStoredWishList } from "../utility/addToDB";

const ProductDetails = () => {
    const { product_id } = useParams();
    const allProductData = useLoaderData();
    const [products, setProduct] = useState({});
    const [wishlistDisabled, setWishlistDisabled] = useState(false);

    useEffect(() => {
        const singleProductData = allProductData.find(product => product.product_id === parseInt(product_id));
        setProduct(singleProductData);
    }, [allProductData, product_id]);

    const {
        product_image,
        product_title,
        price,
        availability,
        description,
        Specification = [],
        rating
    } = products;

    const handleAddToCart = (id) => {
        addToStoredCartList(id);
    };

    const handleAddToWishList = (id) => {
        addToStoredWishList(id);
        setWishlistDisabled(true);
    };

    return (
        <>
            <div className="bg-[#9538E2] md:mb-[] mb-[55rem] lg:mb-[26rem]">
                <div className="relative pb-24 md:pb-36 md:container md:mx-auto shadow-lg">
                    <div className="flex flex-col items-center justify-center space-y-4 pt-6">
                        <h2 className="text-[#FFF] text-[32px] font-bold">Product Details</h2>
                        <p className="md:w-[50%] text-center text-[#FFF] text-base font-normal">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                    </div>
                    <div className="absolute md:bottom-[-700px] bottom-[-750px] lg:bottom-[-400px] left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/5 lg:w-2/5">
                        <div className='bg-white border rounded-xl flex md:flex-col lg:flex-row flex-col justify-center items-center gap-4 p-5'>
                            <div className="p-4">
                                <img src={product_image} alt="" />
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-[#09080F] text-2xl font-semibold">{product_title}</h2>
                                <p className="text-black/80 text-lg font-semibold">Price: $ {price}</p>
                                <button className="btn btn-sm text-[#309C08] text-sm font-medium bg-[#eaf5e6]">
                                    {availability ? 'In Stock' : 'Out Of Stock'}
                                </button>
                                <p className="text-black/40 text-base font-semibold">{description}</p>
                                <div>
                                    <h2 className="text-[#09080F] text-base font-bold">Specification:</h2>
                                    {Specification.map((specs, idx) => (
                                        <li key={idx} className="list-none text-black/40 text-base font-semibold">
                                            {idx + 1}. {specs}
                                        </li>
                                    ))}
                                </div>
                                <div className="flex gap-2 items-center">
                                    <p className="text-[#09080F] text-base font-bold">Rating</p>
                                    <img className="w-5" src={star} alt="" />
                                </div>
                                <div className="flex items-center gap-3">
                                    <ReactStars
                                        count={5}
                                        onChange={rating}
                                        size={24}
                                        isHalf={true}
                                        emptyIcon={<i className="far fa-star"></i>}
                                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                                        fullIcon={<i className="fa fa-star"></i>}
                                        activeColor="#ffd700"
                                    />
                                    <p className="btn btn-xs text-black/80 text-xs font-medium">{rating}</p>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-3">
                                    <button
                                        onClick={() => handleAddToCart(product_id,price)}
                                        className="flex items-center gap-2 btn bg-[#9538E2]"
                                    >
                                        <p className="text-[#FFF] text-base md:text-lg font-bold">Add To Cart</p>
                                        <BsCart3 className="text-[#FFF] text-lg font-bold" />
                                    </button>
                                    <button
                                        onClick={() => handleAddToWishList(product_id)}
                                        className="border btn bg-white rounded-full border-black/20 p-2"
                                        disabled={wishlistDisabled}
                                    >
                                        <IoMdHeartEmpty className="text-2xl" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p>.</p>
        </>
    );
};

export default ProductDetails;
