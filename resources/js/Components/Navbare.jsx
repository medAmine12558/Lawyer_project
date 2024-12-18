import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Helmet } from 'react-helmet';

export default function Navbare({ para1, para2, para3 }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
         <Helmet>

            <link rel="icon" type="image/jpg+xml" href="/images/Black and Cream Vintage Illustrative Law Services Logo.png" />
            <meta name="description" content="Hicham Allami - Moroccan Lawyer"></meta>
            <link rel="canonical" href="https://Allamilawoffice.com/" />
            <meta property="og:title" content="Hicham Allami - Moroccan Lawyer"></meta>
            <meta property="og:description"content="Hicham Allami - Moroccan Lawyer" />
            <meta property="og:url" content="https://Hicham Allami.com/" />
            <meta property="og:image" content="images/SFG-Lawyer.jpg" />
            <meta property="og:site_name" content="Hicham Allami - Moroccan Lawyer"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Hicham Allami - Moroccan Lawyer</title>
            <meta property="og:type" content="website"></meta>
            <meta name="keywords" content="Moroccan Lawyer,Hiacham Allami" />
        </Helmet>

            <nav className="bg-gray-800 p-4 w-full">
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="images/Logo.png" alt="Company logo" className="h-10 w-10" />
                        <span className="ml-2 text-white text-lg">Hicham ALLAMI</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-white">Home</a>
                        <a href={para1} className="text-white">About US</a>
                        <a href={para2} className="text-white">Contact Us</a>
                        <a href={para3} className="text-white">Our statistics</a>
                    </div>
                    <div className="md:hidden relative">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            <CiMenuBurger />
                        </button>
                        {isOpen && (
                            <div className="absolute left-[-160px] mt-2 bg-gray-700 rounded-md shadow-lg w-48">
                                <a href="#" className="block text-white py-2 px-4">Home</a>
                                <a href={para1} className="block text-white py-2 px-4">About US</a>
                                <a href={para2} className="block text-white py-2 px-4">Contact Us</a>
                                <a href={para3} className="block text-white py-2 px-4">Our statistics</a>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
