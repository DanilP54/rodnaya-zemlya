import { Avatar, Button, Text, Menu, Divider } from "@mantine/core";
import { Slide } from "react-toastify";
import { BsArrowLeft, BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../../../context/ThemeContext";
import { toast } from "react-toastify";


function LikeIcon({ like, color }) {

    if (like) {
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
    }

    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
}

function LikePostIcon({ like, color }) {

    if (like) {
        return <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="red" class="icon icon-tabler icons-tabler-filled icon-tabler-heart"><path stroke={color} d="M0 0h24v24H0z" fill="none" /><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
    }

    return <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
}

function SharedIcon({color}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-share-3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" /></svg>
}

const isAuth = false

export default function PostDetails({ src, setTabs }) {


    const {theme} = useThemeContext()



    const handleLike = () => {
        console.log(1111)
        if(!isAuth) {
            return toast("Зарегестрируйтесь, пожалуйста, что бы оценить комментарий", {
                transition: Slide,
                position: "top-center",
                theme: "dark",
                hideProgressBar: true
            })
        }
    }


    const handleSave = () => {
        if(!isAuth) {
            return toast("Зарегестрируйтесь, пожалуйста, что бы сохранять материалы в личный кабинет", {
                transition: Slide,
                position: "top-center",
                theme: "dark",
                hideProgressBar: true
            })
        }

        setLike(s => !s)
    }

    const handleShared = () => {
        if(!isAuth) {
            return toast("Зарегестрируйтесь, пожалуйста, что бы делиться материалами", {
                transition: Slide,
                position: "top-center",
                theme: "dark",
                hideProgressBar: true
            })
        }
    }

    return (
        <>
            <div style={{
                color: theme === 'light' ? 'black' : 'white',
                // height: '400px',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: '0px 0px 5px 3px rgba(0, 0, 0, 0.205)'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <div style={{
                        padding: '10px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                        onClick={() => setTabs(true)}
                    >
                        <BsArrowLeft color={theme === 'light' ? 'black' : 'white'} onClick={null} size={20} strokeWidth={2} />
                    </div>
                    <Menu trigger="hover" openDelay={100} shadow="md" width={150}>
                        <Menu.Target>
                            <Button variant="transparent"><BsThreeDotsVertical size={20} color={theme === 'light' ? 'black' : 'white'} /></Button>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item >
                                Report
                            </Menu.Item>
                            {/* <Menu.Divider /> */}
                            <Menu.Item>
                                Not interesting
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>

                </div>
                <div style={{
                    marginTop: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '5px 10px'

                }}>
                    <div style={{
                        display: 'flex',
                        gap: '15px',
                        alignItems: 'center'
                    }}>
                        <div>
                            <Avatar size={'lg'} src={src} />
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px'
                        }}>
                            <Text fw={600} size={'17px'} c={'inherit'}>krasimir</Text>
                            <Text fw={600} size={'14px'} c={'gray'} >3 Октября 2024 г.</Text>
                        </div>
                    </div>


                </div>
                <div style={{
                    marginTop: '20px',
                    width: '20%',
                    height: '15px',
                    backgroundColor: 'rgba(0,0,0, .3)',
                    borderRadius: '10px',
                }}></div>
                <div style={{
                    marginTop: '10px',
                    width: '70%',
                    height: '10px',
                    backgroundColor: 'rgba(0,0,0, .3)',
                    borderRadius: '10px',
                }}></div>
                <div style={{
                    marginTop: '10px',
                    width: '70%',
                    height: '10px',
                    backgroundColor: 'rgba(0,0,0, .3)',
                    borderRadius: '10px',
                }}></div>
                <div style={{
                    height: '300px',
                    marginTop: '10px',
                    backgroundColor: 'rgba(0,0,0, .3)',
                    borderRadius: '10px',
                }}>

                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    marginTop: '20px',
                    padding: '0 10px',
                }}>
                    <div style={{
                        cursor: 'pointer',
                    }} onClick={handleSave}>
                        <LikeIcon color={theme === 'light' ? 'black' : 'white'} />
                    </div>
                    <div onClick={handleShared} style={{
                        cursor: 'pointer',
                        
                    }}>
                        <SharedIcon color={theme === 'light' ? 'black' : 'white'} />
                    </div>
                </div>
                <Divider mt={20} w={'100%'} color="dark" />

                <div style={{
                    marginTop: '20px'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Avatar size={'md'} src={'https://api.dicebear.com/9.x/dylan/svg?seed=Christian'} />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                        }}>
                            <Text fw={600} size={'16px'} c={'inherit'}> Даша Морозова</Text>
                            <Text fw={600} size={'14px'} c={'gray'}>Сегодня в 13:15</Text>
                        </div>

                    </div>

                    <div style={{
                        marginTop: '20px',
                        paddingLeft: '2px'
                    }}>
                        <Text fw={400} size={'15px'} c={'inherit'}>И чё? Какой-то серый прямоугольник, это дикий зашквар! </Text>
                    </div>
                    <div onClick={handleLike} style={{
                        marginTop: '15px',
                        display: 'flex',
                        paddingRight: '20px'
                    }}>
                        <LikePostIcon color={theme === 'light' ? 'black' : 'white'} />
                    </div>
                </div>
                <div style={{
                    marginTop: '20px',

                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Avatar size={'md'} src={'https://api.dicebear.com/9.x/miniavs/svg?seed=Christian'} />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                        }}>
                            <Text fw={600} size={'16px'} c={'inherit'}>Паша Дикий</Text>
                            <Text fw={600} size={'14px'} c={'gray'}>Сегодня в 14:15</Text>
                        </div>

                    </div>
                    <div style={{
                        marginTop: '20px',
                        paddingLeft: '2px'
                    }}>
                        <Text fw={400} size={'15px'} c={'inherit'}>Кринжатина какая</Text>
                    </div>
                    <div style={{
                        marginTop: '15px',
                        display: 'flex',
                        paddingRight: '20px'
                    }}>
                        <LikePostIcon color={theme === 'light' ? 'black' : 'white'} />
                    </div>
                </div>
                <div style={{
                    marginTop: '20px',

                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Avatar size={'md'} src={'https://api.dicebear.com/9.x/dylan/svg?seed=Destiny'} />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '5px',
                        }}>
                            <Text fw={600} size={'16px'} c={'inherit'}>Саша Ханеданьян</Text>
                            <Text fw={600} size={'14px'} c={'gray'}>Сегодня в 14:15</Text>
                        </div>

                    </div>
                    <div style={{
                        marginTop: '20px',
                        paddingLeft: '2px'
                    }}>
                        <Text fw={400} size={'15px'} c={'inherit'}>А мне зашло, Молдова, кстати, будущее!</Text>
                    </div>
                    <div style={{
                        marginTop: '15px',
                        display: 'flex',
                        paddingRight: '20px'
                    }}>
                        <LikePostIcon color={theme === 'light' ? 'black' : 'white'}  />
                    </div>
                </div>
                <div style={{
                    marginTop: '20px',
                    backgroundColor: 'rgba(0, 0,0, .3)',
                    padding: '10px',
                    borderRadius: '10px'
                }}>
                    <Text fw={600} size={'16px'} c={theme === 'light' ? 'black' : 'white'}> 
                        <Link style={{
                        color: theme === 'light' ? 'black' : 'white'
                    }} to={'#'}>Зарегистрируйтесь</Link>, что бы оставлять комментарии</Text>
                </div>
            </div >
        </>
    )
}