import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faContactBook, faUserGroup} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";
// components


export default function Navbar(props) {
    return (
        <>
            <nav className=" border-b-2 border-gray-300  top-0  absolute  w-full  flex flex-wrap items-center justify-between  px-2 py-3 navbar-expand-lg">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                            <Link
                                className="text-Black text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                                href="/"
                            >
                               Power
                            </Link>

                        <Link
                            className="text-Black text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            href="/price"
                        >
                            Price
                        </Link>

                        <Link
                            className="text-Black text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            href="/admin"
                        >
                            Admin
                        </Link>


                    </div>

                </div>
            </nav>
        </>
    );
}
