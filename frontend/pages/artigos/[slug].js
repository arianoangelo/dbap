import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/layout";
import Image from "../../components/image";
import Seo from "../../components/seo";
import { getStrapiMedia } from "../../lib/media";

const Post = ({ post, categories, global }) => {
    const imageUrl = getStrapiMedia(post.image);

    const seo = {
        metaTitle: post.title,
        metaDescription: post.description,
        shareImage: post.image,
        post: true,
    };

    return (
        <Layout categories={categories} global={global} >
            <div className="container">
                <Seo seo={seo} />
                <h1>{post.title}</h1>
                <div className="uk-section">
                    <div className="uk-container uk-container-small">
                        <ReactMarkdown source={post.content} escapeHtml={false} />
                        <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                            <div className="uk-width-expand">
                                <p className="uk-text-meta uk-margin-remove-top">
                                    <Moment format="MMM Do YYYY">{post.date}</Moment>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export async function getStaticPaths() {
    const posts = await fetchAPI("/posts");

    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const posts = await fetchAPI(
        `/posts?slug=${params.slug}`
    );

    const global = await fetchAPI(
        `/global`
    );
    const categories = await fetchAPI("/categories");

    return {
        props: { post: posts[0], categories, global },
        revalidate: 1,
    };
}

export default Post;