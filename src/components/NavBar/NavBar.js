import React, { useEffect, useState } from 'react';
import "./NavBar.scss"
const NavBar = () => {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
                alt="Netflix Logo"
            />
            <img
                className="nav_avatar"
                src="https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png"
                alt="Netflix Avatar"
            />
        </div>
    );
};

export default NavBar;