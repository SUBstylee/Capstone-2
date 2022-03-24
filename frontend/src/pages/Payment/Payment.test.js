import { render } from '@testing-library/react';
import Payment from './Payment.jsx';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders Payment component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><Payment /></BrowserRouter></Provider>
    );

    expect(getByText("PayPal")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><Payment /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});