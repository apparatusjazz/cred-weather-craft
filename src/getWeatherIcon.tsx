import {IconType} from "react-icons";
import {
    WiCloud,
    WiCloudy,
    WiDayCloudy,
    WiDayShowers,
    WiDaySnow, WiDaySprinkle,
    WiDayStormShowers,
    WiDaySunny,
    WiDaySunnyOvercast, WiNightAltCloudyHigh,
    WiNightAltSprinkle,
    WiNightAltStormShowers,
    WiNightClear,
    WiNightCloudy,
    WiNightRain, WiNightShowers,
    WiNightSnow,
    WiRain,
    WiShowers
} from "react-icons/wi";
import {ReactElement} from "react";


export const getWeatherIcon = (weatherDescription: string, styleClass: string = ""): ReactElement<IconType> => {
    if (weatherDescription.includes("Clear skies"))
        return <WiDaySunny className={styleClass}/>
    if (weatherDescription.includes("Mostly clear"))
        return <WiDaySunny className={styleClass}/>
    if (weatherDescription.includes("Partly cloudy"))
        return <WiDayCloudy className={styleClass}/>
    if (weatherDescription.includes("Overcast"))
        return <WiDaySunnyOvercast className={styleClass}/>
    if (weatherDescription.includes("izzle"))
        return <WiDaySprinkle className={styleClass}/>
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

export const getWeatherIconDark = (weatherDescription: string, styleClass: string = ""): ReactElement<IconType> => {
    if (weatherDescription.includes("Clear skies"))
        return <WiNightClear className={styleClass}/>
    if (weatherDescription.includes("Mostly clear"))
        return <WiNightClear className={styleClass}/>
    if (weatherDescription.includes("Partly cloudy"))
        return <WiNightCloudy className={styleClass}/>
    if (weatherDescription.includes("Overcast"))
        return <WiNightAltCloudyHigh className={styleClass}/>
    if (weatherDescription.includes("izzle"))
        return <WiNightAltSprinkle className={styleClass}/>
    if (weatherDescription.includes("Light rain"))
        return <WiNightRain className={styleClass}/>
    if (weatherDescription.includes("Heavy rain"))
        return <WiRain className={styleClass}/>
    if (weatherDescription.includes("rain"))
        return <WiNightShowers className={styleClass}/>
    if (weatherDescription.includes("snowfall"))
        return <WiNightSnow className={styleClass}/>
    if (weatherDescription.includes("Thunderstorms"))
        return <WiNightAltStormShowers className={styleClass}/>
    return <WiNightClear className={styleClass}/>
};