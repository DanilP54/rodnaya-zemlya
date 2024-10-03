import { Card, Image, Text } from '@mantine/core';
import classes from './secondary.image.module.css'
import { Link } from 'react-router-dom';
import PlayIcon from '../../../../../public/play.svg';
import styled from 'styled-components';
import { useThemeContext } from '../../../../context/ThemeContext';


const LinkStyled = styled(Link)`

        width: 200px;
        padding: 0;
        font-weight: 500;
        color: black;
        margin-top: 14px;

        &:hover {
            color: gray
        }
            

`


export function MovieCard({ src, title, subtitle, index, isPlay, handle, id, category }) {

    const { theme } = useThemeContext()

    return (
        <>
            <Card
                w='232px'
                padding=""
                radius=""
                href="#"
                target="_blank"
                style={{
                    backgroundColor: 'transparent',
                }}
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
                        <img loading='lazy' style={{
                            backgroundColor: 'black',
                            padding: '7px'
                        }} onClick={handle} className={classes.play_icon} src={PlayIcon} alt="play icon" />
                        {/* <div className={classes.dimmer}></div> */}
                    </div>

                </Card.Section>

                <LinkStyled style={{
                    color: theme === 'dark' ? 'white' : 'black'
                }} to={`/${category}/movie/${id}`}>
                    {title}
                </LinkStyled >

                <Text mt="xs" c="dimmed" size="sm">
                    {subtitle}
                </Text>
            </Card>
        </>
    )
}