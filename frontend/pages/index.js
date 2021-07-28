import React from "react";
import Posts from "../components/posts";
import Layout from "../components/layout";
import Seo from "../components/seo";
import {fetchAPI} from "../lib/api";

const Home = ({posts, categories, homepage, global}) => {
    return (
        <Layout categories={categories} global={global}>
            <Seo seo={homepage.seo}/>
            <div className="container">
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <Posts posts={posts}/>
                    </div>
                    <div className="col-span-1">

                    </div>
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    // Run API calls in parallel
    const [posts, categories, homepage, global] = await Promise.all([
        fetchAPI("/posts?_sort=date:desc&_limit=5"),
        fetchAPI("/categories"),
        fetchAPI("/homepage"),
        fetchAPI("/global"),
    ]);

    return {
        props: {posts, categories, homepage, global},
        revalidate: 1,
    };
}

export default Home;