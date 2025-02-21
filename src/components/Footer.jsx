import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <footer className=" mt-48  text-center text-white p-4">
            {/* Contenedor de redes sociales */}
            <div className="container mx-auto px-4">
                <section className="mb-4 flex justify-center space-x-3">
                    {/* Facebook */}
                    <a href="#!" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition">
                        <FaFacebookF />
                    </a>

                    {/* Twitter */}
                    <a href="#!" className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-600 transition">
                        <FaTwitter />
                    </a>

                    {/* Google */}
                    <a href="#!" className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition">
                        <FaGoogle />
                    </a>

                    {/* Instagram */}
                    <a href="#!" className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-600 hover:bg-pink-700 transition">
                        <FaInstagram />
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/mateus-tegue" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 hover:bg-blue-600 transition">
                        <FaLinkedinIn />
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/MateusTegue" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-800 transition">
                        <FaGithub />
                    </a>
                </section>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400 text-sm">
                © 2025 Copyright: 
                <a href="#" className="text-white hover:underline ml-1">Mateus Tegue</a>
            </div>
        </footer>
    );
}
