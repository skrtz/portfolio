function Nav({ currentPage, handlePageChange }) {
    const pages = ['Home', 'About', 'Projects', 'Contact'];
    const navLinks = pages.map(page => {
        return (
            <a href={'/#' + page.toLocaleLowerCase()} onClick={() => handlePageChange(page)} >
                {page}
            </a>
        )
    });
    return <nav className="nav" >{navLinks}</nav>;
}

export default Nav;
