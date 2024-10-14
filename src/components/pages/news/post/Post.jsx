import { Avatar, Button, Text, Menu } from "@mantine/core";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";



function LikeIcon({ like, setTabs }) {

    if (like) {
        return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="red" class="icon icon-tabler icons-tabler-filled icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" /></svg>
    }

    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
}

function CommentIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-message-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1" /></svg>
}

function SharedIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-share-3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" /></svg>
}

export default function Post({ src, setTabs }) {

    const [like, setLike] = useState(false)
    const [open, setOpen] = useState(false)

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
                            <Text fw={600} size={'17px'} c={'white'}>krasimir</Text>
                            <Text fw={600} size={'14px'} c={'gray'} >3 Октября 2024 г.</Text>
                        </div>
                    </div>

                    <Menu trigger="hover" openDelay={100} shadow="md" width={150}>
                        <Menu.Target>
                            <Button variant="transparent"><BsThreeDotsVertical size={20} color="white" /></Button>
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
                    }} onClick={() => setLike(s => !s)}>
                        <LikeIcon like={like} />
                    </div>
                    <div style={{
                        cursor: 'pointer',
                    }}>
                        <CommentIcon />
                    </div>
                    <div style={{
                        cursor: 'pointer',
                    }}>
                        <SharedIcon />
                    </div>
                </div>
            </div>
        </>
    )
}