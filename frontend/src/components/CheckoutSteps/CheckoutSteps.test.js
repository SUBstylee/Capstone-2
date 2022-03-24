import { render } from '@testing-library/react';
import CheckoutSteps from './CheckoutSteps.jsx'

test("renders CheckoutSteps component without crashing", () => {
    const { getByText } = render(
        <CheckoutSteps />
    );

    expect(getByText("Sign In")).toBeInTheDocument();
    expect(getByText("Shipping")).toBeInTheDocument();
    expect(getByText("Payment")).toBeInTheDocument();
    expect(getByText("Place Order")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <CheckoutSteps />
    );
    expect(asFragment()).toMatchSnapshot();
});