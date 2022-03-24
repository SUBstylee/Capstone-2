import { render } from '@testing-library/react';
import Profile from './Profile.jsx';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders ProductDetails component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><Profile /></BrowserRouter></Provider>
    );

    expect(getByText("User Profile")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><Profile /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});