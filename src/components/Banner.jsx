import { NavLink } from 'react-router-dom';
import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <>
            <div className=" relative bg-[#9538E2] text-center pb-40 md:pb-56 pt-12 md:pt-16 rounded-b-lg mb-44 md:mb-80">
                {/* Main Banner Content */}
                <div className="space-y-8">
                    <h1 className="text-white text-3xl md:text-5xl font-bold">
                        Upgrade Your Tech Accessorize with <br className="hidden md:block" /> Gadget Heaven Accessories
                    </h1>
                    <p className="text-white text-sm md:text-base font-medium px-4">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to <br className="hidden md:block" /> the coolest accessories, we have it all!
                    </p>
                    <NavLink to='/dashboard'>
                        <button className="bg-white text-[#9538E2] px-6 py-2 rounded-3xl text-lg md:text-xl font-bold hover:bg-gray-200 transition">
                            Shop Now
                        </button>
                    </NavLink>
                </div>

                {/* Featured Image */}
                <div className=" absolute bottom-[-150px] md:bottom-[-250px] left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/5 lg:w-2/5">
                    <div className='border p-6 bg-white/15 rounded-xl'>
                        <img src={bannerImg} alt="Featured Gadget" className="w-full rounded-xl shadow-lg" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Banner;