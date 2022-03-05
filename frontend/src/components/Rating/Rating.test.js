import { render } from '@testing-library/react';
import Rating from './Rating';
import { BrowserRouter } from 'react-router-dom';

describe('test', () => {
    let value, text;
    beforeEach(() => {
        (value = 5), (text = `1 review`)
    });
    test("renders Rating component without crashing", () => {
        const { getByText } = render(
            <BrowserRouter>
                <Rating value={value} text={text} />
            </BrowserRouter>
        );

        expect(getByText('1 review')).toBeInTheDocument();
    });

    test("matches snapshot", function () {
        const { asFragment } = render(
            <BrowserRouter>
                <Rating value={value} text={text} />
            </BrowserRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });

});