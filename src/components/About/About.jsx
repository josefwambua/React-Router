import React from 'react'
import {Link} from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-white h-full w-full bg-gradient-to-r from-pink-500 to-amber-500 border-y contrast-125">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 ">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12 ">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                    <h2 className="text-3xl text-gray-900 font-bold mb-6">
        About Our Journey with React
    </h2>
    <p className="text-gray-700">
        Welcome to our world of React development, where innovation and creativity converge to shape the digital landscape.
        Our journey with React began with a passion for building modern, interactive, and efficient web applications.
        As a team of dedicated developers, we embrace the power of React's component-based architecture, leveraging its
        capabilities to craft seamless user interfaces that leave a lasting impression.
    </p>
    <p className="text-gray-700 mt-4">
        With each line of code, we strive to redefine web development standards. Our commitment to excellence, coupled with
        a deep understanding of React's virtual DOM and state management, allows us to deliver high-performance applications
        that meet the evolving demands of the digital era.
    </p>
    <p className="text-gray-700 mt-4 ">
        Join us on this journey of continuous learning and exploration. Whether you are new to React or a seasoned developer,
        our mission is to inspire and empower you to unlock the full potential of this powerful JavaScript library. Let's
        collaborate, innovate, and build extraordinary web experiences together!
    </p>
                    </div>
                </div>
            </div>

            
        </div>

        
    );
}