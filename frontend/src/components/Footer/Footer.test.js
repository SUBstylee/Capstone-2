import { render } from '@testing-library/react';
import Footer from './Footer';

test("renders Footer component without crashing", () => {
    const { getByText } = render(
        <Footer />
    );

    expect(getByText("Copyright © Totally Awesome Apparel")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Footer />
    );
    expect(asFragment()).toMatchSnapshot();
});