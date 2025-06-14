import { FC } from "react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import Link from "next/link";

const Header: FC = () => {
    return (
        <header className="w-full flex justify-between items-center px-6 py-4 md:px-12 md:py-6 bg-white shadow-sm sticky top-0 z-50">
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                Prolific<span className="text-primary">Dev</span>
            </h1>

            <div className="flex items-center gap-4">
                <a href="#" className="text-gray-600 text-md hover:text-primary transition">About</a>
                <a href="#" className="text-gray-600 text-md hover:text-primary transition">Projects</a>
                <a href="#" className="text-gray-600 text-md hover:text-primary transition">Pricing</a>
                <a href="#" className="text-gray-600 text-md hover:text-primary transition">Contact</a>
            </div>

            <div className="flex items-center gap-4">
                <a href="#" className="text-gray-600 hover:text-primary transition">
                    <FiGithub size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition">
                    <FiTwitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition">
                    <FiLinkedin size={20} />
                </a>

                <Link href="#contact">
                    <button className="ml-4 px-4 py-2 bg-primary text-white text-sm rounded-full shadow hover:shadow-md transition-all">
                    Book a Call
                    </button>
                </Link>
            </div>
        </header>
    );
}

export default Header;