import { render } from '@testing-library/react';
import Login from './Login';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders Login component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><Login /></BrowserRouter></Provider>
    );

    expect(getByText("Sign In")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><Login /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});