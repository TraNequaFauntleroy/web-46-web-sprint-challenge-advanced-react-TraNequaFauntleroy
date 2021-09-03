import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    // render(<CheckoutForm/>)
    // const firstName = screen.queryByLabelText('First Name:')
    // userEvent.type(firstName, 'NeNeee')
    // const lastName = screen.queryByLabelText('Last Name:')
    // userEvent.type(lastName, 'Fauntleroy')
    // const address = screen.queryByLabelText('Address:')
    // userEvent.type(address, '123 Love Lane')
    // const city = screen.queryByLabelText('City:')
    // userEvent.type(city, 'Loveland')
    // const state = screen.queryByLabelText('State:')
    // userEvent.type(state, 'CA')
    // const zip = screen.queryByLabelText('Zip')
    // userEvent.type(zip, '08977')
    // const submit = getByRole('button')
    // userEvent.click(submit)
    // await waitFor(() => {
    //     const success = screen.getByTestId('successMessage')
    //     expect(success).toBeInTheDocument();
    // })
});
