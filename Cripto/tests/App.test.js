import { render, fireEvent } from '@testing-library/react';
import CryptoData from '../components/CryptoData';
import CryptoForm from '../components/CryptoForm';
import userEvent from '@testing-library/user-event';
import { fetchCrypto } from '../services/api';

jest.mock('../services/api');

describe('All project', () => {
  it('CryptoData renders correctly', () => {
    const { getByText } = render(<CryptoData />);
    const headingElement = getByText('Dados da Crypto');
    expect(headingElement).toBeInTheDocument();
  });

  it('CryptoData updates state on user interaction', () => {
    const { getByText, screen } = render(<CryptoData />);
    const loadingElement = getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
    userEvent.click(screen.getByRole('button', { name: /search/i }));
    const cryptoNameElement = getByText('Bitcoin');
    expect(cryptoNameElement).toBeInTheDocument();
  });

  it('CryptoForm calls handleSearch on form submission', () => {
    const mockHandleSearch = jest.fn();
    const { getByRole } = render(<CryptoForm handleSearch={mockHandleSearch} />);
    fireEvent.click(getByRole('button', { name: /submit/i }));
    expect(mockHandleSearch).toHaveBeenCalled();
  });

  

  test('CryptoData fetches and displays data from API', async () => {
    const mockCryptoData = {
      name: 'Bitcoin',
      price: 50000,
    };
    fetchCrypto.mockResolvedValue(mockCryptoData);
    const { getByText, findByText } = render(<CryptoData />);
    const loadingElement = getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();
    const cryptoNameElement = await findByText('Bitcoin');
    expect(cryptoNameElement).toBeInTheDocument();
  });
});
