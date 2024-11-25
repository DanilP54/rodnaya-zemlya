import { Avatar, Button, Text, Menu } from "@mantine/core";
import { useState } from "react";
import { Slide } from "react-toastify";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useThemeContext } from "../../../../context/ThemeContext";
import { toast } from "react-toastify";
import styles from './post.module.css'



function LikeIcon({ like, color = 'currentColor' }) {

    if (like) {
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
    }

    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color}stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
}
// function CommentIcon({color = 'currentColor'}) {
//     return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" /></svg>
// }

function SharedIcon({color = 'currentColor'}) {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-share-3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" /></svg>
}



const isAuth = false

export default function Post({ src, setTabs }) {
    const {theme} = useThemeContext()
    const [like, setLike] = useState(false)


    const handleSubscribe = (name) => {
        if(!isAuth) {
            return toast(`Зарегестрируйтесь, пожалуйста, что бы подписаться на ${name}`, {
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
                // height: '400px',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: '0px 0px 5px 3px rgba(0, 0, 0, 0.205)'
            }}>
                <div style={{
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
                        <div onClick={() => handleSubscribe('krasimir')} className={styles.subscribe}>
                            <p>Подписаться</p>
                        </div>
                    </div>

                    <Menu  trigger="hover" openDelay={100} shadow="md" width={150}>
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
                    cursor: 'pointer'
                }} onClick={() => setTabs(false)}>
                    <div style={{
                        marginTop: '10px',
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
                        <LikeIcon like={like} />
                    </div>
                    {/* <div style={{
                        cursor: 'pointer',

                    }}
                    onClick={() => setTabs(false)}
                    >
                        <CommentIcon />
                    </div> */}
                    <div onClick={handleShared} style={{
                        cursor: 'pointer',
                    }}>
                        <SharedIcon  />
                    </div>
                </div>
            </div>
        </>
    )
}
