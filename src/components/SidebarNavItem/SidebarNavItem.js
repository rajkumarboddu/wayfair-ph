import { useState } from "react";
import Icon from "../Icon/Icon";
import SidebarNav from "../SidebarNav/SidebarNav";
import './sidebar-nav-item.css';

export default function SidebarNavItem(props) {
    const { title, icon, url, children, hasAlert } = props.navItem;
    const hasChildren = children && children.length>0;
    const [expanded, setExpanded] = useState(false);

    // this can be managed efficiently using styled-components
    const classMap = {
        'nav-item': true,
        'has-children': hasChildren,
        'expanded': expanded,
        'has-alert': hasAlert
    };
    const classNames = Object.keys(classMap).reduce(
        (prev, curr) => {
            return classMap[curr] ? curr+' '+prev : prev;
        },
        ''
    );

    const toggleMenu = (e) => {
        e.stopPropagation();
        hasChildren && setExpanded(!expanded);
    }

    return (
        <li className={classNames} onClick={toggleMenu}>
            {
                (icon || hasChildren) && 
                <div className="icon-container">
                    <Icon name={icon} />
                </div>
            }
            <div className="nav-item-text">
                <a href={url} className="nav-item-link">{title}</a>
            </div>
            {hasChildren && <SidebarNav nav={children} />}
        </li>
    );
}