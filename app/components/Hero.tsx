"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from "react";
import Image from "next/image";
import Profile from "@/public/profile.jpg";

const Hero: FC = () => {
    return (
        <section className="px-6 py-6 flex flex-col items-center text-center max-w-3xl mx-auto">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
           >
              <Image
                src={Profile}
                alt="ProlificDev Avatar"
                width={120}
                height={120}
                className="rounded-full shadow-md"
                />
           </motion.div>

           <motion.h1
                className="text-3xl md:text-5xl font-bold text-dark-text mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
           >
                Hi, I’m Abdulmalik — a Prolific Fullstack Developer
           </motion.h1>

           <motion.p
                className="text-body-text text-base md:text-lg mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
           >
                I craft reliable, scalable, and modern web apps with great user experience.
           </motion.p>

           <motion.div
                className="flex gap-4 flex-wrap justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.8 }}
           >
            <Link href="#projects" className="bg-primary text-white px-6 py-2 rounded-full font-medium shadow hover:scale-105 transition-transform">
                View Projects
            </Link>
            <Link href="#contact" className="border border-primary text-primary px-6 py-2 rounded-full font-medium hover:bg-primary hover:text-white transition-colors">
                Book a Call
            </Link>
           </motion.div>
        </section>
    );
}

export default Hero;