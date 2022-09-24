import React, {useEffect} from 'react';
import './App.css';
import {useWeatherApiGet, WeatherResponse} from "./hooks/useWeatherApiGet";
import {getFormattedDate} from "./utils";
import {IoLocationSharp} from "react-icons/io5";
import {useWeatherIcon} from "./hooks/useWeatherIcon";


const weatherData: WeatherResponse = {
    data: {
        days: ['Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'],
        currentWind: 10,
        temperatureF: [84, 88, 86, 77, 79, 79, 73],
        temperatureC: [29, 31, 30, 25, 26, 26, 23],
        description: ['Partly cloudy', 'Partly cloudy', 'Overcast', 'Mostly clear', 'Partly cloudy', 'Partly cloudy', 'Mostly clear']
    },
    loading: false,
    status: 200,
    statusText: "",
    error: null,
}

const url = "https://api.open-meteo.com/v1/forecast?latitude=32.77&timezone=America/Chicago&longitude=-96.79&daily=temperature_2m_max&daily=temperature_2m_min&daily=windspeed_10m_max&daily=weathercode&windspeed_unit=mph&current_weather=true";
function App() {
    const { data, loading, error } = weatherData

    return (
    <div className="App bg-gradient-to-bl from-cyan-300 to-blue-600 h-screen w-screen">
        <div className="max-w-4xl mx-auto">
            <div className="text-white">
                <div className="flex justify-center font-bold text-lg">
                    <IoLocationSharp className="mt-1 mr-1"/>
                    <p>Dallas, TX</p>
                </div>
                <p className="text-center">{getFormattedDate(new Date())}</p>
            </div>

            <div className="h-0 shadow-md bg-contain bg-no-repeat relative"
                 style={{ backgroundImage: "url(/Dallas.png)", paddingTop: '54.92%' }}>
                <div className="flex place-content-between absolute top-0 mt-4 ml-4" style={{color: "#64aed5"}}>
                    <div className="flex">
                        <p>{data.temperatureF[0]}</p>
                        {useWeatherIcon(data.description[0])}
                        <div className="flex-col items-start">
                           <p>{data.description[0]}</p>
                            <p>{data.currentWind} mph</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default App;
