import { render } from '@testing-library/react';
import Shipping from './Shipping.jsx';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders ProductDetails component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><Shipping /></BrowserRouter></Provider>
    );

    expect(getByText("Continue")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><Shipping /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});