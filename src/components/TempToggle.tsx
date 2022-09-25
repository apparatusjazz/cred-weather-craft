import React from 'react';
import "./TempToggle.css";

type TempToggleProps = {
    toggleVal: boolean;
    toggleTemp: React.Dispatch<React.SetStateAction<boolean>>;
    themeLight: boolean;
}

const TempToggle: React.FC<TempToggleProps> = ({toggleTemp, toggleVal, themeLight}) => {
    return (
        <div className='toggle-switch'>
            <label className="temp-label dark:bg-stone-600">
                <input type='checkbox' className="dark:bg-stone700 peer" onChange={() => toggleTemp(x => !x)}/>
                <span className='slider dark:peer-checked:bg-stone-600'></span>
                <div className="c" style={{ color: toggleVal ? "white" : themeLight ? "#64aed5" : "#44403c"}}>C&deg;</div>
                <div className="f" style={{ color: !toggleVal ? "white" : themeLight ? "#64aed5" : "#44403c"}}>F&deg;</div>
            </label>
        </div>
    );
};

export default TempToggle;