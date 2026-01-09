import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';

test('should load header component', () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    const cart = screen.getByText('CART (0 items)');
    expect(cart).toBeInTheDocument();
});
test('should have logo in header component', () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    const logo = screen.getByAltText('App Logo');
    expect(logo).toBeInTheDocument();
});