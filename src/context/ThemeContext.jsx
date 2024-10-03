import { createContext, useContext, useEffect, useState } from "react"






const ThemeContext = createContext()


export function useThemeContext() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('No Theme Provider Context')
    }
    return context
}



export function ThemeProvider({ children, storageKey = 'rz-ui-theme', defaultTheme = 'light' }) {


    const [theme, setTheme] = useState(window.localStorage.getItem(storageKey) || defaultTheme)



    useEffect(() => {

        const systemThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const updateTheme = (e) => {
            const newSystemTheme = e.matches ? 'dark' : 'light'
            return newSystemTheme === 'dark' ? setTheme('dark') : setTheme('light')
        }




        systemThemeMediaQuery.addEventListener("change", updateTheme)

        return () => {

            systemThemeMediaQuery.removeEventListener("change", updateTheme)
        }
    }, [theme])



    const value = {
        theme,
        setTheme(theme) {
            document.body.classList.add('transition')
            window.localStorage.setItem(storageKey, theme)
            setTheme(theme)
        }
    }

    return (
        <>
            <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
        </>
    )
}