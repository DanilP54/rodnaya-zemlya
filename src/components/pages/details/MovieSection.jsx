import styled from "styled-components"
import Movie from '../../../../public/voloka-list.png';
import { Player } from "video-react";

const MovieSectionWrapper = styled.div`
    display: grid;

    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    padding: 20px 50px;
`

const AsideBox = styled.aside`
    display: flex;
    height: min-content;
    flex-direction: column;

    & .movie_details {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    & .item {
        display: flex;
        gap: 40px;
        /* padding-right: 15px; */

        & .bold {
            
            width: 50%;
            font-weight: 700;
            font-size: 12px;
        }

        & .descr {
            font-size: 12px;
            width: 50%;
        }
    }
`

const SectionBox = styled.section`
margin-top: 20px;
padding-left: 40px;
height: 100%;

& .about {
    margin-top: 50px;
    & .subtitle { 
       
    }
}

& .about-title span {
        font-size: 20px;
        font-weight: 600;
    }

`

const AlbumCard = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
/* align-items: center; */
gap: 10px;
    & img {
        width: 90%;
        height: 300px;
    }

    & span {
        font-size: 11px;
    }

`

const VideoBox = styled.div`
display: flex;
justify-content: center;

    & div {
        width: 100%;
    }
`

export function MovieSection() {
    return (
        <>
            <div style={{
                height: '100%'
            }}>
                <div style={{
                    paddingTop: '120px',
                    paddingLeft: '50px',

                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <h1 style={{
                        padding: 0,
                        margin: 0,
                        fontWeight: 'bold',
                        fontSize: '32px'
                    }}>Список Волока</h1>
                    <span style={{
                        fontSize: '18px',

                        color: 'gray',
                    }}>Список Волока / Volok's List</span>
                </div>
                <MovieSectionWrapper>
                    <AsideBox>
                        <AlbumCard>
                            <img src={Movie} alt="" />
                        </AlbumCard>
                        <div className="movie_details">
                            <div className="item">
                                <span className="bold">Режиссер:</span>
                                <span className="descr">
                                    Никита Волок
                                </span>
                            </div>
                            <div className="item">
                                <span className="bold">Дата выхода:</span>
                                <span className="descr">
                                    2 июня 1996 года
                                </span>
                            </div>
                            <div className="item">
                                <span className="bold">Страна:</span>
                                <span className="descr">
                                    Молдова
                                </span>
                            </div>
                            <div className="item">
                                <span className="bold">Жанр:</span>
                                <span className="descr">Комедия</span>
                            </div>
                            <div style={{
                                marginTop: '20px'
                            }} className="item">
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '10px'
                                }}>
                                    <div className="bold">В ролях:</div>
                                    <span style={{
                                        display: 'block',
                                        width: '100%'
                                    }} className="descr">
                                        Никита Волок, Том Круз, Брэд Питт
                                    </span>
                                </div>
                            </div>
                        </div>
                    </AsideBox>
                    <SectionBox>
                        <VideoBox>
                            <div>
                                <Player>
                                    <source src="https://yandex.ru/video/preview/11747625689222203345" />
                                </Player>
                            </div>
                        </VideoBox>
                    </SectionBox>
                </MovieSectionWrapper>
                <div style={{
                    padding: '25px 50px',
                    paddingBottom: '80px'
                }} className="item">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                    }}>
                        <div style={{
                            fontWeight: 'bold'
                        }} className="bold">Описание: </div>
                        <span style={{
                            display: 'block',
                            width: '100%'
                        }} className="descr">
                            Никита Волок куда-то пошёл, и что-то сделал, после чего, Волок, конечно, уже не был прежним
                        </span>
                    </div>
                </div>

            </div >
        </>

    )

}