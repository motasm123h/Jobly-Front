import { createContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategory, getSection } from "../actions/HelperAction";

export const PusherContext = createContext();

export const PusherProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getSection());
        dispatch(getCategory());
    }, [dispatch]); 

    return (
        <PusherContext.Provider value={{}}>
            {children}
        </PusherContext.Provider>
    );
};
