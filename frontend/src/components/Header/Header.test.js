import { render } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

test("renders Footer component without crashing", () => {
    const { getByText } = render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );

    expect(getByText("Sign In")).toBeInTheDocument();
    expect(getByText("Cart")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});