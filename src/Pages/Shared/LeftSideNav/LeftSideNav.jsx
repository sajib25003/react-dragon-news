import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('categories.json')
         .then(res => res.json())
         .then(data => setCategories(data))
    },[])


    return (
        <div className="p-4">
            <div className=" space-y-4">
                <h2 className=" text-2xl font-bold">All category</h2>
                {
                    categories.map(category => <NavLink key={category.id} to={`/category/${parseInt(category.id)+1}`}
                    className="block font-semibold text-xl" >
                        {category.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;