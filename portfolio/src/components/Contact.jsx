import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center h-32 text-white ">
            <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
            <div className="flex space-x-4">
                <a href="https://github.com/marlonhahnfeld" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-6 h-6 hover:text-yellow-400" />
                </a>
                <a href="https://www.linkedin.com/in/marlonmisiakhahnfeld/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="w-6 h-6 hover:text-yellow-400" />
                </a>
                <a href="mailto:marlonhahnfeld@gmail.com">
                    <CiMail className="w-6 h-6 hover:text-yellow-400" />
                </a>
            </div>
        </div>
    );
};

export default Contact;