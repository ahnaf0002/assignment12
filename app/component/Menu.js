import Link from "next/link";
import React from "react";

const Menu = () => {
    return (
        <div>
            {/* <Link href={"/"}>Home</Link>
            <br/>
            <Link href={"/blog"}>Blog</Link> */}

            <ul className="inline mb-16">
                 
                <li className="mr-6 inline mb-16">
                    <Link className="text-blue-500 hover:text-blue-800 mb-16" href={"/"}> Home </Link>
                </li>
                <li className="mr-6 inline mb-16">
                <Link className="text-blue-500 hover:text-blue-800 mb-16" href={"/blog"}> Blog </Link>
                </li>
                
            </ul>
        </div>
    );
};

export default Menu;

