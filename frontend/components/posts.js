import React from "react";
import Image from "./image";
import Link from "next/link";

const Posts = ({posts}) => {

    return (
        <div>
            {posts.map((post) => {
                return (
                    <article key={post.id} className="mb-16">
                        <div>
                            <Link key={post.slug} as={`/artigos/${post.slug}`} href="/artigos/[slug]">
                                <a className="cursor-pointer">
                                    <figure className="overflow-hidden mb-6">
                                        <Image image={post.image}/>
                                    </figure>
                                </a>
                            </Link>
                            <div className="mb-4">
                                <Link key={post.slug} as={`/artigos/${post.slug}`} href="/artigos/[slug]">
                                    <a className="cursor-pointer">
                                        <h1 className="text-xl font-bold duration-300 hover:text-blue-600">
                                            {post.title}
                                        </h1>
                                    </a>
                                </Link>
                                <h5 className="mt-3 text-sm">{new Date(post.date).toLocaleDateString('pt-PT', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</h5>
                            </div>
                            <div>
                                <p>
                                    {post.content.replace(/<[^>]+>/g, '').substring(0, 200)}[...]
                                </p>
                            </div>
                        </div>

                    </article>
                );
            })}
        </div>
    )
};

export default Posts;