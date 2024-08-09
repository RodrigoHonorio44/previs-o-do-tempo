import React from 'react'
import './TempoInformacao.css'
const TempoInformacao = ({ tempo }) => {
    return (
        <div className='tempo-container'>
            <h2>{tempo.name}</h2>
            <div className='tempo-info'>
                <img src={`http://openweathermap.org/img/wn/${tempo.weather[0].icon}.png`} alt="" />
                <p className='temperature'>{Math.round(tempo.main.temp)}ºC</p>
            </div>
            <p className='description'>{tempo.weather[0].description}</p>
            <div className='details'>
                <p>Sensação Térmica: {Math.round(tempo.main.feels_like)}ºC</p>
                <p>Umidade: {tempo.main.humidity}%</p>
                <p>Pressão: {tempo.main.pressure}</p>
            </div>
        </div>
    )
}

export default TempoInformacao