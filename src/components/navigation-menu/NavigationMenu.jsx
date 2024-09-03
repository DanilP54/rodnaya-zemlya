import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"
import { Input } from "@mantine/core"
import { Link, useLocation } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useLayoutEffect } from "react"




const links = [
    {
        name: 'Фильмы',
        url: 'films'
    },
    {
        name: 'Музыка',
        url: 'music'

    },
    {
        name: 'Игры',
        url: 'games'

    },
    {
        name: 'Живопись',
        url: 'arts'

    },
    {
        name: 'Литература',
        url: 'literature'

    }
]


function SearchIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-search">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
        </svg>
    )
}


const buttonsList = [
    {
        id: 1,
        color: '#CD5C5C',
        isActive: false,
        isSelected: false,
        menu: [
            {
                name: 'Unknow',
                path: '/unknow'
            },
            {
                name: 'Unknow',
                path: '/unknow'
            },
            {
                name: 'Unknow',
                path: '/unknow'
            },
            {
                name: 'Unknow',
                path: '/unknow'
            },
            {
                name: 'Unknow',
                path: '/unknow'
            }

        ]

    }, {
        id: 2,
        color: '#00FA9A',
        isActive: false,
        isSelected: false,
        menu: [
            {
                name: 'Unknow',
                path: '/unknow'
            },
            {
                name: 'Unknow',
                path: '/unknow'
            },
            {
                name: 'Unknow',
                path: '/unknow'
            },
            {
                name: 'Unknow',
                path: '/unknow'
            },
            {
                name: 'Unknow',
                path: '/unknow'
            }

        ]

    },
    {
        id: 3,
        color: '#00CED1',
        isActive: false,
        isSelected: false,
        menu: [
            {
                name: 'Фильмы',
                path: '/films'
            },
            {
                name: 'Музыка',
                path: '/music'
            },
            {
                name: 'Игры',
                path: '/games'
            },
            {
                name: 'Живопись',
                path: '/arts'
            },
            {
                name: 'Литература',
                path: '/literature'
            }

        ]

    }

]



export function NavigationMenu() {

    const [buttons, setButtons] = useState(buttonsList)

    const location = useLocation()

    const [buttonIsSelected, setButtonsSelected] = useState(false)

    useLayoutEffect(() => {
        buttons.forEach(button => {
            button.menu.forEach(link => {
                if (link.path === location.pathname) {
                    button.isSelected = true
                    button.isActive = true
                    setButtonsSelected(true)
                    setButtons(s => [...s])
                }
            })
        })

        const handleBodyClick = (e) => {
            console.log(e.target.closest('#nav'))
            if (e.target.closest('#nav') === null) {

                buttons.forEach(button => {
                    if (!button.isSelected) {
                        button.isActive = false
                    }
                })
            }
        }

        document.body.addEventListener('pointerdown', handleBodyClick)

        return () => {

            setButtonsSelected(false)
            document.body.removeEventListener('pointerdown', handleBodyClick)
        }
    }, [])

    const handleButtonClick = (index) => {

        buttons.forEach(button => {

            if (button.id !== index && !button.isSelected) {
                button.isActive = false
            }

            if (button.id === index && !button.isSelected) {
                button.isActive = !button.isActive
            }
        })

        setButtons(s => [...s])

    }


    const handleSelectButtonNav = (index, event) => {

        buttons.forEach(button => {

            if (button.id !== index) {
                button.isSelected = false
                button.isActive = false
            }

            if (button.id === index) {
                button.isSelected = true
            }

        })
        setButtons(s => [...s])
        setButtonsSelected(true)
    }


    return (
        <div style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {
                    buttons.map((button) => {
                        return <div id={'nav'} key={button.id} style={{
                            display: 'flex', width: '100%', order: `${button.isSelected ? '1' : '0'}`,
                        }}>
                            <button
                                onClick={() => handleButtonClick(button.id)}
                                type="button"
                                style={{
                                    cursor: 'pointer', height: `40px`,
                                    width: `${buttonIsSelected ? '80px' : '250px'}`,
                                    border: 'none', margin: '0px', padding: '0px', backgroundColor: button.color
                                }}>
                            </button>

                            {

                                button.isActive &&

                                <nav style={{ display: 'flex', width: `${buttonIsSelected ? 'calc(100% - 80px)' : 'calc(100% - 250px)'}`, backgroundColor: button.color }}>

                                    <ul id="link_list" style={{
                                        display: 'flex',
                                        padding: '0 80px',
                                        gap: '100px',
                                        // alignItems: 'center',
                                        // width: '100%'
                                    }}>
                                        {
                                            button.menu.map((link, index) => {
                                                return (
                                                    <li key={index} style={{ listStyle: 'none', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                        <NavLink to={link.path}
                                                            onClick={(e) => handleSelectButtonNav(button.id, e)}
                                                            style={({ isActive, isPending, isTransitioning }) => {
                                                                return {
                                                                    borderRadius: '20px',
                                                                    display: 'block',
                                                                    padding: '2px 15px',
                                                                    // width: '60%',
                                                                    // height: '60%',
                                                                    display: 'flex',
                                                                    fontWeight: 'bold',
                                                                    color: isActive ? 'black' : 'white',
                                                                    alignItems: 'center',
                                                                    justifyContent: 'center',
                                                                    backgroundColor: isActive ? 'white' : 'transparent',
                                                                };
                                                            }}
                                                        >{link.name}</NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </nav>
                            }
                        </div>
                    })
                }
            </div>
        </div >
    )
}