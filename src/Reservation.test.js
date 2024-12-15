import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Reservation from "./Reservation"; // Adjust the import path accordingly
import { useNavigate } from "react-router-dom";

// Mock the navigate function from react-router-dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

const availableTimes = ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"];

describe("Reservation Component", () => {
    beforeEach(() => {
        useNavigate.mockReturnValue(jest.fn()); // Mock navigate function for redirect
        window.alert = jest.fn(); // Mock alert to capture alert calls
    });

    test("valid form submission", async () => {
        render(<Reservation availableTimes={availableTimes} updateTimes={() => {}} />);

        // Fill in valid inputs
        fireEvent.change(screen.getByLabelText(/Name for reservation/i), { target: { value: "John" } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john.doe@example.com" } });
        fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: "83285542920" } });
        fireEvent.change(screen.getByLabelText(/Date of reservation/i), { target: { value: "2024-12-15" } });
        fireEvent.change(screen.getByLabelText(/Time of reservation/i), { target: { value: "1:00 PM" } });
        fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: "4" } });

        // Submit the form
        fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

        // Check if the confirmation alert is shown
        await waitFor(() => expect(window.alert).toHaveBeenCalledWith("Reservation successfully submitted!"));

        // Check if the navigate function was called (redirect happens)
        expect(useNavigate()).toHaveBeenCalledWith("/reservation/confirmation", expect.objectContaining({
            state: expect.objectContaining({
                name: "John",
                lName: "Doe",
                email: "john.doe@example.com",
                tel: "8328554292",
                date: "2024-12-15",
                time: "1:00 PM",
                guests: "4",
            })
        }));
    });

    test("invalid form submission (missing required fields)", async () => {
        render(<Reservation availableTimes={availableTimes} updateTimes={() => {}} />);

        // Fill in only some fields (missing required ones like name, date, guests)
        fireEvent.change(screen.getByLabelText(/Name for reservation/i), { target: { value: "John" } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Doe" } });
        fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: "(123)-456-7890" } });

        // Submit the form
        fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

        // Check for the alert that indicates missing fields
        await waitFor(() => expect(window.alert).toHaveBeenCalledWith("Please fill out all required fields."));
    });
});