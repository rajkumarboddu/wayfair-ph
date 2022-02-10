import { useEffect, useState, useRef } from "react";
import './user-menu.css';

export default function UserMenu() {
    const [navToggled, setNavToggled] = useState(false);
    const popupRef = useRef(null);

    useEffect(() => {
        const onClickOutside = (event) => {
            if(popupRef.current && !popupRef.current.contains(event.target)) {
                setNavToggled(false);
            }
        };

        document.addEventListener("click", onClickOutside, true);
        return () => {
            document.removeEventListener("click", onClickOutside, true);
        }
    }, []);

    return (
        <div className="user-menu">
            <div className="user-info">
                Raj
            </div>
            <div className="user-nav">
                <svg onClick={() => setNavToggled(!navToggled)} xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-circle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <circle cx="12" cy="10" r="3"></circle>
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
                </svg>
                <div ref={popupRef} style={{display: navToggled ? 'flex' : 'none'}} className="user-nav-popup">
                    <ul className="user-nav-popup-links">
                        <li className="user-nav-popup-link-item">
                            <a href="#" className="user-nav-popup-link">Account Settings</a>
                        </li>
                        <li className="user-nav-popup-link-item">
                            <a href="#" className="user-nav-popup-link">User Management</a>
                        </li>
                        <li className="user-nav-popup-link-item">
                            <a href="#" className="user-nav-popup-link">My Team</a>
                        </li>
                        <li className="user-nav-popup-link-item">
                            <a href="#" className="user-nav-popup-link">English (UK)</a>
                        </li>
                        <li className="user-nav-popup-link-item">
                            <a href="#" className="user-nav-popup-link">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}