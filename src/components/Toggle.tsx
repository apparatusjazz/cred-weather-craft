import React from 'react';
import "./Toggle.css";

export type ToggleProps = {
    labelA: string;
    labelB: string;
}

const Toggle: React.FC<ToggleProps> = ({labelA, labelB}) => {
    return (
        <div className='toggle-switch'>
            <label>
                <input type='checkbox'/>
                <span className='slider'></span>
            </label>
        </div>
    );
};

export default Toggle;