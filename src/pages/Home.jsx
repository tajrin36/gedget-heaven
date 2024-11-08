import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import CategoryBtn from "../components/CategoryBtn";

const Home = () => {
    const categoryData = useLoaderData();
    return (
        <div className="md:mx-auto md:container">
            <Banner></Banner>
            <h2 className="text-center text-[#0B0B0B] text-[40px] font-bold mb-5">Explore Cutting-Edge Gadgets</h2>
            {/* <AllCategories categoryData={categoryData}></AllCategories> */}
            <div className="flex gap-4">
                <CategoryBtn categoryData={categoryData}></CategoryBtn>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;