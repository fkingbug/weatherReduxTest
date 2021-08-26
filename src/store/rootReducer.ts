import { ActionTypes, initialStateProps, ActionEnum } from '../types/weather'

const initialState: initialStateProps = {
  weather: null,
  isLoading: false,
  error: null,
}

export const rootReducer = (state = initialState, action: ActionTypes): initialStateProps => {
  switch (action.type) {
    case ActionEnum.FETCH_WEATHER:
      return {
        weather: null,
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
        weather: null,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
