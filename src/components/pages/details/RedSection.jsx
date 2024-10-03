import styled from "styled-components"
import { useState } from "react"
import Book from "../../../../public/book.jpg";
import { Link } from "react-router-dom";
import { usePlayerContext } from "../../../context/usePlayerContext";
import { useEffect } from "react";
import audioBook from '../../../../public/audio-books/green-book.mp3'
import linkBook from '../../../../public/book.pdf'


const LiteratureSectionWrapper = styled.div`
    display: grid;
    /* height: 100%; */
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    padding: 120px 50px 60px;
`

const SectionBox = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 40px 20px 40px;

    & h1 {
        padding: 0;
        margin: 0;
        font-size: 35px;
        font-weight: 700;
    }

    & p {
        font-size: 24px;
        font-weight: 500;
        color: inherit;
    }
`
const AsideBox = styled.aside`
    display: flex;
    height: min-content;
    flex-direction: column;
    /* background-color: rgb(242, 249, 249); */

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

const AlbumCard = styled.div`
    //margin-top: 20px;
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

export function RedSection({ color }) {

    const [isPlayBook, setIsPlayBook] = useState(false)
    const { onPlayTrack, isOpen, getCurrentTrackId } = usePlayerContext()

    const handleOnPlayBook = () => {
        setIsPlayBook(true)
        onPlayTrack({
            id: 100,
            title: "Аудиокнига Зверский Детектив - Глава 1: Такие дела",
            trackSrc: audioBook,
            imageSrc: ''
        })
    }

    useEffect(() => {
        if (isOpen) {
            const id = getCurrentTrackId()

            if (id === 100) {
                setIsPlayBook(true)
            }
        }
        if (!isOpen) {
            setIsPlayBook(false)
        }
    }, [isOpen])

    return (
        <LiteratureSectionWrapper>
            <AsideBox>
                <AlbumCard>
                    <img src={Book} alt="" />
                </AlbumCard>
                <div className="movie_details">
                    <div className="item">
                        <span className="bold">Писатель:</span>
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
                        <span className="descr">Биография</span>
                    </div>
                </div>
            </AsideBox>
            <SectionBox>
                <h1>Зверский детектив</h1>
                <p>Brutal detective</p>
                <div style={{
                    marginTop: '25px'
                }}>
                    Жизнь в Дальнем Лесу не назовёшь спокойной: ни дня без преступлений, погонь, подозрений и зверских
                    интриг. Наконец все книги "Зверского детектива" Анны Старобинец: "Логово волка", "Право хищника",
                    "Когти гнева" и "Щипач" — публикуются под одной обложкой, причём "Щипач" выходит впервые.
                    Каждая книга — отдельная детективная история, в которой следствие ведут пожилой и опытный сыщик
                    Барсук Старший и его помощник, дерзкий и отчаянный Барсукот.
                    Все герои этой книжной серии - звери, однако любить и ненавидеть, лгать и говорить правду в морду,
                    доверять и отчаиваться, предавать и спасать они умеют не хуже нас, человекообразных читателей.
                    Разобраться, кто здесь друг, а кто враг, кто невинная пушистая жертва, а кто роковая хищная самка,
                    кто заложник, а кто захватчик, можно только в конце, ведь по правилам жанра преступник неизвестен до
                    самой развязки. Но зато и ежу понятно, что написаны все истории с юмором и иронией, а сюжеты увлекут
                    не только детей, но и их родителей.
                    Для младшего и среднего школьного возраста
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    marginTop: '30px'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <Link to={`/red/literature/reader/${1}`}>
                            <button style={{
                                width: '130px',
                                padding: '3px 10px'
                            }}>Читать
                            </button>
                        </Link>
                        <span>онлайн(256 страниц)</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <a
                            href={linkBook}
                            download='book.pdf'
                            style={{
                                color: 'black',
                                textAlign: 'center',
                                width: '130px',
                                height: '30.9px',
                                backgroundColor: '#F0F0F0',
                                border: '1px solid gray',
                                padding: '3px 10px'
                            }}>Скачать
                        </a>
                        <span>pdf. файл</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <button
                            disabled={isPlayBook ? true : false}
                            onClick={() => handleOnPlayBook()}
                            style={{
                                width: '130px',
                                padding: '3px 10px'
                            }}>Слушать
                        </button>
                        <span>аудиокнигу</span>
                    </div>
                </div>
            </SectionBox>
        </LiteratureSectionWrapper>
    )
}