import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const PasadasContext = createContext(null);

export const PasadasProvider = ({ children }) => {
  const [pasadas, setPasadas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPasadas = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/pasadas");
      setPasadas(response.data);
      setError(null);
    } catch (err) {
      console.error("Error al obtener pasadas:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPasadas();
  }, []);

  return (
    <PasadasContext.Provider value={{ pasadas, loading, error, refetchPasadas: fetchPasadas }}>
      {children}
    </PasadasContext.Provider>
  );
};

export const usePasadas = () => {
  const context = useContext(PasadasContext);
  if (!context) {
    throw new Error('usePasadas debe usarse dentro de un PasadasProvider');
  }
  return context;
};