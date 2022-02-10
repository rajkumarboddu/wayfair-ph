import SidebarNavItem from "../SidebarNavItem/SidebarNavItem";
import './sidebar-nav.css';

export default function SidebarNav(props) {
    return (
        props.nav.length > 0 &&
        props.nav.map(navItem => {
            return (
                <ul key={navItem.id} className="nav-menu">
                    <SidebarNavItem navItem={navItem} />
                </ul>
            )
        })
    );
}
