import { Card, Image, Text } from '@mantine/core';
import classes from './secondary.image.module.css'
import { Link } from 'react-router-dom';
import PlayIcon from '../../../../../public/play.svg';
import X from '../../../../../public/x.svg'


export function MusicCard({ src, title, subtitle, index, isPlay, handle, id, category }) {


    return (
        <>
            <Card
                w='232px'
                padding=""
                radius=""
                href="#"
                target="_blank"
            >
                <Card.Section >
                    <div className={classes.image_box}>
                        <Image
                            onClick={handle}
                            loading='lazy'
                            src={src}
                            h={200}
                            alt="No way!"
                        />
                        <img style={{
                            backgroundColor: 'black',
                            padding: '7px'
                        }} onClick={handle} className={isPlay ? classes.paused_icon : classes.play_icon} src={isPlay ? X : PlayIcon} alt="play icon" />
                        {/* <div className={classes.dimmer}></div> */}
                    </div>

                </Card.Section>

                <Link to={`/${category}/album/${id}`} style={{
                    width: '200px',
                    padding: 0,
                    marginTop: '14px'
                }}>
                    {title}
                </Link>


                <Text mt="xs" c="dimmed" size="sm">
                    {subtitle}
                </Text>
            </Card >
        </>
    )
}