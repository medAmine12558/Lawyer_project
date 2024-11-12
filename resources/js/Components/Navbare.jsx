import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Helmet } from 'react-helmet';

export default function Navbare({ para1, para2, para3 }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
         <div>
            <Helmet>

                <link rel="icon" type="image/jpg+xml" href="/images/Black and Cream Vintage Illustrative Law Services Logo.png" />
                <meta name="description" content="Hicham Allami - Morrocan Lawyer"></meta>
                <link rel="canonical" href="https://Allamilawoffice.com/" />
                <meta property="og:title" content="Hicham Allami - Morrocan Lawyer"></meta>
                <meta property="og:description"content="Hicham Allami - Morrocan Lawyer" />
                <meta property="og:url" content="https://Hicham Allami.com/" />
                <meta property="og:image" content="images/SFG-Lawyer.jpg" />
                <meta property="og:site_name" content="Hicham Allami - Morrocan Lawyer"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hicham Allami - Morrocan Lawyer</title>
                <meta property="og:type" content="website"></meta>
                <meta name="keywords" content="Morrocan Lawyer,Hiacham Allami" />
            </Helmet>

        </div>
        <nav className="bg-gray-800 p-4 flex justify-between w-full">
            <div className="container mx-auto flex items-center justify-between ">
                <div className="flex items-center w-full ">
                    <img src="images/Logo.png" alt="Company logo" className="h-10 w-10" />
                    <span className="ml-2 text-white text-lg">Hicham ALLAMI</span>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-white">Home</a>
                    <a href={`${para1}`} className="text-white">About US</a>
                    <a href={`${para2}`} className="text-white">Contact Us</a>
                    <a href={`${para3}`} className="text-white">Our statistics</a>
                </div>
                <div className="md:hidden relative"> {/* Ajoutez "relative" ici */}
                    <button style={{width:'50px'}} onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                    <CiMenuBurger />
                    </button>
                    {isOpen && (
                        <div style={{width:'85px'}} className="absolute left-0 mt-2 bg-gray-700 w-full rounded-md shadow-lg"> {/* Positionnez le menu ici */}
                            <a style={{marginRight:'25px'}} href="#" className="block text-white py-2 px-4">Home</a>
                            <a style={{marginRight:'25px'}} href={`${para1}`} className="block text-white py-2 px-4">About US</a>
                            <a style={{marginRight:'25px'}} href={`${para2}`} className="block text-white py-2 px-4">Contact Us</a>
                            <a style={{marginRight:'25px'}} href={`${para3}`} className="block text-white py-2 px-4">Our statistics</a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
        </>
    );
}
