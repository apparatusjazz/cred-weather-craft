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


export const getWeatherIcon = (weatherDescription: string, styleClass: string = ""): ReactElement<IconType> => {
    if (weatherDescription.includes("Clear skies"))
        return <WiDaySunny className={styleClass}/>
    if (weatherDescription.includes("Mostly clear"))
        return <WiDaySunnyOvercast className={styleClass}/>
    if (weatherDescription.includes("Partly cloudy"))
        return <WiDayCloudy className={styleClass}/>
    if (weatherDescription.includes("Overcast"))
        return <WiCloud className={styleClass}/>
    if (weatherDescription.includes("izzle"))
        return <WiDayShowers className={styleClass}/>
    if (weatherDescription.includes("Light rain"))
        return <WiDayShowers className={styleClass}/>
    if (weatherDescription.includes("Heavy rain"))
        return <WiRain className={styleClass}/>
    if (weatherDescription.includes("rain"))
        return <WiShowers className={styleClass}/>
    if (weatherDescription.includes("snowfall"))
        return <WiDaySnow className={styleClass}/>
    if (weatherDescription.includes("Thunderstorms"))
        return <WiDayStormShowers className={styleClass}/>
    return <WiDaySunny className={styleClass}/>
};