import { render } from '@testing-library/react';
import ProductDetails from './ProductDetails';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders ProductDetails component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><ProductDetails /></BrowserRouter></Provider>
    );

    expect(getByText("Loading...")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><ProductDetails /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});