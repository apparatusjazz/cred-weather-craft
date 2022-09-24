import React from 'react';
import "./Toggle.css";
import {WiDaySunny} from "react-icons/wi";

type ThemeToggleProps = {
    toggleVal: boolean;
    toggleTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggle: React.FC<ThemeToggleProps> = ({toggleTheme, toggleVal}) => {
    return (
        <div className='toggler'>
            <label className="toggle-label relative">
                <input type='checkbox' onChange={() => toggleTheme(x => !x)}/>
                <span className='slide'></span>
                <WiDaySunny className="text-orange-500 absolute right-[7px] top-[7px]" style={{display: toggleVal ? "none" : "block"}}/>
            </label>
        </div>
    );
};

export default Toggle;