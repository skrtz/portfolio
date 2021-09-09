import { FaGithub } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { ImStackoverflow } from 'react-icons/im';

export default function Footer() {
    return (
        <div className="footer-container">
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://github.com/skrtz"> <FaGithub size={30}/> </a>
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/stephenjkurtz/"> <AiFillLinkedin size={30} /> </a>
            <a className="footer-link" target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/16410597/skrtz"> <ImStackoverflow size={30} /> </a>

        </div>
    )
}


