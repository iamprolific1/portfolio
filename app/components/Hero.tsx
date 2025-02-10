"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";
import ProfileImage from "../../public/profile3.png";
import './hero.css';

export default function Hero() {

    const [showArrow, setShowArrow] = useState<boolean>(true);

    useEffect(()=> {
        const timer = setTimeout(()=> setShowArrow(false), 5000);
        return ()=> clearTimeout(timer);
    }, [])

    return (
        <motion.div
            className="h-screen flex flex-col justify-center items-center text-center relative"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1}}
        >
            <motion.div
                className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent shadow-lg cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 2 }}
            >
                <Image 
                    src={ProfileImage}
                    alt="Profile-image"
                    className="object-cover w-full h-full"
                    
                />
            </motion.div>
            <motion.h1 
                className="text-4xl font-bold mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                {"Hello, I'm Abdulmalik Abdulrahman!"}
            </motion.h1>

            <p className="text-accent mt-2 text-[16px]">Backend Engineer | Web3 Developer | Cybersecurity Enthusiast</p>

            {/* CTA Buttons */}
            <div className="mt-6 flex gap-4">
                <motion.a
                    href="#projects"
                    className="px-6 py-2 bg-accent text-primary tracking-wide font-semibold rounded-lg shadow-lg hover:bg-[#3988e2]"
                >
                    View My Works
                </motion.a>
                <motion.a
                    href="#contact"
                    className="hireMeBtn rounded-lg shadow-lg font-semibold tracking-wide"
                    whileHover={{ scale: 1.1 }}
                >
                    Hire Me
                </motion.a>
            </div>

            {/* scroll indicator */}
            {showArrow && 
                <motion.div
                    className="absolute bottom-10 text-accent text-2xl animate-bounce"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                >
                    <FaArrowDown />
                </motion.div>
            }
        </motion.div>
    )
}