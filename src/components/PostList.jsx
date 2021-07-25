import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {fetch} from "../api/api";

const PostList = ({url}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(url, setPosts);
    }, [url]);

    return (
        <section className="posts container">
            {
                posts.map((post) => (
                    <Link to={`/post/${post.id}`} className={`card-post card-post_${post.category}`}>
                        <article key={post.id}>
                            <h3 className="card-post_title">{post.title}</h3>
                        </article>
                        <p className="card-post_meta">{post.metadescription}</p>
                    </Link>
                ))
            }
            
        </section>
    );
};

export default PostList;