import { render } from '@testing-library/react';
import Search from './Search.jsx';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders Search component without crashing", () => {
    const { queryByPlaceholderText } = render(
        <Provider store={store}><BrowserRouter><Search /></BrowserRouter></Provider>
    );

    expect(queryByPlaceholderText(/Search Products.../i)).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><Search /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});