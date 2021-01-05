import { render, screen } from '@testing-library/react';
import App from './App';
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const middlewares = [thunk]
const initialState = { };
const mockStore = configureStore(middlewares);

test('renders App', () => {
 render( <Provider store={mockStore(initialState)}>
        <App/> 
        </Provider>)
  const el = screen.getByText(/Gallery/i);
  expect(el).toBeInTheDocument();
});
