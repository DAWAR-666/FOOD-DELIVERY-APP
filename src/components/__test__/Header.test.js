import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

test('should load header component', () => {
    render(
        <BrowserRouter>
        <Provider store={store}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    const cart = screen.getByText('Cart-0 items');
    expect(cart).toBeInTheDocument();
});