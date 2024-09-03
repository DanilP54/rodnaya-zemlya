import { Player } from 'video-react';
import classes from './secondary.video.module.css'
import { useState } from 'react'


import { Link } from 'react-router-dom';
export function SecondaryVideo({ imageSrc, iconSrc }) {
    const [open, setOpen] = useState(false)


    return (
        <div>
            <Link to='/'>
                <div className={classes.image_box}>
                    <img className={classes.small_image} src={imageSrc} alt="image" />
                    <Link to='#' className={classes.box_title}>2001: A Space Odyssey</Link>
                    <div className={classes.dimmer}></div>
                </div>
            </Link>
        </div>
    )
} 