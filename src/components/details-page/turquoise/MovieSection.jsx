import styled from "styled-components"
import Movie from '../../../../public/Movie.jpg';

const MovieSectionWrapper = styled.div`
    display: grid;
    border: 1px solid red;  
    height: 100%;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr;
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



export function MovieSection() {
    return (
        <MovieSectionWrapper>

            <div>
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


                </SectionBox>
            </div>

        </MovieSectionWrapper>


    )

}