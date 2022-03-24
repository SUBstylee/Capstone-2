import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

test('renders App component without crashing', () => {
  const { getByText } = render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>);
  expect(getByText("Hats")).toBeInTheDocument();
  expect(getByText("Shoes")).toBeInTheDocument();
  expect(getByText("Jackets")).toBeInTheDocument();
  expect(getByText("Women")).toBeInTheDocument();
  expect(getByText("Men")).toBeInTheDocument();
  expect(getByText("All")).toBeInTheDocument();
  expect(getByText("Copyright © Totally Awesome Apparel")).toBeInTheDocument();
});

test("matches snapshot", function () {
  const { asFragment } = render(
    <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
