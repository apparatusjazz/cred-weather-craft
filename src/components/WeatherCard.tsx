import React from 'react';
import {IconType} from "react-icons";

export type WeatherCardProps = {
    day: string;
    icon: React.ReactElement<IconType>;
    temp: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({day, icon, temp}) => {
    return (
        <div className="flex flex-col bg-white items-center justify-center">
            <p className="font-bold text-gray-800">{day}</p>
            {icon}
            <p className="text-2xl text-gray-800">{temp}&deg;</p>
        </div>
    );
};

export default WeatherCard;