import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-3 text-left sm:text-right sm:ml-auto">
                    <div className="md:order-1 space-y-1 text-left sm:ml-auto">
                <h1 className="text-4xl items-right text-gray-900 font-bold sm:text-3xl">
                    Unleash the Power of React: Crafting Web Experiences Beyond Limits
                </h1>
                <p className="text-lg text-justify text-gray-700 mb-6">
                    Welcome to a realm where innovation meets interactivity. Dive into the world of React, a JavaScript library
                    for building user interfaces that are not only visually stunning but also remarkably efficient. With a community
                    of passionate developers and a robust ecosystem, React empowers you to create dynamic and responsive web
                    applications with ease.
                </p>
                <button className="bg-blue-500 text-center text-white py-2 px-4 rounded">
                    Get Started
                </button>
            </div>

                     {/*}   <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link> */}
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
                </div>
            </aside>

             {/* Features Section */}
             <section className="mx-auto w-full sm:mt-1 gap-1-1 max-w-7xl mt-1 px-6 text-white md:px-12 xl:px-6">
                <div className="space-y-3 md:space-y-0 md:flex md:gap-1-3 lg:items-center lg:gap-1-2">
                    <div className="md:5/12 lg:w-5/12">
                        <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <div className="features-section">
                            <h2 className="text-3xl text-gray-900 font-bold mb-6">
                                Key Features that Redefine Web Development with React
                            </h2>
                            <div className="feature">
                                <h3 className="text-xl text-gray-800 font-semibold mb-2">Component-Based Architecture</h3>
                                <p className="text-gray-700">
                                    React's component-based architecture allows you to break down complex user interfaces into modular,
                                    reusable components. This not only enhances maintainability but also streamlines the development process.
                                </p>
                            </div>
                            <div className="feature">
                                <h3 className="text-xl text-gray-800 font-semibold mb-2">Virtual DOM for Optimal Performance</h3>
                                <p className="text-gray-700">
                                    React's virtual DOM efficiently updates only the necessary parts of the actual DOM, reducing
                                    re-rendering and enhancing performance. This results in faster and smoother user experiences,
                                    especially in large and dynamic applications.
                                </p>
                            </div>
                            {/* Add more features as needed */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Guide Section */}
            <section className="mx-auto w-full sm:mt-20 gap-1-1 max-w-7xl mt-4 px-6 text-white md:px-12 xl:px-6 mb-3 border-box">
                <div className="space-y-3 md:space-y-0 md:flex md:gap-1-3 lg:items-center lg:gap-1-2">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            className="sm:w-96 w-48"
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image3"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <div className="react-guide-section">
                            <h2 className="text-3xl text-gray-900 font-bold mb-6">
                                A Step-by-Step Guide to Mastering React Development
                            </h2>
                            <p className="text-gray-700 mb-4">
                                Embarking on the journey of mastering React requires a strategic approach. Follow these steps to
                                navigate through the intricacies of React development and become a proficient React developer.
                            </p>
                            <ol className="list-decimal list-inside text-gray-700">
                                <li>
                                    <strong>Understanding the Basics:</strong> Start by grasping the fundamental concepts of React, such as components, JSX, and state.
                                </li>
                                <li>
                                    <strong>Building Simple Applications:</strong> Apply your knowledge by building small React applications to reinforce your understanding.
                                </li>
                                <li>
                                    <strong>Exploring React Ecosystem:</strong> Familiarize yourself with popular tools and libraries in the React ecosystem, such as Redux and React Router.
                                </li>
                                <li>
                                    <strong>Working with APIs:</strong> Learn how to fetch and manage data from external APIs, a crucial skill for dynamic web applications.
                                </li>
                                <li>
                                    <strong>Mastering State Management:</strong> Dive deep into state management techniques, understanding how to lift state and manage complex application states.
                                </li>
                                {/* Add more steps as needed */}
                            </ol>
                           
                        </div>
                    </div>
                </div>
            </section>

            
        
        </div>
    );
}