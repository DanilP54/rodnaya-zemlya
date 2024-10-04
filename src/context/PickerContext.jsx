import { createContext } from "react"
import { useContext } from "react"
import { ColorPicker } from "@mantine/core"



export const usePickerContext = () => {
    return useContext(PickerContext)
}

export const PickerContext = createContext()


const PickerProvider = ({ children }) => {

 


    return (
        <PickerContext.Provider value={ }>
            {children}
        </PickerContext.Provider>
    )
}


function ColorPickerComponent = () => {
    return <ColorPicker />
}