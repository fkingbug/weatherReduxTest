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
  weather: any
  isLoading: boolean
  error: string | null
}
const initialState: initialStateProps = {
  weather: {},
  isLoading: false,
  error: null,
}

export type ActionTypes =
  | actionWeatherFetch
  | actionWeatherFetchSuccess
  | actionWeatherFetchError

export const rootReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ActionEnum.FETCH_WEATHER:
      return {
        weather: {},
        isLoading: true,
        error: null,
      }
    case ActionEnum.FETCH_WEATHER_SUCCESS:
      return {
        weather: action.payload,
        isLoading: false,
        error: null,
      }
    case ActionEnum.FETCH_WEATHER_ERROR:
      return {
        weather: {},
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
