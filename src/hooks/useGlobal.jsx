import { useState } from "react";

export const useGlobal = (route = "") => {
    const [selectedRoute, setSelectedRoute] = useState(route);

    const selectRoute = (route) => {
        setSelectedRoute(route);
    }

    return {
        selectedRoute,
        selectRoute
    }
}