import { render, cleanup } from '@testing-library/react';
import App from './App';

afterAll(cleanup);

test('renders learn react link', () => {
  const screen = render(<App />);
  expect(screen).not.toBeNull();
});
