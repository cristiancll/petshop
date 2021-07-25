import React from 'react'
import PostList from "../components/PostList";
import CategoryList from "../components/CategoryList";

const Home = () => {
    return (
        <main>
            <div className="container">
                <h2 className="page-title">Pet notícias</h2>
            </div>
            <CategoryList url={'/categories'}/>
            <PostList url={'/posts'}/>
        </main>
    )
}

export default Home
