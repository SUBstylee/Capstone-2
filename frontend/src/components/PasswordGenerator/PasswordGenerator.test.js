import { render } from '@testing-library/react';
import PasswordGenerator from './PasswordGenerator.jsx';

test("renders PasswordGenerator component without crashing", () => {
    const { getByText } = render(
        <PasswordGenerator />
    );

    expect(getByText('Password Generator')).toBeInTheDocument();
    expect(getByText('Password Length (6-20)')).toBeInTheDocument();
    expect(getByText('Include uppercase letters')).toBeInTheDocument();
    expect(getByText('Include lowercase letters')).toBeInTheDocument();
    expect(getByText('Include numbers')).toBeInTheDocument();
    expect(getByText('Password Length (6-20)')).toBeInTheDocument();
    expect(getByText('Include symbols')).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <PasswordGenerator />
    );
    expect(asFragment()).toMatchSnapshot();
});