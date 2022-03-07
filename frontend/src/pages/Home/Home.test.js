import { render } from '@testing-library/react';
import Home from './Home';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders Home component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>
    );

    expect(getByText("Latest Products")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});