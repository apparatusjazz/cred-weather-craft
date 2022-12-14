
export const timeToWeekDay = (time: string) => {
    if (isNaN(Date.parse(time))) return "Day";

    const weekday = ["Mon","Tue","Wed","Thu","Fri","Sat", "Sun"];

    const d = new Date(time);
    return weekday[d.getDay()];
}

export const convertToF = (celsius: number) => {
    // make the given fahrenheit constiable equal the given celsius value
    // multiply the given celsius value by 9/5 then add 32
    let fahrenheit = celsius * 9/5 + 32
    // return the constiable fahrenheit as the answer
    return fahrenheit;
}

export const weatherCodeToDescription = (code: number) => {
    const map = {
        0: "Clear skies",
        1: "Mostly clear",
        2: "Partly cloudy",
        3: "Overcast",
        51: "Light drizzle",
        53: "Drizzle",
        55: "Drizzle",
        61: "Light rain",
        63: "Moderate rain",
        65: "Heavy rain",
        66: "Freezing rain",
        67: "Freezing rain",
        71: "Light snowfall",
        73: "Moderate snowfall",
        75: "Heavy snowfall",
        80: "Light rain",
        81: "Moderate rain",
        82: "Heavy rain",
        95: "Thunderstorms",
        96: "Thunderstorms",
        99: "Thunderstorms",
    };
    // @ts-ignore
    if (map[code] === undefined) {
        return "Some weather";
    } else { // @ts-ignore
        return map[code];
    }
}

export const avg = (a: number, b: number) => ((a + b) / 2);

export const getFormattedDate = (today: Date) =>
{
    const week =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day  = week[today.getDay()];
    const dd   = today.getDate();
    const mm   = month[today.getMonth()];
    const yyyy = today.getFullYear();


    return `${day}, ${mm} ${dd}, ${yyyy}`
}