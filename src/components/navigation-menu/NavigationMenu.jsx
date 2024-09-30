import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react"
import styled from "styled-components";




const links = [
    {
        name: 'Фильмы',
        url: 'movie'
    },
    {
        name: 'Музыка',
        url: 'music'

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
        name: 'red',
        hover: '#d67070',
        isActive: false,
        isSelected: false,
        menu: [
            {
                name: 'Фильмы',
                path: '/red-movie'
            },
            {
                name: 'Музыка',
                path: '/red-music'
            },
            {
                name: 'Живопись',
                path: '/red-arts'
            },
            {
                name: 'Литература',
                path: '/red-literature'
            }

        ]

    }, {
        id: 2,
        color: '#00FA9A',
        hover: '#38fcb1',
        name: 'green',
        isActive: false,
        isSelected: false,
        menu: [
            {
                name: 'Фильмы',
                path: '/green-movie'
            },
            {
                name: 'Музыка',
                path: '/green-music'
            },
            {
                name: 'Живопись',
                path: '/green-arts'
            },
            {
                name: 'Литература',
                path: '/green-literature'
            }

        ]

    },
    {
        id: 3,
        color: '#00CED1',
        isActive: false,
        hover: '#18e1e4',
        name: 'turquoise',
        isSelected: false,
        menu: [
            {
                name: 'Фильмы',
                path: '/turquoise-movie'
            },
            {
                name: 'Музыка',
                path: '/turquoise-music'
            },
            {
                name: 'Живопись',
                path: '/turquoise-arts'
            },
            {
                name: 'Литература',
                path: '/turquoise-literature'
            }

        ]

    }

]


const ButtonStyled = styled.button`
    cursor: pointer;
    height: 40px;
    width: ${props => props.buttonIsSelected ? '80px' : '250px'};
    border: none;
    margin: 0;
    padding: 0;
    background-color: ${props => props.color};

    &:hover {
        background-color: ${props => props.hover};
    }

`


const StyledNavLink = styled(NavLink)`
  border-radius: 20px;
  display: flex;
  padding: 2px 15px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${props => props.$isActive ? 'black' : 'white'};
  background-color: ${props => props.$isActive ? 'white' : 'transparent'};

  &:hover {
    color: ${props => props.$isActive ? 'black' : 'white'};;
    background-color: ${props => props.$isActive ? 'white' : 'rgba(0, 0, 0, 0.2)'};
  }
  /* &: {
    color: white; // Сохраняет цвет для посещенных ссылок
} */
`


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
                            display: 'flex', width: '100%', order: `${button.isSelected ? '1' : '0'} `,
                        }}>
                            <ButtonStyled
                                onClick={() => handleButtonClick(button.id)}
                                type="button"
                                color={button.color}
                                buttonIsSelected={buttonIsSelected}
                                hover={button.hover}
                            >
                            </ButtonStyled>

                            {

                                button.isActive &&

                                <nav style={{ display: 'flex', width: `${buttonIsSelected ? 'calc(100% - 80px)' : 'calc(100% - 250px)'} `, backgroundColor: button.color }}>

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
                                                        <StyledNavLink
                                                            to={link.path}
                                                            onClick={(e) => handleSelectButtonNav(button.id, e)}
                                                            $isActive={location.pathname === link.path}
                                                        >
                                                            {link.name}
                                                        </StyledNavLink>
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

