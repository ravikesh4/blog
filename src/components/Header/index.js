import React from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <React.Fragment>
            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>
            <header className="site-navbar" role="banner">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12 search-form-wrap js-search-form">
                            <form method="get" action="#">
                                <input type="text" id="s" className="form-control" placeholder="Search..." />
                                <button className="search-btn" type="submit"><span className="icon-search"></span></button>
                            </form>
                        </div>
                        <div className="col-4 site-logo">
                            <Link to="/blog" className="text-black h2 mb-0">Ravikesh</Link>
                        </div>
                        <div className="col-8 text-right">
                            <nav className="site-navigation" role="navigation">
                                <ul className="site-menu js-clone-nav mr-auto d-lg-block mb-0">
                                    <li><Link to="/blog">Home</Link></li>
                                    {/* <li><Link to="/blog/blog">Tech</Link></li> */}
                                    <li><Link to="/blog/create/blog">Create Blog</Link></li>
                                </ul>
                            </nav>
                            {/* <Link to="#" className="site-menu-toggle js-menu-toggle text-black d-inline-block d-lg-none"><span
                                className="icon-menu h3"></span></Link> */}
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
