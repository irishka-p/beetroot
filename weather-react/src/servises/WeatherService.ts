import { Weather } from "./../store/types/types";
import axios, { AxiosResponse } from "axios";
import api from "../axios";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}`);
  }
}

// lat=49°50′33″ &lon=24°01′56″
