import React from 'react'
import './Informacao5dias.css'
const Informacao5dias = ({ info5dias }) => {

    console.log(info5dias);
    let previsaoDiarias = {}

    for (let forecast of info5dias.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()
        if (!previsaoDiarias[date]) {
            previsaoDiarias[date] = forecast
        }
    }

    const nextPrevisaoDiariasForecast = Object.values(previsaoDiarias).slice(1, 6)

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", { weekday: 'long', day: "2-digit" })
        return newDate
    }

    return (
        <div className='tempo-container'>
            <h3> Previsão dos Próximos 5 dias</h3>
            <div className='dia-list'>
                {nextPrevisaoDiariasForecast.map((dias) => (
                    <div className='dia-item' key={dias.dt}>
                        <p className='dia'>{convertDate(dias)}</p>
                        <img src={`http://openweathermap.org/img/wn/${dias.weather[0].icon}.png`} alt="" />
                        <p className='temperature'>{Math.round(dias.main.temp)}ºC</p>
                        <p className='dia-description'>{dias.weather[0].description}</p>
                        <p> {Math.round(dias.main.temp_min)}°C Minima : /  Máxima:{Math.round(dias.main.temp_max)}°C </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Informacao5dias