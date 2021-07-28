import React from "react";
import Link from 'next/link'
import Image from "./image";

const Nav = ({categories, global}) => {

    const NavLogo = React.forwardRef(({onClick, href}, ref) => {
        return (
            <a className="inline-block cursor-pointer" href={href} onClick={onClick} ref={ref}>
                <Image image={global.logo}/>
            </a>
        )
    })

    return (
        <header className="container pt-5 pb-5 mb-5">
            <nav className="grid grid-cols-3">
                <div className="col-span-1">
                    <div className="site-logo">
                        <Link href="/">
                            <NavLogo/>
                        </Link>
                    </div>
                </div>
                <div className="col-span-2 flex mt-auto justify-end align-bottom">
                    <ul>
                        {categories.map((category) => {
                            return (
                                <li className="inline-block px-3 pr-3" key={category.id}>
                                    <Link as={`/categoria/${category.slug}`} href="/categoria/[slug]">
                                        <a className="uk-link-reset">{category.name}</a>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Nav;