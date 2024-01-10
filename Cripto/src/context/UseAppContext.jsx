import { useContext } from 'react';
import { AppContext } from './AppContext';

const UseAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
};

export { UseAppContext };