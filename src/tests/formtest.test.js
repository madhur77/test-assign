import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from "../components/form";

describe('Form Testing', () => {
  it('submits the form with valid input', () => {
    // Arrange
    render(<Form />);
    const appNameInput = screen.getByRole('textbox', {
        name: /app-name/i,
      });

    const volumeInput = screen.getByRole('spinbutton', {
        name: /volume/i,
      });

    const submitButton = screen.getByText('Submit');

    // Act
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    fireEvent.change(appNameInput, { target: { value: 'MyApp' } });
    fireEvent.change(volumeInput, { target: { value: 42 } });
    fireEvent.click(submitButton);
   
    const myObject = { app_name: 'MyApp', volume: '42' }
    expect(consoleLogSpy).toHaveBeenCalledWith(myObject);
        // Assert
    // Add assertions here to check if the form submission was successful
    // You can assert that handleSubmit function was called with the correct values
    // You can also check if any success message or UI changes after submission
  });

  it('displays an error message for invalid input', () => {
    // Arrange
    render(<Form />);
    const appNameInput = screen.getByRole('textbox', {
        name: /app-name/i,
      });

    const volumeInput = screen.getByRole('spinbutton', {
        name: /volume/i,
      });

    const submitButton = screen.getByText('Submit');
   
    // Act
    //fireEvent.change(appNameInput, { target: { value: '' } }); // Empty input should trigger an error
   

    
  });
});
