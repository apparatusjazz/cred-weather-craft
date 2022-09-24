import React from 'react';
import "./TempToggle.css";

type TempToggleProps = {
    toggleVal: boolean;
    toggleTemp: React.Dispatch<React.SetStateAction<boolean>>;
}

const TempToggle: React.FC<TempToggleProps> = ({toggleTemp, toggleVal}) => {
    return (
        <div className='toggle-switch'>
            <label>
                <input type='checkbox' onChange={() => toggleTemp(x => !x)}/>
                <span className='slider'></span>
                <div className="c" style={{ color: toggleVal ? "white" : "#64aed5"}}>C&deg;</div>
                <div className="f" style={{ color: !toggleVal ? "white" : "#64aed5"}}>F&deg;</div>
            </label>
        </div>
    );
};

export default TempToggle;