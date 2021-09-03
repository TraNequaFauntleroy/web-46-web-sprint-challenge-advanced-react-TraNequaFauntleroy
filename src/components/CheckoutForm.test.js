import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from '@testing-library/user-event'

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
    const firstName = screen.findByLabelText(/First Name:/i)
    userEvent.type(firstName, 'NeNeee')
    const lastName = screen.findByLabelText(/last Name:/i)
    userEvent.type(lastName, 'Fauntleroy')
    const address = screen.findByLabelText(/address:/i)
    userEvent.type(address, '123 Love Lane')
    const city = screen.findByLabelText(/city:/i)
    userEvent.type(city, 'Loveland')
    const state = screen.findByLabelText(/state:/i)
    userEvent.type(state, 'CA')
    const zip = screen.findByLabelText(/zip:/i)
    userEvent.type(zip, '08977')
    const checkout = getByRole('button')
    userEvent.click(checkout)
    await waitFor(() => {
        const success = screen.getByTestId('successMessage')
        expect(success).toBeInTheDocument();
        const confirm = screen.findByText(/You have ordered some plants! Woo-hoo! /i)
        expect(confirm).toBeInTheDocument();
        const emoji = screen.getByRole('img')
        expect(emoji).toBeInTheDocument();
        const confirm2 =screen.getByText(/Your new green friends will be shipped to:/i)
        expect(confirm2).toBeInTheDocument()
        expect(firstName).toBeInTheDocument()
        expect(lastName).toBeInTheDocument()
        expect(address).toBeInTheDocument()
        expect(city).toBeInTheDocument()
        expect(state).toBeInTheDocument()
        expect(zip).toBeInTheDocument()
    })
});
