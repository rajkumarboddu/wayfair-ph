import React from 'react';
import Sidebar from '../Sidebar';
import { render, cleanup } from '@testing-library/react';
import { act } from "react-dom/test-utils";

const navData = [
    {
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
    },
    {
        "title": "Tickets",
        "url": null,
        "id": "menu-ticket",
        "icon": "tickets",
        "hasAlert": false
    }
];
let screen;

function spyOnFetch(throwError = false) {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return throwError ? Promise.reject() : Promise.resolve({
            json: () => Promise.resolve(navData)
        });
    });
}

afterAll(() => {
    global.fetch.mockRestore();
})

describe('Sidebar renders with nav', () => {
    beforeEach(async () => {
        spyOnFetch();
    
        await act(async () => {
            screen =  render(<Sidebar />);
            screen.get
        });
    });

    afterEach(cleanup);

    it('renders header without crashing', () => {
        expect(screen).not.toBeNull();
    });
    
    it('renders sidebar menu icon', () => {
        const ele = screen.getByTestId('sidebar-menu-icon');
        expect(ele).toBeInTheDocument();
    });

    it('renders all the nav items', () => {
        const navItems = screen.container.querySelectorAll('.nav-item-link');
        expect(navItems).toHaveLength(3);
    });
});

describe('Sidebar renders with out nav (data fetch failed)', () => {
    beforeEach(async () => {
        // throw error with mock
        spyOnFetch(true);
    
        await act(async () => {
            screen =  render(<Sidebar />);
        });
    });

    afterEach(cleanup);

    it('fails to fetch nav data', () => {
        expect(screen.getByTestId('fetch-failed')).toBeInTheDocument();
    });
});

