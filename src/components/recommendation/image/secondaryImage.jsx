
import { Link } from 'react-router-dom'
import classes from './secondary.image.module.css'


export function SecondaryImage({ imageSrc, iconSrc, setIsPlaying, classProps }) {
    

    const handleClick = () => {
        setIsPlaying((s) => !s)
    }

    return (

        <div className={classes.image_box}>
            <Link to={'#'}>
                <img className={classes.small_image} src={imageSrc} alt="image" />
                {/* <img onClick={handleClick} className={classProps ? classes.paused_icon : classes.play_icon} src={iconSrc} alt="play icon" /> */}
                <Link to='#' className={classes.box_title}>From Metalhead to House Maestro: Andy Compton Celebrates 25 Years of PENG</Link>
                <div className={classes.dimmer}></div>
            </Link>
        </div >


    )
} 