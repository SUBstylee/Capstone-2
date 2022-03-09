import { render } from '@testing-library/react';
import Message from './Message';

test("renders Message component without crashing", () => {
    const { getByText } = render(
        <Message variant='alert' children='test message' />
    );

    expect(getByText("test message")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Message />
    );
    expect(asFragment()).toMatchSnapshot();
});