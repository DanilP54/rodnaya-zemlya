import BigImage from '../../../public/1.jpg';
import BigImageTwo from '../../../public/2.jpg';
import BigImageThree from '../../../public/3.jpg';
import BigImageFoure from '../../../public/4.jpg';
import BigImageFive from '../../../public/5.jpg';
import BigImageSix from '../../../public/6.jpg';
import PlayIcon from '../../../public/play.svg';
import classes from './rec.module.css';


export function Recommendation() {
    return (
        <main style={{
            display: 'grid',
            height: 'calc(100vh - 42vh)',
            // marginTop: '10px',
            gridTemplateColumns: '65% auto',
            gridTemplateRows: 'calc(100vh - 42vh)'
        }}>
            <div className={classes.image_box}>
                <img className={classes.rec_image} src={BigImage} alt="image" />
                <img className={classes.play_icon} src={PlayIcon} alt="play icon" />
                <a href='#' className={classes.rec_title}>The Best Ambient Music on Rodnaya Zemlya, August 2024</a>
                <div className={classes.dimmer}></div>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: 'auto auto'
            }}>

                <img style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }} src={BigImageTwo} alt="" />


                <img style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }} src={BigImageFive} alt="" />


                <img style={{
                    width: '100%',
                    height: '100%'
                }} src={BigImageThree} alt="" />


                <img style={{
                    width: '100%',
                    height: '100%'
                }} src={BigImageSix} alt="" />

            </div>
        </main>
    )
}