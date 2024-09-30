import styled from "styled-components"
import Card6 from '../../../../public/Card6.jpg'
import { Player } from './Player'
import { useState } from "react"
import { MiniPlayer } from "./MiniPlayer"


const songs = [
    {
        title: "Song 1",
        artist: "Artist 1",
        img_src: "https://example.com/song1.jpg",
        src: "https://example.com/song1.mp3",
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        img_src: "https://example.com/song2.jpg",
        src: "https://example.com/song2.mp3",
    },
    // Добавьте больше песен по аналогичному шаблону
];


const AlbumSectionWrapper = styled.div`
    display: grid; 
    height: 100%;
    grid-template-columns: 3fr 1fr;
    padding-right: 20px;
    /* grid-template-rows: 100%; */
`

const SectionBox = styled.section`
    display: flex;
    flex-direction: column;
    padding: 120px 40px 20px 40px;

    & h1 {
        font-weight: 900;
    }

    & p {
        font-weight: 400;
        color: rgba(0,0,0, .7);
    }

    & .player {
        margin-top: 50px;
    }


`
const AsideBox = styled.aside`
    margin-top: 120px;
    padding: 5px 20px;
    display: flex;
    height: min-content;
    flex-direction: column;
    /* background-color: rgb(242, 249, 249); */

    & .album_details {
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        margin-top: 20px;
    }

    & .item {
        display: flex;
        gap: 50px;
        margin-top: 5px;

        & .bold {
            width: 50%;
            font-weight: 700;
            font-size: 12px;
        }

        & .descr {
            width: 50%;
            font-size: 12px;
        }
    }

`

const AlbumCard = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
align-items: center;
    & .title {
        text-align: center;
        display: block;
        font-weight: 700;
        font-size: 15px;
        font-style: italic;
        width: 100%;
    }

    & .subtitle {
        text-align: center;
        display: block;
        font-weight: 700;
        font-size: 13px;
        font-style: normal;
        width: 100%;
    }
    & img {
        height: 230px;
        width: 100%
    }

    

`

export function AlbumSection({ color }) {

    const [currentSongIndex, setCurrentSongIndex] = useState(0);


    return (
        <AlbumSectionWrapper>
            <SectionBox>
                <h1>NINE INCH NAILS - YEAR ZERO</h1>
                <p><strong>Year Zero</strong> is the fifth studio album by the American industrial rock band <strong>Nine Inch Nails</strong>, released by Interscope Records on April 17, 2007.[1] Conceived while touring in support of the band's previous album, With Teeth (2005), the album was recorded in late 2006. It was produced by Trent Reznor and Atticus Ross, and was the band's first studio album since <strong>1994's</strong> The Downward Spiral that was not co-produced by long-time collaborator Alan Moulder. It was the band's last album for Interscope, following Reznor's departure the same year due to a dispute regarding overseas pricing.</p>
                <div className="player">
                    <Player songs={songs} currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} />
                </div>
                <div className="mini-player">
                    <MiniPlayer />
                </div>
            </SectionBox>
            <AsideBox>
                <AlbumCard>
                    {/* <span style={{
                        backgroundColor: color
                    }} className="title">The Fragile</span> */}
                    <img src={Card6} alt="" />
                    {/* <span style={{
                        backgroundColor: color
                    }} className="subtitle">Studio Album by Nine Inch Nails</span> */}
                </AlbumCard>
                <div className="album_details">
                    <div className="item">
                        <span className="bold">Жанр:</span>
                        <span className="descr">Индастриал</span>
                    </div>
                    <div className="item">
                        <span className="bold">Страна:</span>
                        <span className="descr">Америка</span>
                    </div>
                    <div className="item">
                        <span className="bold">Композитор</span>
                        <span className="descr">
                            Трент Резнор
                        </span>
                    </div>
                    <div className="item">
                        <span className="bold">Продюсер:</span>
                        <span className="descr">Трент Резнор, Алан Молдер</span>
                    </div>
                </div>
            </AsideBox>
        </AlbumSectionWrapper >
    )
}