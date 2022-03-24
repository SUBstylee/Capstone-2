import { render } from '@testing-library/react';
import Product from './Product';
import { BrowserRouter } from 'react-router-dom';

describe('test', () => {
    let product;
    beforeEach(() => {
        product = {
            rating: 5,
            numReviews: 1,
            price: 35.99,
            countInStock: 9,
            _id: "123",
            name: "Test Product",
            user: "456",
            image:
                "placeholder",
            category: "test",
            brand: "test brand",
            description:
                "This is a test.",
            reviews: [
                {
                    _id: "123456",
                    name: "John Doe",
                    rating: 5,
                    comment: "Test comment.",
                    user: "789",
                    createdAt: "2022-03-02T09:17:00.324Z",
                    updatedAt: "2022-03-02T09:17:00.324Z",
                },
            ],
            createdAt: "2021-09-02T06:30:21.695Z",
            updatedAt: "2021-09-09T17:44:57.014Z",
            __v: 1,
        };
    });

    test("renders Product component without crashing", () => {
        const { getByText } = render(
            <BrowserRouter>
                <Product product={product} />
            </BrowserRouter>
        );

        expect(getByText("Test Product")).toBeInTheDocument();
        // expect(getByText("1 reviews")).toBeInTheDocument();
        expect(getByText("$35.99")).toBeInTheDocument();
    });

    test("matches snapshot", function () {
        const { asFragment } = render(
            <BrowserRouter>
                <Product product={product} />
            </BrowserRouter>
        );
        expect(asFragment()).toMatchSnapshot();
    });

});