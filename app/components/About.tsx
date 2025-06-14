"use client"

import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiReact, SiFirebase, SiNestjs } from "react-icons/si";
import Profile from "@/public/profile.jpg";

const skills = [
  { name: "Next.js", icon: <SiNextdotjs className="text-3xl" /> },
  { name: "React", icon: <SiReact className="text-3xl text-blue-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-3xl text-blue-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-3xl text-cyan-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-3xl text-yellow-400" /> },
  { name: "NestJS", icon: <SiNestjs className="text-3xl text-yellow-400" /> },
];


const About: FC = () => {
    return (
        <section className="px-6 py-16 bg-white" id="about">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
            >
                 {/* Left - Text Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        I'm Abdulmalik, the mind behind <strong>ProlificDev</strong> — a forward-thinking developer brand focused on crafting cutting-edge digital experiences with clean code, powerful interfaces, and real business value. My approach blends frontend creativity with backend logic and a sharp focus on user-centered solutions.
                    </p>

                    <h3 className="font-semibold text-lg mb-2">Core Technologies:</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                        {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg hover:scale-105 transition-transform"
                        >
                            {skill.icon}
                            <span className="mt-2 text-sm text-gray-700">{skill.name}</span>
                        </div>
                        ))}
                    </div>
                </div>

                {/* Right - Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center md:justify-end"
                >
                    <Image
                        src={Profile}
                        alt="ProlificDev Avatar"
                        width={300}
                        height={300}
                        className="rounded-xl shadow-lg"
                    />
                </motion.div>

            </motion.div>
        </section>
    )
};

export default About;