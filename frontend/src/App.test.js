import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

test('renders App component without crashing', () => {
  const { getByText } = render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
  expect(getByText("Welcome to Totally Awesome Apparel")).toBeInTheDocument();
});

test("matches snapshot", function () {
  const { asFragment } = render(
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
