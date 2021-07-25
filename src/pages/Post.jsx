import React, {useEffect, useState} from "react";
import {useParams, useHistory} from 'react-router-dom';
import {fetch} from "../api/api";
import '../assets/css/post.css'


const Post = () => {
    let history = useHistory();
    const {id} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
      fetch(`/posts/${id}`, setPost)
          .catch(() => {
              history.push('/404');
          });
    }, [id]);
    

    return (
        <main className="container flex flex--center">
            <article className="card post">
                <h2 className="card_title">{post.title}</h2>
                <p className="card_text">{post.body}</p>
            </article>
        </main>
    );
};

export default Post;