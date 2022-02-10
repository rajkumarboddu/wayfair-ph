import React from 'react';
import Header from '../Header';
import { render, cleanup } from '@testing-library/react';

afterAll(cleanup);

it('renders header without crashing', () => {
    const screen = render(<Header />);
    expect(screen).not.toBeNull();
});

it('renders logo', () => {
    const screen = render(<Header />);
    const ele = screen.getByTestId('wayfair-logo');
    expect(ele).toBeInTheDocument();
});

it('renders logo caption', () => {
    const screen = render(<Header />);
    const ele = screen.getByTestId('wayfair-logo-caption');
    expect(ele).toHaveTextContent('PARTNER HOME');
});
