import { render } from '@testing-library/react';
import MenuItem from './MenuItem.jsx';
import store from '../../store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test("renders MenuItem component without crashing", () => {
    const { getByText } = render(
        <Provider store={store}><BrowserRouter><MenuItem
            title='hats'
            imageUrl='/assets/images/shop-img/hats.png'
            id={1}
            linkUrl='__Hats__'
        /></BrowserRouter></Provider>
    );

    expect(getByText('HATS')).toBeInTheDocument();
});

test("matches snapshot", function () {
    const { asFragment } = render(
        <Provider store={store}><BrowserRouter><MenuItem
            title='hats'
            imageUrl='/assets/images/shop-img/hats.png'
            id={1}
            linkUrl='__Hats__'
        /></BrowserRouter></Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});