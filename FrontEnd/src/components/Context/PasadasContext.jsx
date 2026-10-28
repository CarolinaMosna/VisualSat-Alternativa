import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const PasadasContext = createContext(null);

export const PasadasProvider = ({ children }) => {
  const [pasadas, setPasadas] = useState([]);
  const [pasadasSatelite, setPasadasSatelite] = useState([]);
  const [sateliteActivo, setSateliteActivo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = "http://127.0.0.1:8000/api";

  const fetchPasadas = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/pasadas`);
      setPasadas(response.data);
      setError(null);
    } catch (err) {
      console.error("Error al obtener pasadas:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchPasadasPorSatelite = useCallback(async (satelite) => {
    if (!satelite) return;
    setLoading(true);
    setError(null);
    setSateliteActivo(satelite);
    try {
      const response = await axios.get(`${API_BASE_URL}/pasadas`, {
        params: {
          satelite: satelite
        }
      });
      setPasadasSatelite(response.data);
      return response.data;
    } catch (err) {
      console.error(`Error al obtener pasadas para ${satelite}:`, err);
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const limpiarFiltroSatelite = useCallback(() => {
    setPasadasSatelite([]);
    setSateliteActivo(null);
  }, []);

  useEffect(() => {
    fetchPasadas();
  }, [fetchPasadas]);

  return (
    <PasadasContext.Provider
      value={{
        pasadas,
        pasadasSatelite,
        sateliteActivo,
        loading,
        error,
        refetchPasadas: fetchPasadas,
        fetchPasadasPorSatelite,
        limpiarFiltroSatelite
      }}
    >
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