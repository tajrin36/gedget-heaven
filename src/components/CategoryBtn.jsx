import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const CategoryBtn = ({ categoryData }) => {
    // console.log(categoryData);
    return (
        <div className="basis-[20%]">
            <div className="flex flex-col border items-center justify-center p-4 rounded-lg ">
                {/* "All Products" Button */}
                <NavLink
                    to="/category/all"
                    className={({ isActive }) =>
                        isActive
                            ? "btn mb-4 rounded-xl bg-purple-500 text-white" // Active styles
                            : "btn mb-4 rounded-xl bg-gray-200 text-black" // Inactive styles
                    }
                >
                    All Product
                </NavLink>

                {/* Category Buttons */}
                {categoryData.map(category => (
                    <NavLink
                        key={category.category}
                        to={`/category/${category.category}`}
                        className={({ isActive }) =>
                            isActive
                                ? "btn mb-4 rounded-xl bg-purple-500 text-white" // Active styles
                                : "btn mb-4 rounded-xl bg-gray-200 text-black" // Inactive styles
                        }
                    >
                        {category.category}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

CategoryBtn.propTypes = {
    categoryData: PropTypes.object.isRequired,
}

export default CategoryBtn;