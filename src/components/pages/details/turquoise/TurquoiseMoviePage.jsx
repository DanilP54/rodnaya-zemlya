import { HeaderDetails } from '../header-details/HeaderAbout';
import LeftArrow from '../../../../../public/left-arrow.svg'
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useLayoutEffect } from "react";
import { MovieSection } from "../MovieSection";
import { useThemeContext } from '../../../../context/ThemeContext';



const ArrowLeft = styled(Link)`
        position: fixed;
        left: 40px;
        top: 80px;

        & img {
            padding: 7px;
            border-radius: 3px;
        }

        &:hover {
            img {
                background-color: rgba(255,255,255, .2);
            }
        
        }

    `

const DetailsPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
   
`

const HeaderBox = styled.div`
      background-color: #00CED1; 
`

const MainBox = styled.main`
    background-color: rgba(0,0,0, .9);
    position: relative;
    flex: 1;
`

const ContentBox = styled.div`
transition: background-color 0.4s ease;
        background-color: ${props => props.theme === 'light' ? 'white' : '#161616'};
        width: 70%;
        height: 100%;
        margin: 0 auto;
`


export function TurquoiseMoviePage() {

    const { pathname } = useLocation()

    const { theme } = useThemeContext()

    useLayoutEffect(() => {
        if (pathname) {
            window.scrollTo(0, 0)
        }
    }, [])

    return (
        <>
            <DetailsPageWrapper>
                <HeaderBox>
                    <HeaderDetails color={'#00CED1'} />
                </HeaderBox>
                <MainBox>
                    <ContentBox theme={theme}>
                        <MovieSection />
                    </ContentBox>
                    <ArrowLeft to={'/app/turquoise-movie'} preventScrollReset={true}>
                        <img src={LeftArrow} alt="icon" />
                    </ArrowLeft>
                </MainBox>
            </DetailsPageWrapper>
        </>
    )
}