
import {createContext, useState} from 'react'
import data from './data.json';


export const Jobs = createContext(data);

export function JobProvider(props) {
    const {_currentValue} = Jobs;

    
    return <Jobs.Provider value={_currentValue}>{props.children}</Jobs.Provider>
}