import { render } from '@testing-library/react';
import TopProducts from './TopProducts';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders Toast component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><TopProducts test='test' /></BrowserRouter></Provider>
    );

    expect(getByText('test')).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><TopProducts test='test' /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});