import Posts from "../../components/posts";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const Category = ({ category, categories, global }) => {
    const seo = {
        metaTitle: category.name,
        metaDescription: `All ${category.name} articles`,
    };

    return (
        <Layout categories={categories} global={global}>
            <Seo seo={seo} />
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h1>{category.name}</h1>
                    <Posts posts={category.posts} />
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const categories = await fetchAPI("/categories");

    return {
        paths: categories.map((category) => ({
            params: {
                slug: category.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
    const categories = await fetchAPI("/categories");
    const global = await fetchAPI("/global");

    return {
        props: { category, categories, global },
        revalidate: 1,
    };
}

export default Category;