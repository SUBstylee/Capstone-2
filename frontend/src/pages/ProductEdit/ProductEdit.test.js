import { render } from '@testing-library/react';
import ProductEdit from './ProductEdit';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders ProductEdit component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><ProductEdit /></BrowserRouter></Provider>
    );

    expect(getByText("Go Back")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><ProductEdit /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});