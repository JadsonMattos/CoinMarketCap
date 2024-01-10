import { useEffect, useState } from 'react';
import { fetchCrypto } from '../services/api';
import { AppContext } from './AppContext';

import PropTypes from 'prop-types';

const AppProvider = ({ children }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currencie, setCurrencie] = useState('');
  const [error, setError] = useState(false);
  
  const handleSearch = async (currencie) => {
    if (!currencie) {
      console.log('Currencie is not defined');
      return;
    }
    try {
      setLoading(true);
      const data = await fetchCrypto(currencie);
      setCryptoData(data);
      setError(false);
      setCurrencie(currencie);
      setLoading(false);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }

  useEffect(() => {
    handleSearch(currencie);
  }, [currencie]);

  AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const contextValue = {
    cryptoData,
    handleSearch,
    error,
    loading,
    currencie,
    setError,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;