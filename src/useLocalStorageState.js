import { useEffect, useState } from 'react';

export const useLocalStorageState = (keyName, initialValue) => {
    const getInitialState = () => {
        return JSON.parse(localStorage.getItem(keyName)) || initialValue;
    };

    const [state, setState] = useState(getInitialState);

    useEffect((keyName) => {
        localStorage.setItem(keyName, JSON.stringify(state));
    }, [state]);

    return [state, setState];
};