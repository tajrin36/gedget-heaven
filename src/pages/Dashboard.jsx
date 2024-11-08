import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ImSortAmountDesc } from "react-icons/im";
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStoredCartList, getStoredWishList } from '../utility/addToDB';
import DashProduct from '../components/DashProduct';

const Dashboard = () => {

    const [cartList, setCartList] = useState([]);

    const [wishList, setWishList] = useState([]);

    const [sort,setSort] = useState('');

    const allProduct = useLoaderData();

    useEffect(() => {

        //cart
        const storedCartList = getStoredCartList();
        const storedCartListInt = storedCartList.map(id => parseInt(id));
        const cartProductList = allProduct.filter(product => storedCartListInt.includes(product.product_id));
        setCartList(cartProductList);

        //wishlist
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const wishProductList = allProduct.filter(product => storedWishListInt.includes(product.product_id));
        setWishList(wishProductList);
    }, [allProduct])

    const handleSortByPrice = sortType =>  {
        setSort(sortType);
        if(sortType ===   'price'){
            const sortList = [...  cartList].sort((a,b)=>  b.price - a.price);
            setCartList(sortList);
        }
    }

    return (
        <>
            <div className="bg-[#9538E2] pb-12">
                <div className='md:container md:mx-auto'>
                    <div className="flex flex-col items-center justify-center space-y-4 pt-6 ">
                        <h2 className="text-[#FFF] text-[32px] font-bold">Product Details</h2>
                        <p className="md:w-[50%] text-center text-[#FFF] text-base font-normal">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    </div>
                </div>

            </div>
            <div className='md:container md:mx-auto mt-10'>
                <Tabs>
                    <div className='text-center'>
                        <TabList>
                            <Tab><span className='text-[#9538E2] text-2xl font-semibold'>Cart</span></Tab>
                            <Tab><span className='text-[#9538E2] text-2xl font-semibold'>Wishlist</span></Tab>
                        </TabList>
                    </div>
                    <div className='flex items-center gap-3 justify-end'>
                        <p className='text-[#0B0B0B] text-2xl font-bold'>Total cost: $ 999.99</p>
                        <button onClick={()=>  handleSortByPrice('price')} className='flex gap-2 items-center btn rounded-2xl bg-white border border-[#9538E2] text-[#9538E2] text-lg font-semibold'>
                            <p>Sort by Price</p>
                            <ImSortAmountDesc />
                        </button>
                        <button className='btn rounded-2xl bg-[#9538E2] text-[#FFF] text-lg font-medium'>Purchase</button>
                    </div>

                    <TabPanel>
                        <div className=''>
                            {
                                cartList.map((product, idx) =>
                                    <DashProduct
                                        key={idx}
                                        product={product}
                                    ></DashProduct>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {
                            wishList.map((product, idx) =>
                                <DashProduct
                                    key={idx}
                                    product={product}
                                ></DashProduct>)
                        }
                    </TabPanel>
                </Tabs>
            </div>

        </>
    );
};

export default Dashboard;
