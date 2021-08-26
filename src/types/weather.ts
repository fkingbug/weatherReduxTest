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
