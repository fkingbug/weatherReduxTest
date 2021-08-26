import { WeatherProps } from './../types/weather'

export enum ActionEnum {
  FETCH_WEATHER = 'FETCH_WEATHER',
  FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS',
  FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR',
}

interface actionWeatherFetch {
  type: ActionEnum.FETCH_WEATHER
}
interface actionWeatherFetchSuccess {
  type: ActionEnum.FETCH_WEATHER_SUCCESS
  payload: any
}
interface actionWeatherFetchError {
  type: ActionEnum.FETCH_WEATHER_ERROR
  payload: string
}
interface initialStateProps {
  weather: WeatherProps | null
  isLoading: boolean
  error: string | null
}
export interface WeatherProps {
  name: string
  weather: skyProp[]
  main: tempProp
}

interface skyProp {
  main: string
}

interface tempProp {
  temp: number
}
