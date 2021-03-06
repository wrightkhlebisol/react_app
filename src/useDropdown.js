import React, { useState } from 'react';

const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);
    const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`
    const Dropdown = () => (
        <label htmlFor={id}>
            {label}
            <select
                name={id}
                id={id}
                value={state}
                onBlur={e => setState(e.target.value)}
                onChange={e => setState(e.target.value)}
                disabled={options.length === 0}
            >
                <option>All</option>
                {options.map(item => (
                    <option value={item} key={item}>
                        {item}
                    </option>
                ))}
            </select>
        </label>
    );

    return [state, Dropdown, setState];
}

export default useDropdown;