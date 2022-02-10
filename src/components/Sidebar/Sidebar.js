import { useState, useEffect } from "react";
import SidebarNav from "../SidebarNav/SidebarNav";
import './sidebar.css';

export default function Sidebar() {
    const [nav, setNav] = useState([]);
    const [navCollapsed, setNavCollapsed] = useState(false);
    const [loading, setLoading] = useState(true);
    const [navFetchError, setNavFetchError] = useState(false);

    useEffect(() => {
        fetch("https://run.mocky.io/v3/b49604f2-3705-4e14-992f-1378fb4b598f?mocky-delay=1000ms")
            .then(resp => resp.json())
            .then(navInfo => {
                setNav(navInfo);
            })
            .catch(() => {
                setNavFetchError(true);
            })
            .finally(() => setLoading(false));
    }, []);

    return (
        <aside className={`sidebar ${navCollapsed ? 'collapsed' : ''}`}>
            <div className="menu-icon-container">
                <svg data-testid="sidebar-menu-icon" onClick={() => setNavCollapsed(!navCollapsed)} xmlns="http://www.w3.org/2000/svg" className="icon menu-icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="4" y1="6" x2="20" y2="6"></line>
                    <line x1="4" y1="12" x2="20" y2="12"></line>
                    <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
            </div>
            <div className="sidebar-nav-container">
                {
                    (loading || navFetchError) ? (
                        <div className="sidebar-nav-loader">
                            {
                                loading &&
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-loader" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="12" y1="6" x2="12" y2="3"></line>
                                    <line x1="16.25" y1="7.75" x2="18.4" y2="5.6"></line>
                                    <line x1="18" y1="12" x2="21" y2="12"></line>
                                    <line x1="16.25" y1="16.25" x2="18.4" y2="18.4"></line>
                                    <line x1="12" y1="18" x2="12" y2="21"></line>
                                    <line x1="7.75" y1="16.25" x2="5.6" y2="18.4"></line>
                                    <line x1="6" y1="12" x2="3" y2="12"></line>
                                    <line x1="7.75" y1="7.75" x2="5.6" y2="5.6"></line>
                                </svg>
                            }
                            {
                                navFetchError &&
                                <div data-testid="fetch-failed" className="nav-unavailable-msg">Unable to load nav</div>
                            }
                        </div>
                    )
                    :
                    <SidebarNav nav={nav} />
                }
            </div>
        </aside>
    );
};