import { render } from '@testing-library/react';
import PlaceOrder from './PlaceOrder.jsx';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders Home component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><PlaceOrder /></BrowserRouter></Provider>
    );

    expect(getByText("Items In Order")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><PlaceOrder /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});