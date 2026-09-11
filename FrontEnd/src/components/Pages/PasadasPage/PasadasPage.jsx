import React from 'react'
import './PasadasPage.css'
import { pasadasData } from '../../../data/pasadas'

const PasadasPage = () => {
  const pasadasAntiguas = pasadasData.filter(p => p.new == false)
  const pasadasNuevas = pasadasData.filter(p => p.new == true)

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
                    {pasadasNuevas.map(pasada => (
                        <p> {pasada.name}: {pasada.fecha} - {pasada.hora} - Inclination: {pasada.Inclination}</p>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PasadasPage