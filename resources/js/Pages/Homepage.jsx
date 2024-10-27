import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Dialog_appointment from "../Components/Dialog_appointment"


export default function Homepage({cases,status}){
    const [sidebarOpen, setSidebarOpen] = React.useState(false);
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
                answer: "You can contact legal support by calling +212 663-364471 or emailing us at allamilawyeroffice@gmail.com"
            },
            {
                question: "What is your consultation policy?",
                answer: "We offer a free initial consultation to discuss your case and determine how we can assist you."
            }
        ];




    const teamMembers = [
        {
            name: "Hicham ALLAMI",
            description: "Dynamic and creative attorney with over 12 years of experience in the field of education in the United States, including with 'FAIRFAX COUNTY PUBLIC SCHOOL' in Virginia. Currently in the fifth year of a Ph.D. program in Law and International Relations, I am seeking new academic challenges.",
            image: "https://placehold.co/100x100",
            alt: "Portrait of Tony Fred"
        }]
    return (
        <div>
                     <header className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 border-b bg-white z-10">
                        <div className="flex items-center">
                            <button className="text-2xl" onClick={() => setSidebarOpen(!sidebarOpen)}>
                            <CiMenuBurger />
                            </button>
                        </div>
                        <div className="flex items-center">
                            <img src="https://placehold.co/100x50" alt="Your Logo" className="h-8"/>
                        </div>
                    </header>
                    <main style={{marginTop:'80px'}} className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
                        <div className="md:w-1/2">
                            <h1 className="text-5xl font-light mb-4">Unleash your <span className="relative inline-block">
                                <span className="relative text-black">rights</span>
                            </span></h1>
                            <p className="text-gray-600 mb-6">Commit to defending your rights. Take advantage of our expertise to obtain legal advice tailored to your needs.</p>
                            <Dialog_appointment cases={cases} />
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <div className="relative">
                                <div className="absolute inset-0 bg-yellow-100 rounded-full transform rotate-12"></div>
                                <img src="/images/hummer.svg" alt="A wooden gavel on a white background" className="relative z-10 rounded-lg shadow-lg"/>
                            </div>
                        </div>
                    </main>
                    <main className="flex">
                        <div className="w-1/2 bg-blue-200 p-8">
                            <h1 className="text-3xl font-bold mb-4">We are committed to helping you achieve justice with unparalleled support and expert legal guidance, every step of the way.</h1>
                        </div>
                        <div className="w-1/2">
                            <img src="/images/SFG-Lawyer.jpg" alt="Image of a tablet and a phone displaying an app" className="w-full h-full object-cover"/>
                        </div>
                    </main>

                    <div className="flex flex-col items-center py-16">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-800">Explore our key statistics</h1>
                        <p className="text-gray-700 mt-4">Analyzing the outcomes behind our success: an in-depth look at the key metrics driving our law firm’s achievements.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded shadow-md">
                            <h2 className="text-3xl font-bold text-gray-800">12</h2>
                            <h3 className="text-xl font-semibold text-gray-800 mt-2">years of experience</h3>
                            <p className="text-gray-700 mt-2">With 12 years of experience in the legal field, we have acquired in-depth expertise and a detailed knowledge of legal issues. This rich and varied background allows us to navigate complex situations with ease, thus ensuring sound advice and a solid defense for our clients.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded shadow-md text-white">
                            <h2 className="text-3xl font-bold">+500</h2>
                            <h3 className="text-xl font-semibold mt-2">cases</h3>
                            <p className="mt-2">With over 500 successfully resolved cases, our firm is committed to providing unparalleled expertise and proven results. Each case handled demonstrates our determination to defend our clients' interests with professionalism and rigor.</p>
                        </div>
                        <div className="bg-yellow-100 p-6 rounded shadow-md">
                            <h2 className="text-3xl font-bold text-gray-800">+5</h2>
                            <h3 className="text-xl font-semibold text-gray-800 mt-2">Types of cases I have worked on</h3>
                            <p className="text-gray-700 mt-2">we are specialize in a wide range of legal areas, providing comprehensive expertise to meet the diverse needs of our clients. With significant experience in over five types of cases,</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto py-12 px-4">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">About Us</h1>
                    <p className="text-lg text-gray-600 mb-12">Experienced attorney committed to your legal success</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex items-center">
                                <img className="w-24 h-24 rounded-full mr-6" src="/images/Hichame.png" alt={member.alt} />
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">{member.name}</h2>
                                    <p className="text-sm text-gray-600 mb-2">{member.title}</p>
                                    <p className="text-gray-700">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                    {sidebarOpen && (
                       <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10" onClick={() => setSidebarOpen(false)}>
                       <div className="fixed inset-y-0 left-0 bg-white w-64 p-6 z-20 shadow-lg transition-transform transform duration-300 ease-in-out" onClick={(e) => e.stopPropagation()}>
                           <ul className="space-y-4">
                               <li>
                                   <a href="#" className="block text-gray-700 hover:text-blue-500 transition duration-200">Home</a>
                               </li>
                               <li>
                                   <a href="#" className="block text-gray-700 hover:text-blue-500 transition duration-200">About</a>
                               </li>
                               <li>
                                   <a href="#" className="block text-gray-700 hover:text-blue-500 transition duration-200">Services</a>
                               </li>
                               <li>
                                   <a href="#" className="block text-gray-700 hover:text-blue-500 transition duration-200">Contact</a>
                               </li>
                           </ul>
                       </div>
                   </div>
                    )}
                    <div style={{marginTop:'100px'}}  className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg flex">
                <div className="w-2/3 pr-8">
                    <h1 className="text-3xl font-bold mb-2">Top questions answered</h1>
                    <p className="text-gray-600 mb-6">In this section, we address common legal questions efficiently.</p>
                    <div className="border-t border-gray-300">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
                <div className="w-1/3">
                    <img alt="A wooden gavel resting on a round block, symbolizing law and justice." className="rounded-lg shadow-md" height="300" src="https://storage.googleapis.com/a1aa/image/dmWCBAcDk7J3LBGTp8tQpkfirTfmOahOqqmmkesNn16EJbTnA.jpg" width="300"/>
                </div>
                <br />

            </div>
                     <div style={{marginTop:'60px'}} className="bg-gray-800 text-white py-10">
                    <div className="container mx-auto flex justify-around">
                        <div className="text-center">
                            <p className="text-sm">How can we help?</p>
                            <p className="text-lg font-bold">Contact us anytime</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm">Call us</p>
                            <p className="text-lg font-bold">+212 663-364471</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm">Send us a message</p>
                            <p className="text-lg font-bold">allamilawyeroffice@gmail.com</p>
                        </div>
                        <div className="text-center">
                            <p className="text-sm">Follow us</p>
                            <div className="flex justify-center space-x-4">
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-linkedin"></i>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                </div>



                </div>
    )
}
