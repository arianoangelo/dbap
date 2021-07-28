import React from "react";
import Link from "next/link";

const Footer = () => {

    return (
        <footer className="mt-1 pt-16 pb-16 bg-gray-800">
            <div className="container">
                <p className="text-center text-gray-50"><code>Copyright © {new Date().getFullYear()} | Do Binário à Palavra</code></p>
            </div>
        </footer>
    );
};

export default Footer;