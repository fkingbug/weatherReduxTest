import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from './store/useTypedSelector'

import { rootReducer } from './store/rootReducer'
import { fetchWeather } from './store/actionCreator'

function App() {
  const dispatch = useDispatch()
  const [searchWeather, setSearchWeather] = React.useState<any>()
  const { weather, isLoading, error } = useTypedSelector(state => state)

  useEffect(() => {
    dispatch(fetchWeather())
  }, [])

  if (isLoading) {
    return <h1>Идет загрузка</h1>
  }
  if (error) {
    return <h1>Произошла ошибка</h1>
  }

  const tempMatch = (temp: number) => Math.floor(temp - 273.15)
  return (
    <div className="App">
      <input
        onChange={e => setSearchWeather(e.target.value)}
        type="text"
        placeholder="Поиск..."
        value={searchWeather}
      />
      <button onClick={() => dispatch(fetchWeather(searchWeather))}>Найти</button>
      <br />
      {weather && (
        <div>
          <p>{weather?.name}</p>
          <p>{weather.weather[0].main}</p>
          <p>{tempMatch(weather.main.temp)}C'</p>
        </div>
      )}
    </div>
  )
}

export default App
