import React, {useEffect, useState} from 'react';
import '../assets/css/blog.css'
import CategoryList from "../components/CategoryList";
import PostList from "../components/PostList";
import {Link, Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import Subcategory from "./Subcategory";
import {fetch} from "../api/api";

const Category = () => {
    const {id} = useParams();
    const {url, path} = useRouteMatch();
    const [subcategories, setSubcategories] = useState([]);
    useEffect(() => {
        fetch(`/categories/${id}`, (category) => {
            setSubcategories(category.subcategories)
        })
    }, [id])
    return (
        <>
            <div className="container">
                <h2 className="page-title">Pet Notícias</h2>
            </div>
            <CategoryList/>
            <ul className="list-categories container flex">
                {
                    subcategories.map((subcategory) => (
                        <li className={`list-categories_category list-categories_category-${id}`} key={subcategory}>
                            <Link to={`${url}/${subcategory.id}`}>
                                {subcategory.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Subcategory />
            <Switch>
                <Route exact path={`${path}/`}>
                    <PostList url={`/posts?category=${id}`} />
                </Route>
                <Route path={`${path}/:subcategory`}>
                    <Subcategory />
                </Route>
                
            </Switch>
        </>
    );
};

export default Category;
