import { useState } from 'react';
import { usePlayerContext } from '../../../context/usePlayerContext';
import PausedIcon from "../../../../public/paused.svg";
import PlayIcon from "../../../../public/play.svg";
import style from './rootLayout.module.css'
import { Flex, Image } from "@mantine/core";
import { Card, Text, Group } from "@mantine/core";

function LikeIcon({ like, color = 'currentColor', size = 18 }) {
    if (like) {
        return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check"><path d="M20 6 9 17l-5-5" /></svg>
    }

    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
}


function SharedIcon({ color = 'currentColor', size = 18 }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-share-3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13 4v4c-6.575 1.028 -9.02 6.788 -10 12c-.037 .206 5.384 -5.962 10 -6v4l8 -7l-8 -7z" /></svg>
}


const isAuth = false

export const PlayList = ({ name, playlist }) => {
    const [like, setLike] = useState(false)

    const { onPlayTrackAndNoOpen, isPlayPlayer, getCurrentTrackId, handleOnPause, handleOnPlay } = usePlayerContext()



    const handle = (track) => {

        const currentId = getCurrentTrackId()

        if (!!currentId && currentId === track.id && isPlayPlayer) {
            return handleOnPause()
        }

        if(!!currentId && currentId === track.id && !isPlayPlayer) {
            return handleOnPlay()
        }



        onPlayTrackAndNoOpen({
            id: track.id,
            title: track.title,
            imageSrc: track.image,
            trackSrc: track.trackSrc
        })
    }


    const handleSave = () => {
        if (!isAuth) {
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
        if (!isAuth) {
            return toast("Зарегестрируйтесь, пожалуйста, что бы делиться материалами", {
                transition: Slide,
                position: "top-center",
                theme: "dark",
                hideProgressBar: true
            })
        }
    }


    if (playlist) {
        return (
            <>
                <div
                    style={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center", minHeight: "500px", borderRadius: '1px solid red' }}>
                    <div style={{ marginTop: '30px', width: '1150px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                        <div>
                            <h2>{`Плейлист подкаста "${name}"`}</h2>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }} onClick={handleSave}>
                                <LikeIcon like={like} size={22} />
                            </div>
                            <div onClick={handleShared} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                <SharedIcon size={22} />
                            </div>
                        </div>
                    </div>
                    <Flex mt={50} mih={50} gap="md" justify="start" align="flex-start" direction="row" wrap="wrap">

                        {playlist.map((track) => {
                            return (
                                <Card key={track.id} c={'inherit'} bd={'none'} w={'250px'} bg={"transparent"} shadow="sm" padding="lg" radius="xs" withBorder>
                                    <Card.Section>
                                        <div className={style.image_box} onClick={() => handle(track)}>
                                            <Image w={'100%'} height={'100%'} src={track.image} alt={track.title} />
                                            <img
                                                style={{
                                                    backgroundColor: "black",
                                                    padding: "7px",
                                                }}
                                                className={getCurrentTrackId() === track.id && isPlayPlayer ? style.paused_icon : style.play_icon}
                                                src={getCurrentTrackId() === track.id && isPlayPlayer ? PausedIcon : PlayIcon}
                                                alt="play icon"
                                            />
                                        </div>
                                    </Card.Section>

                                    <Group mt="xs">
                                        <Text c={'inherit'} fw={500}>{track.title}</Text>
                                    </Group>
                                    <Group mt="xs">
                                        <Text c={"dimmed"} fw={500}>
                                            {track.artist}
                                        </Text>
                                    </Group>

                                    <Group >
                                        <Text c={"dimmed"} fw={500}>
                                            2024
                                        </Text>
                                    </Group>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '20px',
                                        marginTop: '20px',

                                    }}>
                                        <div style={{
                                            cursor: 'pointer',
                                        }}
                                            onClick={handleSave}

                                        >
                                            <LikeIcon like={like} />
                                        </div>
                                        <div
                                            onClick={handleShared}

                                            style={{
                                                cursor: 'pointer',
                                            }}>
                                            <SharedIcon />
                                        </div>
                                    </div>

                                </Card>
                            );
                        })}
                    </Flex>
                </div>
            </>
        )
    }


    return null


}