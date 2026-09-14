import React, { useEffect, useState } from 'react'

import axios from "axios";
import './PasadasPage.css'
import { pasadasData } from '../../../data/pasadas'

const PasadasPage = () => {
  const [pasadas, setPasadas] = useState([]);

  const pasadasNuevas = pasadasData.filter(p => p.new == true)

    useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/api/pasadas")
        .then(response => {
            setPasadas(response.data);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }, []);

  return (
    <div className="PasadasPage">
      <div className='PasadasPageCard'>
        <div className='pasadasPageTitle'>
            <h4>Pasadas</h4>
        </div>
        <div className='pasadasPageDataContainer'>
            <div className='pasadasData'>
                <h5 className='text'>Próximas pasadas</h5>
                <div className='eachPasadaContainer'>
                    {pasadas.map(pasada => (
                        <p> {pasada.sat_name}: {pasada.aos} - Inclination: {pasada.elev_max}</p>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PasadasPage