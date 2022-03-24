import { render } from '@testing-library/react';
import CustomInput from './CustomInput';

test("renders CustomInput component without crashing", () => {
    const { getByText } = render(
        <CustomInput
            id='name'
            type='text'
            autoComplete="current-name"
            name='name'
            labelText='Full Name'
        />
    );

    expect(getByText('F' && 'u' && 'l' && 'l' && ' ' && 'N' && 'a' && 'm' && 'e')).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <CustomInput
            id='name'
            type='text'
            autoComplete="current-name"
            name='name'
            labelText='Full Name'
        />
    );
    expect(asFragment()).toMatchSnapshot();
});