import { useEffect } from 'react';
import { UseAppContext } from '../context/UseAppContext';

const CryptoData = () => {
  const { cryptoData, loading } = UseAppContext();

  useEffect(() => {
    console.log('CryptoData', cryptoData);
  },[cryptoData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container crypto-container">
      <h2>Dados da Crypto</h2>
      <div className="crypto-data">
        <pre>{JSON.stringify(cryptoData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default CryptoData;