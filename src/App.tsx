import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from './store/useTypedSelector'

import { rootReducer } from './store/rootReducer'
import { fetchWeather } from './store/actionCreator'

function App() {
  const dispatch = useDispatch()
  const { weather, isLoading, error } = useTypedSelector(state => state)

  useEffect(() => {
    dispatch(fetchWeather())
    console.log(weather.city)
  }, [])

  if (isLoading) {
    return <h1>Идет загрузка</h1>
  }
  if (error) {
    return <h1>Произошла ошибка</h1>
  }

  return <div className="App"></div>
}

export default App
