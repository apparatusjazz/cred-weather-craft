import {IconType} from "react-icons";
import {
    WiCloud,
    WiDayCloudy, WiDayShowers,
    WiDaySnow,
    WiDayStormShowers,
    WiDaySunny,
    WiDaySunnyOvercast, WiRain,
    WiShowers
} from "react-icons/wi";
import {ReactElement} from "react";


export const useWeatherIcon = (weatherDescription: string): ReactElement<IconType> => {
    if (weatherDescription.includes("Clear skies"))
        return <WiDaySunny/>
    if (weatherDescription.includes("Mostly clear"))
        return <WiDaySunnyOvercast/>
    if (weatherDescription.includes("Partly cloudy"))
        return <WiDayCloudy/>
    if (weatherDescription.includes("Overcast"))
        return <WiCloud/>
    if (weatherDescription.includes("izzle"))
        return <WiDayShowers/>
    if (weatherDescription.includes("Heavy rain"))
        return <WiRain/>
    if (weatherDescription.includes("rain"))
        return <WiShowers/>
    if (weatherDescription.includes("snowfall"))
        return <WiDaySnow/>
    if (weatherDescription.includes("Thunderstorms"))
        return <WiDayStormShowers/>
    return <WiDaySunny/>
};