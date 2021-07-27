
function Nav({ currentPage, handlePageChange }) {
        return(
            <nav className="nav">
                <a 
                href="#home" 
                onClick={() => handlePageChange('Home')}
                >
                    Home
                </a>

                <a 
                href="#about" 
                onClick={() => handlePageChange('About')}
                >
                    About Me
                </a>
                
                <a 
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                >
                    My Work
                </a>
                <a 
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                >
                    Contact
                </a>
            </nav>
        )
    }

export default Nav;
