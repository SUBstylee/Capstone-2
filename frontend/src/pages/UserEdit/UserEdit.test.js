import { render } from '@testing-library/react';
import UserEdit from './UserEdit.jsx';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders ProductDetails component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><UserEdit /></BrowserRouter></Provider>
    );

    expect(getByText("Update")).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><UserEdit /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});