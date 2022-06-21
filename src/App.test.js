import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import {Google} from '../src/components/loginGoogle'
import { Login } from './views/login'

test('route', async () => {
  render(<Login />);
  fireEvent.click(screen.getByText('Sign In With Google'));
  await waitFor(() => screen.getByText(/dont forget to/i))
  expect(screen.getByText(/dont forget to/i)).toBeInTheDocument();
});
