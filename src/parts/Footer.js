import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-between">
                <div className="w-full mb-8 md:mb-0 md:w-1/6">
                    <h6 className="text-white">Company</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link to="" className="text-gray-600 hover:text-teal-500 hover:underline">Undangan Digital</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-gray-600 hover:text-teal-500 hover:underline">Undangan Video</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-gray-600 hover:text-teal-500 hover:underline">Prewedings</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-gray-600 hover:text-teal-500 hover:underline">Design Undangan</Link>
                        </li>                                                                        
                    </ul>
                </div>
                <div className="w-full mb-8 md:mb-0 md:w-1/6">
                    <h6 className="text-white">Sosmed</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link to="" className="text-gray-600 hover:text-teal-500 hover:underline">Instagram</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-gray-600 hover:text-teal-500 hover:underline">Facebook</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-gray-600 hover:text-teal-500 hover:underline">WhatsApp</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-gray-600 hover:text-teal-500 hover:underline">YouTube</Link>
                        </li>                                                                        
                    </ul>
                </div>
                <div className="w-full mb-8 md:mb-0 md:w-1/6">
                    <h6 className="text-white">Company</h6>
                    <ul className="mt-4">
                        <li className="text-gray-400 mt-2">
                            Monica
                        </li>
                        <li className="text-gray-400 mt-2">
                            Kp Sawah X No 12
                        </li>
                        <li className="text-gray-400 mt-2">
                            Bekasi, Indonesia
                        </li>
                        <li className="text-gray-400 mt-2">
                            Api Developer
                        </li>                                                                        
                    </ul>
                </div>
                <div className="w-full mb-8 md:mb-0 md:w-1/6">
                    <h6 className="text-white">Contact</h6>
                    <ul className="mt-4">
                        <li className="mt-2">
                            <Link to="" className="text-gray-600 hover:text-teal-500 hover:underline">Api Developer</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-gray-400 hover:text-teal-500 hover:underline">Api Developer</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-gray-400 hover:text-teal-500 hover:underline">Api Developer</Link>
                        </li>
                        <li className="mt-2">
                            <Link to="" className="text-gray-400 hover:text-teal-500 hover:underline">Api Developer</Link>
                        </li>                                                                        
                    </ul>
                </div>                                            
            </div>
            <div className="border-t pt-8 mt-8 border-gray-700 text-center text-gray-400">
                    2020 Copyright Ade Setiawan   
                </div>        
        </footer>
    )
}
