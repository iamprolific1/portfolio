"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaTwitter, FaGithub } from "react-icons/fa";

const ContactSection: FC = () => {
    return (
        <section id="contact" className="px-6 py-24 bg-[#f9f9ff]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
            >
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Let's <span className="text-primary">Connect</span>
                    </h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                        Interested in working together or have a question? Reach out and I’ll respond within 1–2 business days.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <form 
                    action="#"
                    className="bg-white p-6 rounded-2xl shadow"
                    >
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Your Message"
                                required
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-3 px-4 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* Contact Form */}
                    <div className="text-gray-700 space-y-6">
                        <div className="flex items-start gap-4">
                            <FaEnvelope className="text-2xl text-indigo-600 mt-1" />
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p>prolificdev@yourdomain.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-2xl text-indigo-600 mt-1" />
                            <div>
                                <h4 className="font-semibold">Location</h4>
                                <p>Nigeria (Remote Worldwide)</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaGithub className="text-2xl text-indigo-600" />
                            <FaTwitter className="text-2xl text-indigo-600 ml-4" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default ContactSection;