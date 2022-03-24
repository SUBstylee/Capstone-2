import { render } from '@testing-library/react';
import Loader from './Loader.jsx';

test("renders Loader component without crashing", () => {
    const { getByText } = render(
        <Loader />
    );
    expect(getByText('Loading...')).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Loader />
    );
    expect(asFragment()).toMatchSnapshot();
});