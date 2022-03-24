import { render } from '@testing-library/react';
import Toast from './Toast.jsx';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders Toast component without crashing", () => {
    const { queryByText } = render(
        <Provider store={store}><BrowserRouter><Toast messageTitle='test title' messageText='test text' /></BrowserRouter></Provider>
    );

    expect(queryByText('test title')).toBeInTheDocument();
    expect(queryByText('test text')).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><Toast messageTitle='test title' messageText='test text' /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});