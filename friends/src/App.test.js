import { render } from '@testing-library/react';
import App from './App';

test('renders learn more React Stanley!', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
