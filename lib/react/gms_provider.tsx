import {createContext} from "react";

export interface GMSProviderProps {
    children: any
}

export const GMSContext = createContext({});

export const GMSProvider: React.FC<GMSProviderProps> = (props) => {
    let state = {
    };
    return (
        <GMSContext.Provider value={{
            state: state
        }}>
            {props.children}
        </GMSContext.Provider>
    )
}