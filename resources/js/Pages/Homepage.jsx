import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Dialog_appointment from "../Components/Dialog_appointment";
import { Helmet } from 'react-helmet';
import { FiPhone } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { MdPlace } from "react-icons/md";
import Navbare from "@/Components/Navbare";
import { FaLinkedin } from "react-icons/fa";

export default function Homepage({ cases, status }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const FAQItem = ({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div>
                <div className="py-4 border-b border-gray-300 flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <span className="text-lg font-semibold">{question}</span>
                    <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
                </div>
                {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
            </div>
        );
    };

    const faqs = [
        {
            question: "What services does your law firm offer?",
            answer: "Our law firm offers a variety of services including corporate law, family law, criminal defense, and more."
        },
        {
            question: "How can I contact legal support?",
            answer: "You can contact legal support by calling +212 663-364471 or +212 522-377676 or emailing us at allamilawyeroffice@gmail.com"
        },
        {
            question: "What is your consultation policy?",
            answer: "We offer a free initial consultation to discuss your case and determine how we can assist you."
        }
    ];

    const teamMembers = [
        {
            name: "Hicham ALLAMI",
            description: "Dynamic and creative attorney with 20 years of experience in the field of education in the United States, including with 'FAIRFAX COUNTY PUBLIC SCHOOL' in Virginia. Currently in the fifth year of a Ph.D. program in Law and International Relations, I am seeking new academic challenges.",
            alt: "Hicham Allami - Moroccan Lawyer",
            Skill1: "- International Law Expertise: Extensive knowledge of international law with experience in cross-border cases and international negotiations.",
            skill2: "- Public and Private Law: Advanced proficiency in both public and private law, supporting a comprehensive legal perspective.",
            skill3: "- Family (Divorce) Law: Skilled in family law, particularly in managing divorce cases with sensitivity, ensuring fair and favorable resolutions for clients.",
            skill4: "- Bilingual Proficiency: Fluent in English and French, offering seamless communication with national and international clients.",
            skill5: "- Problem Solving and Analytical Skills: Creative and detail-oriented approach to legal challenges, backed by thorough research and analytical rigor.",
            prof1: "- Attorney at the Casablanca Bar (2015 - Present)",
            prof2: "- Legal representation and advisory services in civil, business, family (divorce), international, and contract law.",
            prof3: "- Full case management, from initial consultation to court representation, focused on protecting client interests.",
            prof4: "- Expertise in contract drafting, dispute resolution, mediation, and international arbitration.",
            prof5: "- Successful collaboration with national and international clients, fostering long-term, trust-based relationships.",
            prof6: "- Notary Clerk (2000 - 2004 )",
            prof7: "- Preparation and drafting of notarial deeds, contracts, and legal documents.",
            prof8: "- Conducted legal research to ensure compliance and maintain organized, confidential records."
        }
    ];

    return (
        <div>
            <Helmet>
                <link rel="icon" type="image/jpg+xml" href="/images/Black and Cream Vintage Illustrative Law Services Logo.png" />
                <meta name="description" content="Hicham Allami - Moroccan Lawyer" />
                <link rel="canonical" href="https://Allamilawoffice.com/" />
                <meta property="og:title" content="Hicham Allami - Moroccan Lawyer" />
                <meta property="og:description" content="Hicham Allami - Moroccan Lawyer" />
                <meta property="og:url" content="https://Hicham Allami.com/" />
                <meta property="og:image" content="images/SFG-Lawyer.jpg" />
                <meta property="og:site_name" content="Hicham Allami - Moroccan Lawyer" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Hicham Allami - Moroccan Lawyer</title>
                <meta property="og:type" content="website" />
                <meta name="keywords" content="Moroccan Lawyer,Hiacham Allami" />
            </Helmet>

            <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 border-b bg-white z-10 w-full">
                <Navbare para1={'#AboutUS'} para2={'#contact'} para3={'#statictics'} />
            </header>

            <main style={{ marginTop: '80px' }} className="flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-light mb-4">Unleash your <span className="relative inline-block">
                        <span className="relative text-black">rights</span>
                    </span></h1>
                    <p className="text-gray-600 mb-6">Commit to defending your rights. Take advantage of our expertise to obtain legal advice tailored to your needs.</p>
                    <Dialog_appointment cases={cases} />
                </div>
                <div className="md:w-1/2 mt-8 md:mt-0">
                    <div className="relative">
                        <div className="absolute inset-0 bg-yellow-100 rounded-full transform rotate-12"></div>
                        <img src="/images/hummer.svg" alt="Hicham Allami" className="relative z-0 rounded-lg shadow-lg" />
                    </div>
                </div>
            </main>
            <br />
            <br />
            <main className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 bg-blue-200 p-4 md:p-8">
                    <h1 className="text-3xl font-bold mb-4">We are committed to helping you achieve justice with unparalleled support and expert legal guidance, every step of the way.</h1>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="/images/SFG-Lawyer.jpg" alt="Hicham Allami" className="w-full h-auto object-cover" />
                </div>
            </main>

            <div id='statictics' className="flex flex-col items-center py-8 md:py-16">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">Explore our key statistics</h1>
                    <p className="text-gray-700 mt-4">Analyzing the outcomes behind our success: an in-depth look at the key metrics driving our law firm’s achievements.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-3xl font-bold text-gray-800">20</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mt-2">years of experience</h3>
                        <p className="text-gray-700 mt-2">With 20 years of experience in the legal field, we have acquired in-depth expertise and a detailed knowledge of legal issues . This rich and varied background allows us to navigate complex situations with ease, thus ensuring sound advice and a solid defense for our clients.</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded shadow-md text-white">
                        <h2 className="text-3xl font-bold">+500</h2>
                        <h3 className="text-xl font-semibold mt-2">cases</h3>
                        <p className="mt-2">With over 500 successfully resolved cases, our firm is committed to providing unparalleled expertise and proven results. Each case handled demonstrates our determination to defend our clients' interests with professionalism and rigor.</p>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded shadow-md">
                        <h2 className="text-3xl font-bold text-gray-800">+5</h2>
                        <h3 className="text-xl font-semibold text-gray-800 mt-2">Types of cases I have worked on</h3>
                        <p className="text-gray-700 mt-2">We specialize in a wide range of legal areas, providing comprehensive expertise to meet the diverse needs of our clients. With significant experience in over five types of cases, we ensure tailored solutions for every situation.</p>
                    </div>
                </div>
            </div>

            <div id='AboutUS' className="max-w-6xl mx-auto py-12 px-4 w-full">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">About Us</h1>
                <p className="text-lg text-gray-600 mb-12">Experienced attorney committed to your legal success</p>
                <div className="grid grid-cols-1 gap-12 w-full">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex items-center w-full">
                            <img className="w-24 h-24 rounded-full mr-6" src="/images/Hichame.png" alt="Hicham Allami" />
                            <div className="w-full">
                                <h2 className="text-xl font-bold text-gray-900">{member.name}</h2>
                                <p className="text-gray-700">{member.description}</p>
                                <br />
                                <h3 className="font-semibold text-sm text-gray-800">Skills and Expertise:</h3>
                                <p className="text-gray-700">{member.Skill1}</p>
                                <p className="text-gray-700">{member.skill2}</p>
                                <p className="text-gray-700">{member.skill3}</p>
                                <p className="text-gray-700">{member.skill4}</p>
                                <p className="text-gray-700">{member.skill5}</p>
                                <br />
                                <h3 className="font-semibold text-sm text-gray-800">Professional Experience:</h3>
                                <p className="text-gray-700">{member.prof1}</p>
                                <p className="text-gray-700">{member.prof2}</p>
                                <p className="text-gray-700">{member.prof3}</p>
                                <p className="text-gray-700">{member.prof4}</p>
                                <p className="text-gray-700">{member.prof5}</p>
                                <p className="text-gray-700">{member.prof6}</p>
                                <p className="text-gray-700">{member.prof7}</p>
                                <p className="text-gray-700">{member.prof8}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: '100px' }} className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg flex flex-col md:flex-row">
                <div className="w-full md:w-2/3 pr-8">
                    <h1 className="text-3xl font-bold mb-2">Top questions answered</h1>
                    <p className="text-gray-600 mb-6">In this section, we address common legal questions efficiently.</p>
                    <div className="border-t border-gray-300">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/3 mt-6">
                    <img alt="Hichame Allami" className="rounded-lg shadow-md" height="300" src="/images/question.jpg" width="300" />
                </div>
            </div>

            <div id='contact' className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
                <div className="w-full max-w-6xl">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-2/3">
                            <img src="images/contact_us.jpg" alt="Hicham Allami" className="w-full h-auto" />
                        </div>
                        <div className="w-full md:w-1/3 flex flex-col items-center justify-center bg-white p-8">
                            <h1 className="text-4xl font-bold text-gold mb-8">CONTACT US</h1>
                            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg border-2 border-purple-500">
                                <ul className="space-y-4">
                                    <li className="flex items-center">
                                        <FiPhone className="mr-4" />
                                        <span>+212 663-364471</span>
                                    </li>
                                    <li className="flex items-center">
                                        <GiRotaryPhone className="mr-4" />
                                        <span>+212 522-377676</span>
                                    </li>
                                    <li className="flex items-center">
                                        <MdOutlineAlternateEmail className="mr-4" />
                                        <span>allamilawyeroffice@gmail.com</span>
                                    </li>
                                    <li className="flex items-center">
                                        <MdPlace className="mr-4" />
                                        <span>401, Street Sakia Alhamra 2nd floor C-J Casablanca</span>
                                    </li>
                                    <li className="flex items-center">
                                        <FaLinkedin className="mr-4" />
                                        <span><a href="https://www.linkedin.com/in/hicham-allami-82531a133/?originalSubdomain=ma">Join us here</a></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
