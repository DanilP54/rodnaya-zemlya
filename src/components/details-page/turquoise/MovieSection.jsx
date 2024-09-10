import styled from "styled-components"
import Movie from '../../../../public/Movie.jpg';
import { Player } from "video-react";
import { DiVim } from "react-icons/di";

const MovieSectionWrapper = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr;
    padding: 0 50px;
`

const AsideBox = styled.aside`
    margin-top: 120px;
    padding: 5px 10px 5px 10px;
    display: flex;
    height: min-content;
    flex-direction: column;
    background-color: rgb(242, 249, 249);

    & .movie_details {
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }

    & .item {
        display: flex;
        padding-right: 15px;

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
margin-top: 120px;

display: flex;
flex-direction: column;

gap: 100px;
padding: 0 30px;
padding-top: 90px;
height: 100%;

& .title {
    display: flex;
    justify-content: center;

    & .title-box {

    & h1 {
        font-size: 40px;
        padding: 0;
        margin: 0;
    }

    & h3 {
        font-size: 20px;
        color: gray;
        margin: 0;
    }
}


}

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
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;
    & img {
        width: 180px;
        height: 250px;
    }

    & span {
        font-size: 11px;
    }

`

const VideoBox = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
padding: 20px 0;
    & div {
        width: 70%;
    }
`

export function MovieSection() {
    return (
        <div>
            <MovieSectionWrapper>


                <AsideBox>
                    <AlbumCard>
                        <img src={Movie} alt="" />
                        <span className="subtitle">Original German Language poster</span>
                    </AlbumCard>
                    <div className="movie_details">
                        <div className="item">
                            <span className="bold">Directed by</span>
                            <span className="descr">
                                Florian Hencket von Donnersmark
                            </span>
                        </div>
                        <div className="item">
                            <span className="bold">Written by</span>
                            <span className="descr">
                                <a href="#">Florian Hencket von Donnersmark</a>
                            </span>
                        </div>
                        <div className="item">
                            <span className="bold">Produced by</span>
                            <span className="descr">
                                Max Wiedemann Quirin Berg
                            </span>
                        </div>
                        <div className="item">
                            <span className="bold">Starring</span>
                            <span className="descr">
                                <a href="#">Ulrich Muhe</a>
                                <a href="#">
                                    Martina Gedeck
                                </a>
                                <a href="#">Sebasstian Roch</a>
                                <a href="#">Urich Tukur</a>
                            </span>
                        </div>
                        <div className="item">
                            <span className="bold">Cinematography</span>
                            <span className="descr">Heggen Bogdanski</span>
                        </div>
                    </div>
                </AsideBox>

                <SectionBox>
                    <div className="title">
                        <div className="title-box">
                            <h1>Списко Шиндлера</h1>
                            <h3>Schindler's List</h3>
                        </div>
                    </div>
                    <div className="about">
                        <div className="about-title">
                            <span>Про что фильм "Список Шиндлера": </span>
                        </div>
                        <span className="subtitle">В сонову сюжета картины лёг роман Томаса Кеннили "Ковчег Шиндлера". Картина рассказывает о немецком бизнесмене, спасшем во время Второй Мировой Войны не одну тысячу польских евреев.</span>
                    </div>

                </SectionBox>
            </MovieSectionWrapper>
            <VideoBox>
                <div>
                    <Player>
                        <source src="https://yandex.ru/video/preview/11747625689222203345" />
                    </Player>
                </div>
            </VideoBox>
        </div >


    )

}