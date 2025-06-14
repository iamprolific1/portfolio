"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
}


const ProjectCard : FC<ProjectCardProps> = ({ title, description, tech, liveUrl, githubUrl, image }) => {
    return (
        <motion.div
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.03 }}
        >
            {image && (
                <div className="w-full h-48 relative">
                <Image src={image} alt={title} layout="fill" objectFit="cover" />
                </div>
            )}

            <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 text-darkText">{title}</h3>
                <p className="text-bodyText text-sm mb-3">{description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-4">
                    {tech.map((stack, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 rounded-full">{stack}</span>
                    ))}
                </div>

                <div className="flex gap-4 text-sm">
                    <a href={liveUrl} target="_blank" className="text-brand hover:underline">Live Demo</a>
                    <a href={githubUrl} target="_blank" className="text-brand hover:underline">GitHub</a>
                </div>
            </div>

        </motion.div>
    );
}

export default ProjectCard;