import { Player } from 'video-react';
import classes from './secondary.video.module.css'
import { useState } from 'react'
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Header,
    Image,
    Modal,
} from 'semantic-ui-react'
export function SecondaryVideo({ imageSrc, iconSrc }) {
    const [open, setOpen] = useState(false)


    return (
        <div className={classes.image_box}>
            <img className={classes.small_image} src={imageSrc} alt="image" />
            <Modal
                style={{
                    backgroundColor: 'transparent'
                }}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={<img className={classes.play_icon} src={iconSrc} alt="play icon" />}
            >
                <ModalHeader style={{
                    backgroundColor: 'black',
                    color: 'white'
                }}>
                    2001: A Space Odyssey
                </ModalHeader>
                <ModalContent style={{
                    backgroundColor: 'transparent',
                    padding: 0,
                }}>
                    <Player>
                        <source src="https://yandex.ru/video/preview/11747625689222203345" />
                    </Player>
                </ModalContent>
            </Modal>

            <a href='#' className={classes.box_title}>2001: A Space Odyssey</a>
            <div className={classes.dimmer}></div>
        </div>
    )
} 