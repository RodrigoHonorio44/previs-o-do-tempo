import { useState, useRef, } from 'react'
import axios from 'axios'
import './App.css'
import TempoInformacao from './components/TempoInformacao/TempoInformacao'
import Informacao5dias from './components/Informacao5dias/Informacao5dias'

function App() {
  const [tempo, setTempo] = useState()
  const [info5dias, setInfo5dias] = useState()
  const inputRef = useRef()

  async function searchCity() {
    const city = inputRef.current.value
    const key = "30152349da39ed3662e9f5b51bb6e31d"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const apiDataTempo = await axios.get(url)
    const apiInfo5dias = await axios.get(url5days)

    setTempo(apiDataTempo.data)
    setInfo5dias(apiInfo5dias.data)

    console.log(apiDataTempo);
    console.log(apiInfo5dias);
  }



  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da Cidade' />
      <button onClick={searchCity}>Buscar</button>
      {tempo && <TempoInformacao tempo={tempo} />}
      {info5dias && <Informacao5dias info5dias={info5dias} />}
    </div>
  )
}

export default App
