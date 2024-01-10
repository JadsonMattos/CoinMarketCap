import { UseAppContext } from '../context/UseAppContext';

const CryptoForm = () => {
  const { handleSearch, error, setError } = UseAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const currencie = e.target.elements.currencie.value.toUpperCase();
    if (!currencie) {
      setError(true);
    } else {
      handleSearch(currencie);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="crypto-container">
        <label>
          Crypto:
          <input
            type="text"
            name="currencie"
          />
        </label>
        <button type="submit">Search</button>
        {error && <p className="error-message">Por favor, preencha o campo</p>}
      </form>
    </div>
  );
};

export default CryptoForm;