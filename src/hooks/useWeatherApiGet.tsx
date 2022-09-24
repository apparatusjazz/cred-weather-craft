import { useState, useEffect } from 'react';
import {avg, convertToF, timeToWeekDay, weatherCodeToDescription} from "../utils";

export type WeatherResponse = {
    status: Number;
    statusText: String;
    data: DailyWeather;
    error: any;
    loading: Boolean;
};

type DailyWeather = {
    days: Array<string>;
    temperatureC: Array<number>
    temperatureF: Array<number>
    description: Array<string>
}

export const useWeatherApiGet = (url: string): WeatherResponse => {
    const [status, setStatus] = useState<Number>(0);
    const [statusText, setStatusText] = useState<String>('');
    const [data, setData] = useState<DailyWeather>({
        days: [],
        temperatureC: [],
        temperatureF: [],
        description: []
    });
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);

    const getAPIData = async () => {
        setLoading(true);
        try {
            const apiResponse = await fetch(url);
            const json = await apiResponse.json();
            setStatus(apiResponse.status);
            setStatusText(apiResponse.statusText);

            // @ts-ignore
            const daily = json.daily;
            const days = daily.time.map((time: string) => timeToWeekDay(time));
            const tempC = daily["temperature_2m_max"].map((temp: number, idx: number) => {
                return Math.round(avg(temp, daily["temperature_2m_min"][idx]));
            })
            const tempF = tempC.map((temp: number) => Math.round(convertToF(temp)));
            const desc = daily["weathercode"].map((code: number) => weatherCodeToDescription(code));
            const weather: DailyWeather = {
                days,
                temperatureC: tempC,
                temperatureF: tempF,
                description: desc
            }
            setData(weather);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getAPIData();
    }, []);

    return { status, statusText, data, error, loading };
};