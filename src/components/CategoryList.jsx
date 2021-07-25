import React, {useEffect, useState} from 'react';
import {fetch} from "../api/api";
import '../assets/css/blog.css'
import {Link} from "react-router-dom";

const CategoryList = ({url}) => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch(url, setCategories);
    }, [url]);
    
    return (
        <ul className="list-categories container flex">
            {
                categories.map((category) => (
                    <Link to={`/category/${category.id}`}>
                        <li className={`list-categories_category list-categories_category-${category.id}`}>
                            {category.name}
                        </li>
                    </Link>
                ))
            }
        </ul>
    );
};

export default CategoryList;
