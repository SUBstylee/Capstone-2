import { render } from '@testing-library/react';
import Register from './Register.jsx';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders ProductDetails component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><Register /></BrowserRouter></Provider>
    );

    expect(getByText("Sign Up")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><Register /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});