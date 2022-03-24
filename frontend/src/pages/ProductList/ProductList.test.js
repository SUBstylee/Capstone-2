import { render } from '@testing-library/react';
import ProductList from './ProductList.jsx';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders ProductList component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><ProductList /></BrowserRouter></Provider>
    );

    expect(getByText("Products")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><ProductList /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});