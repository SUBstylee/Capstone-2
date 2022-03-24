import { render } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import store from '../../store';
import { Provider } from 'react-redux';

test("renders Header component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );

    expect(getByText("Sign In")).toBeInTheDocument();
    expect(getByText("Cart")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});