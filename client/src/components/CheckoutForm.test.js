import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  const { getByText } = render(<CheckoutForm />);
  const header = getByText(/Checkout Form/i);
  expect(header).toBeVisible();
});

// test('form shows success message on submit with form details', () => {
//   const { getByLabelText, getByTestId, getByText, findByTestId } = render(
//     <CheckoutForm />
//   );

//   fireEvent.change(getByLabelText(/first name/i), {
//     target: { value: 'Tiff' },
//   });
//   fireEvent.change(getByLabelText(/last name/i), {
//     target: { value: 'Cros' },
//   });
//   fireEvent.change(getByLabelText(/address/i), {
//     target: { value: '3468465 sdghaeh' },
//   });
//   fireEvent.click(getByTestId('successMessage'));

//   expect(getByText(/tiff/i)).toBeinDocument();
//   expect(getByText(/cros/i)).toBeinDocument();
//   expect(getByText(/3468465 sdghaeh/i)).toBeinDocument();
//   expect(getByTestId(/successMessage/i)).toBeInTheDocument();
// });
