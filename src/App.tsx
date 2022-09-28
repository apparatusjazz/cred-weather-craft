import React, {useState} from 'react';
import './App.css';
import {useWeatherApiGet} from "./hooks/useWeatherApiGet";
import {getFormattedDate} from "./utils";
import {IoLocationSharp} from "react-icons/io5";
import {getWeatherIcon, getWeatherIconDark} from "./getWeatherIcon";
import WeatherCard from "./components/WeatherCard";
import Toggle from "./components/Toggle";
import TempToggle from "./components/TempToggle";


const url = "https://api.open-meteo.com/v1/forecast?latitude=32.77&timezone=America/Chicago&longitude=-96.79&daily=temperature_2m_max&daily=temperature_2m_min&daily=windspeed_10m_max&daily=weathercode&windspeed_unit=mph&current_weather=true";

function App() {
    const { data, loading } = useWeatherApiGet(url);
    const [tempF, setTempF] = useState(true);
    const [themeLight, toggleTheme] = useState(true);

    const generateWeatherCards = () => {
        if (!loading && data.days.length > 0) {
            const cards: any = [];
            for (let i = 1; i < 6; i ++) {
               cards.push(<WeatherCard
                   key={`card-${i}`}
                   day={data.days[i]}
                   theme={themeLight}
                   icon={themeLight ? getWeatherIcon(data.description[i], "dark:text-white text-light-blue text-6xl")
                            : getWeatherIconDark(data.description[i], "dark:text-white text-light-blue text-6xl")}
                   temp={tempF ? data.temperatureF[i] : data.temperatureC[i]}
               />);
            }
            return cards;
        }
    }

    return (
        <div className={`${themeLight ? "" : "dark"}`}>
            <div className="App bg-light-theme dark:bg-dark-theme h-screen w-screen transition-colors duration-800">
                <div className="max-w-4xl mx-auto md:px-5 relative pt-10 md:top-1/2 md:-translate-y-96 md:pt-0">

                    <div className="text-white">
                        <div className="flex justify-center font-bold text-lg">
                            <IoLocationSharp className="mt-1 mr-1"/>
                            <p>Dallas, TX</p>
                        </div>
                        <p className="text-center">{getFormattedDate(new Date())}</p>
                    </div>

                    <div className="h-0 shadow-md bg-contain bg-no-repeat relative mt-5 pt-[54.92%]"
                         style={{ backgroundImage: themeLight ? "url(/Dallas.png)" : "url(/Dallas-night.png)" }}>
                        <div className="flex place-content-between absolute top-0 ml-3 mt-3 md:mt-5 md:ml-6 text-light-blue dark:text-white"
                            style={{width: '-webkit-fill-available'}}>

                            {!loading ?
                                <div className="flex text-5xl md:text-6xl items-end">
                                    <p className="pb-1">{tempF ? data.temperatureF[0] : data.temperatureC[0]}&deg;</p>
                                    <div style={{
                                        transform: !themeLight ? 'rotate(360deg)' : '',
                                        transition: 'transform 1000ms ease'
                                    }}>
                                        {data.description[0] && themeLight ? getWeatherIcon(data.description[0]) : getWeatherIconDark(data.description[0])}
                                    </div>
                                    <div className="flex-col items-start text-base ml-3 font-medium pb-1">
                                        <p>{data.description[0]}</p>
                                        <p>{data.currentWind} mph</p>
                                    </div>
                                </div>
                                : <div></div>}

                            <div className="mr-1 md:mr-5 md:mt-3 grid gap-6 md:flex">
                                <div className="mr-3">
                                    <Toggle toggleVal={themeLight} toggleTheme={toggleTheme}/>
                                </div>
                                <TempToggle toggleTemp={setTempF} toggleVal={tempF} themeLight={themeLight}/>
                            </div>

                        </div>
                    </div>

                    <img src="/cloud.png" className="animate-wiggle absolute dark:opacity-90 hidden lg:block md:top-[260px] md:left-[-150px] md:w-[250px]"/>
                    <img src="/cloud.png" className="animate-wiggleAlt absolute dark:opacity-50 hidden lg:block h-[150px] md:top-[165px] md:right-[-80px]"/>

                    <div className="grid grid-flow-row md:grid-cols-5 md:grid-flow-col gap-px dark:bg-stone-700 bg-gray-300 h-96 md:h-44 mx-5 md:mx-0 shadow-lg rounded-b-md">
                        {!loading && generateWeatherCards()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
