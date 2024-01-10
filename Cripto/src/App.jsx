import './App.css';
import CryptoForm from './components/CryptoForm';
import CryptoData from './components/CryptoData';
import AppProvider from './context/AppProvider';

function App() {

  return (
    <AppProvider>
      <h1>Consulta de Crypto</h1>
      <CryptoForm />
      <CryptoData />
    </AppProvider>
  )
}

export default App;
