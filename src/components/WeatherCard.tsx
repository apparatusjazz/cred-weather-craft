import React from 'react';
import {IconType} from "react-icons";

export type WeatherCardProps = {
    day: string;
    icon: React.ReactElement<IconType>;
    temp: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({day, icon, temp}) => {
    return (
        <div className="dark:bg-stone-600 flex md:flex-col bg-white items-center justify-between md:justify-center flex-row px-5 h-20 md:h-auto rounded-b-sm">
            <p className="dark:text-white font-bold text-gray-800">{day}</p>
            {icon}
            <p className="dark:text-white text-2xl text-gray-800">{temp}&deg;</p>
        </div>
    );
};

export default WeatherCard;