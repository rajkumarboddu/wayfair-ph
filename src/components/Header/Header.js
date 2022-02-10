import UserMenu from "../UserMenu/UserMenu";
import wayfair_logo from '../../wayfair_logo.png';
import './header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img data-testid="wayfair-logo" src={wayfair_logo} alt="Wayfair" />
                <span data-testid="wayfair-logo-caption" className="caption">PARTNER HOME</span>
            </div>
            <UserMenu />
        </header>
    )
}
