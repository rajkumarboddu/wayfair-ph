// Created a helper function that gives us svg icons instead of the whole third-party library
// TODO: we can pass props such as width, height, fill etc.
function getIconMarkup(name, props) {
    // 'reporting', 'tickets', 'orders', 'castleGate', 'inventory', 'products', 'premiumShelf', 'downloadCenter', 'helpAndSupport'
    switch (name) {
        case "reporting":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-analytics" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                    <line x1="9" y1="17" x2="9" y2="12"></line>
                    <line x1="12" y1="17" x2="12" y2="16"></line>
                    <line x1="15" y1="17" x2="15" y2="14"></line>
                </svg>
            );
        case "tickets":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-ticket" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="15" y1="5" x2="15" y2="7"></line>
                    <line x1="15" y1="11" x2="15" y2="13"></line>
                    <line x1="15" y1="17" x2="15" y2="19"></line>
                    <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
                </svg>
            );
        case "orders":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-details" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M13 5h8"></path>
                    <path d="M13 9h5"></path>
                    <path d="M13 15h8"></path>
                    <path d="M13 19h5"></path>
                    <rect x="3" y="4" width="6" height="6" rx="1"></rect>
                    <rect x="3" y="14" width="6" height="6" rx="1"></rect>
                </svg>
            );
        case "castleGate":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-castle" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 19v-2a3 3 0 0 0 -6 0v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-14h4v3h3v-3h4v3h3v-3h4v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                    <line x1="3" y1="11" x2="21" y2="11"></line>
                </svg>
            );
        case "inventory":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-warehouse" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 21v-13l9 -4l9 4v13"></path>
                    <path d="M13 13h4v8h-10v-6h6"></path>
                    <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3"></path>
                </svg>
            );
        case "products":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-store" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="3" y1="21" x2="21" y2="21"></line>
                    <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4"></path>
                    <line x1="5" y1="21" x2="5" y2="10.85"></line>
                    <line x1="19" y1="21" x2="19" y2="10.85"></line>
                    <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4"></path>
                </svg>
            );
        case "premiumShelf":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-track" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 15l11 -11m5 5l-11 11m-4 -8l7 7m-3.5 -10.5l7 7m-3.5 -10.5l7 7"></path>
                </svg>
            );
        case "downloadCenter":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-world-download" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M21 12a9 9 0 1 0 -9 9"></path>
                    <path d="M3.6 9h16.8"></path>
                    <path d="M3.6 15h8.4"></path>
                    <path d="M11.578 3a17 17 0 0 0 0 18"></path>
                    <path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9"></path>
                    <path d="M18 14v7m-3 -3l3 3l3 -3"></path>
                </svg>
            );
        case "helpAndSupport":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="12" y1="17" x2="12" y2="17.01"></line>
                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"></path>
                </svg>
            );
        default:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <line x1="4" y1="8" x2="20" y2="8"></line>
                    <line x1="4" y1="16" x2="20" y2="16"></line>
                </svg>
            );
    }
}

export default function Icon({ name, ...restProps }) {
    const markup = getIconMarkup(name, restProps);
    return markup || null;
}