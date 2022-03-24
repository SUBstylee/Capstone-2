import { render } from '@testing-library/react';
import Directory from './Directory.jsx';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders Directory component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><Directory /></BrowserRouter></Provider>
    );

    expect(getByText('HATS' && 'SHOES' && 'JACKETS' && 'MEN' && 'WOMEN' && 'ALL')).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><Directory /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});