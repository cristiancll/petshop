import React from 'react';
import PostList from "../components/PostList";
import {useParams} from "react-router-dom";

const Subcategory = () => {
    const {subcategory} = useParams();
    return (
        <PostList url={`/posts?subcategory=${subcategory}`}/>
    );
};

export default Subcategory;
