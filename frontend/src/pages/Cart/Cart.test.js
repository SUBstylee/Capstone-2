import { render } from '@testing-library/react';
import Cart from './Cart';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders Cart component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><Cart /></BrowserRouter></Provider>
    );

    expect(getByText("Shopping Cart")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><Cart /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});