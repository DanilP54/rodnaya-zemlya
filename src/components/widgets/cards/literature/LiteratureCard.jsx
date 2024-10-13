import { Card, Image, Text } from '@mantine/core';
import classes from './secondary.image.module.css'
import { Link } from 'react-router-dom';
import ReadIcon from '../../../../../public/read.svg';
import X from '../../../../../public/x.svg'
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


export function LiteratureCard({ src, title, nameRu, subtitle, index, isPlay, handle, id, category }) {

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
                    backgroundColor: 'transparent'
                }}
            >
                <Card.Section>
                    <LinkStyled to={`/app/${category}/l/${id}`}>
                        <div className={classes.image_box}>
                            <Image
                                onClick={handle}
                                loading='lazy'
                                src={src}
                                h={200}
                                alt="No way!"
                            />
                            <img style={{
                                // backgroundColor: 'black',
                                // padding: '7px'
                            }} onClick={handle} className={classes.book_icon} src={ReadIcon} alt="play icon" />
                            {/* <div className={classes.dimmer}></div> */}
                        </div>
                    </LinkStyled>
                </Card.Section>
                <div style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>

                    <LinkStyled style={{
                        color: theme === 'light' ? 'black' : 'white',
                    }} to={`/app/${category}/l/r/${id}`}>
                        {nameRu}
                    </LinkStyled>

                    <Text mt={'xs'} size="sm" c="dimmed">{title}</Text>

                </div>
            </Card>
        </>
    )
}