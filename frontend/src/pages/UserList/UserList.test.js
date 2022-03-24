import { render } from '@testing-library/react';
import UserList from './UserList.jsx';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders ProductDetails component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><UserList /></BrowserRouter></Provider>
    );

    expect(getByText("Users")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><UserList /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});