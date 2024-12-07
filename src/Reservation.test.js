import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Reservation from './Reservation.js';
import '@testing-library/jest-dom';

test('submision', () => {
    // Render the Reservation component
    render(<Reservation availableTimes={[]} dispatch={() => {}} />);
  
    // Check if the static text is in the document
    const pageContextElement = screen.getByText(/Reserve A Table/i);
    expect(pageContextElement).toBeInTheDocument();
  });