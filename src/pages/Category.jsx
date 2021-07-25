import React from 'react';
import '../assets/css/blog.css'
import CategoryList from "../components/CategoryList";
import PostList from "../components/PostList";
import {Route, useParams, useRouteMatch} from "react-router-dom";

const Category = () => {
    const {id} = useParams();
    const {path} = useRouteMatch();
    return (
        <>
            <div className="container">
                <h2 className="page-title">Pet Notícias</h2>
            </div>
            <CategoryList  url={'/categories'}/>
            {/*<Route exact path={`/category/${id}`}>*/}
            <Route exact path={`${path}/`}>
                <PostList url={`/posts?category=${id}`}/>    
            </Route>
            
        </>
    );
};

export default Category;
