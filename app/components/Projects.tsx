"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectsCard";
import { projects } from "../data/projectsData";

const Projects: FC = () => {
    return (
        <section id="projects" className="px-6 py-16 max-w-6xl mx-auto">
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark-text"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Featured Projects
            </motion.h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;