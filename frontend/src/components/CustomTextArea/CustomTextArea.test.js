import { render } from '@testing-library/react';
import CustomTextArea from './CustomTextArea.jsx';

test("renders CustomTextArea component without crashing", () => {
    const { getByText } = render(
        <CustomTextArea
            id='comment'
            name='comment'
            labelText='Comment'
        />
    );

    expect(getByText('C' && 'o' && 'm' && 'm' && 'e' && 'n' && 't')).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <CustomTextArea
            id='comment'
            name='comment'
            labelText='Comment'
            required
        />
    );
    expect(asFragment()).toMatchSnapshot();
});