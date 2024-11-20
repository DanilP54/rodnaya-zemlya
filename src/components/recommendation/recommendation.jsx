import BigImage from '../../../public/1.jpg';
import BigImageTwo from '../../../public/2.jpg';
import BigImageFive from '../../../public/5.jpg';
import PlayIcon from '../../../public/play.svg';
import PlayPausedIcon from '../../../public/player.paused.svg';
import classes from './rec.module.css';
import {Grid} from '@mantine/core';
import {SecondaryVideo} from './secondary-video/secondaryVideo';
import {SecondaryImage} from './image/secondaryImage';
import {useState} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import {Link} from 'react-router-dom';
import {NavigationMenu} from "../navigation-menu/NavigationMenu.jsx";
import {Header} from '../header/header.jsx'

export function Recommendation() {

    const [isPlaying, setIsPlaying] = useState(false);


    return (
        <>
            <div style={{marginTop: '20px'}}>
                <Grid gutter={'none'} style={{padding: 0, width: '100%', height: 'calc(100vh - 42vh)'}}>
                    <Grid.Col style={{
                        height: 'calc(100vh - 42vh)', padding: 0
                    }} span={8}>
                        <div className={classes.image_box}>
                            <Link to='#'>
                                <img className={classes.rec_image} src={BigImage} alt="image"/>
                                {/* <img className={classes.play_icon} src={PlayIcon} alt="play icon" /> */}
                                <Link to='#' className={classes.rec_title}>The Best Ambient Music on Rodnaya Zemlya,
                                    August 2024</Link>
                                <div className={classes.dimmer}></div>
                            </Link>
                        </div>

                    </Grid.Col>
                    <Grid.Col style={{
                        padding: 0, height: 'calc(100vh - 42vh)',
                    }} span={4}>
                        <Grid.Col style={{padding: 0, height: 'calc(100% / 2)'}} span={12}>
                            <SecondaryVideo imageSrc={BigImageFive} iconSrc={PlayIcon}/>
                        </Grid.Col>
                        <Grid.Col style={{padding: 0, height: 'calc(100% / 2)'}} span={12}>
                            <SecondaryImage classProps={isPlaying} imageSrc={BigImageTwo}
                                            iconSrc={isPlaying ? PlayPausedIcon : PlayIcon}
                                            setIsPlaying={setIsPlaying}/>
                        </Grid.Col>
                    </Grid.Col>

                </Grid>


                <div>
                    {
                        isPlaying && <AudioPlayer

                            style={{
                                position: 'fixed',
                                bottom: 0,
                                zIndex: 999,

                            }}
                            header={<p></p>}
                            layout='horizontal-reverse'
                            autoPlay
                            src=""
                            onPlay={e => console.log("onPlay")}
                            // other props here
                        />
                    }

                </div>

            </div>
        </>
    )
}