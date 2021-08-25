import axios from 'axios'
import { Dispatch } from 'react'
import { ActionTypes, ActionEnum } from './rootReducer'

export const fetchWeather = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    try {
      dispatch({ type: ActionEnum.FETCH_WEATHER })
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?q=Москва&appid=5c02c94d726db1563810b36a96db3c02`,
      )
      dispatch({ type: ActionEnum.FETCH_WEATHER_SUCCESS, payload: response.data })
    } catch (error) {
      dispatch({ type: ActionEnum.FETCH_WEATHER_ERROR, payload: 'Произошла ошибка' })
    }
  }
}
