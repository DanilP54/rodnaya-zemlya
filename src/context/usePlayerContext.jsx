import { useContext } from "react";
import { PlayerContext } from "./PlayerProvider";


export function usePlayerContext() {
    const context = useContext(PlayerContext);

    if (!context) {
        throw new Error('No Provider Context');
    }

    return context;
}
