import { Card, Image, Text } from '@mantine/core';
import classes from './secondary.image.module.css'
import { Link } from 'react-router-dom';
import PlayIcon from '../../../public/play.svg';
import PlayPausedIcon from '../../../public/player.paused.svg';
import { useState } from 'react';
import X from '../../../public/x.svg'
import { useThemeContext } from '../../context/ThemeContext';


export function CardFilms({ src, title, subtitle, index, isPlay, handle, id, category }) {

    const { theme } = useThemeContext()

    return (
        <>
            <Card
                w='232px'
                padding=""
                radius=""
                href="#"
                target="_blank"
                className={classes.card}

            >
                <Card.Section className={classes.card} >
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
                        }} onClick={handle} className={classes.play_icon} src={PlayIcon} alt="play icon" />
                        {/* <div className={classes.dimmer}></div> */}
                    </div>

                </Card.Section>

                <Link component={Link} to={`/turquoise/movie/${id}`}
                    style={{
                        color: 'inherit',
                        width: '200px',
                        padding: 0,
                        fontWeight: '500',
                        marginTop: '14px'
                    }}>
                    {title}
                </Link>

                <Text mt="xs" c="dimmed" size="sm">
                    {subtitle}
                </Text>
            </Card>
        </>
    )
}