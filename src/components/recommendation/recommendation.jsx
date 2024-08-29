import BigImage from '../../../public/1.jpg';
import BigImageTwo from '../../../public/2.jpg';
import BigImageThree from '../../../public/3.jpg';
import BigImageFoure from '../../../public/4.jpg';
import BigImageFive from '../../../public/5.jpg';
import BigImageSix from '../../../public/6.jpg';
import PlayIcon from '../../../public/play.svg';
import PlayPausedIcon from '../../../public/player.paused.svg';
import classes from './rec.module.css';
import { Grid } from '@mantine/core';
import { SecondaryVideo } from './secondary-video/secondaryVideo';
import { SecondaryImage } from './image/secondaryImage';
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';






export function Recommendation() {

    const [isPlaying, setIsPlaying] = useState(false)


    return (
        <>
            <Grid gutter={'none'} style={{ padding: 0, width: '100%', height: 'calc(100vh - 42vh)' }}>
                <Grid.Col style={{ border: '2px solid black', height: 'calc(100vh - 42vh)', padding: 0 }} span={8}>
                    <div className={classes.image_box}>
                        <img className={classes.rec_image} src={BigImage} alt="image" />
                        <img className={classes.play_icon} src={PlayIcon} alt="play icon" />
                        <a href='#' className={classes.rec_title}>The Best Ambient Music on Rodnaya Zemlya, August 2024</a>
                        <div className={classes.dimmer}></div>
                    </div>
                </Grid.Col>
                <Grid.Col style={{ padding: 0, height: 'calc(100vh - 42vh)', border: '2px solid black' }} span={4}>
                    <Grid.Col style={{ padding: 0, height: 'calc(100% / 2)' }} span={12}>
                        <SecondaryVideo imageSrc={BigImageFive} iconSrc={PlayIcon} />
                    </Grid.Col>
                    <Grid.Col style={{ padding: 0, height: 'calc(100% / 2)' }} span={12}>
                        <SecondaryImage classProps={isPlaying} imageSrc={BigImageTwo} iconSrc={isPlaying ? PlayPausedIcon : PlayIcon} setIsPlaying={setIsPlaying} />
                    </Grid.Col>
                </Grid.Col>

            </Grid>
            <>

            </>

            <div>
                {
                    isPlaying && <AudioPlayer

                        style={{
                            position: 'fixed',
                            bottom: 0,
                            zIndex: 999,

                        }}
                        layout='horizontal-reverse'
                        autoPlay
                        src=""
                        onPlay={e => console.log("onPlay")}
                    // other props here
                    />
                }

            </div>

        </>

    )
}


{/* <main style={{
    display: 'grid',
    height: 'calc(100vh - 42vh)',
    border: '2px solid black',
    // marginTop: '10px',
    gridTemplateColumns: '70% auto',
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
        // border: '2px solid black',
        gridTemplateColumns: '100%',
        gridTemplateRows: '1fr 1fr'
    }}>

        {/* {/* <img style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
        }} src={BigImageTwo} alt="" /> */}


//     <img style={{
//         width: '100%',
//         height: '100%',
//         objectFit: 'cover'
//     }} src={BigImageFive} alt="" />


//     <img style={{
//         width: '100%',
//         height: '100%'
//     }} src={BigImageThree} alt="" />


//     {/* <img style={{
//         width: '100%',
//         height: '100%'
//     }} src={BigImageSix} alt="" />  */}

// </div>
// </main>