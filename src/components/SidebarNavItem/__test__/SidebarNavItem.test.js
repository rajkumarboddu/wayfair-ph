import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import SidebarNavItem from '../SidebarNavItem';
import { act } from 'react-dom/test-utils';

const navItem = {
    "title": "Reporting",
    "url": null,
    "id": "menu-reporting",
    "icon": "reporting",
    "hasAlert": false,
    "children": [
        {
            "title": "Sales Dashboard",
            "url": null,
            "id": "menu-reporting",
            "icon": "null",
            "hasAlert": false
        }
    ]
};
let screen;

beforeEach(() => {
    screen = render(<SidebarNavItem navItem={navItem}  />);
})

afterAll(cleanup);

it('renders with collapsed nav', () => {
    const navItemEle = screen.getByText('Reporting');
    expect(navItemEle).toBeInTheDocument();
    expect(navItemEle.parentElement.parentElement.classList.contains('has-children')).toBe(true);
});

it('renders expanded nav on click', async () => {
    const navItemEle = screen.getByText('Reporting');
    expect(navItemEle).toBeInTheDocument();
    await act(async () => {
        fireEvent.click(navItemEle);
    });
    const childNavItem = screen.getByText('Sales Dashboard');
    expect(childNavItem).toBeVisible();
});