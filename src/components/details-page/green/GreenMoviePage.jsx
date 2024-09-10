import { HeaderDetails } from "../../header-details/HeaderAbout";
import LeftArrow from '../../../../public/left-arrow.svg'
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useLayoutEffect } from "react";


const ArrowLeft = styled(Link)`
        position: absolute;
        left: 30px;
        top: 20px;

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
    height: 100%
`

const HeaderBox = styled.div`
      background-color: #00CED1;
`

const MainBox = styled.main`
    background-color: rgba(0,0,0, .9);
    position: relative;
    height: 100%;
`

const ContentBox = styled.div`
        background-color: white;
        width: 70%;
        height: 100%;
        margin: 0 auto;
`


export function GreenMoviePage() {

    const { pathname } = useLocation()

    useLayoutEffect(() => {
        if (pathname) {
            window.scrollTo(0, 0)
        }
    }, [])

    return (
        <DetailsPageWrapper>
            <HeaderBox>
                <HeaderDetails />
            </HeaderBox>
            <MainBox>
                <ContentBox>
                    <Outlet />
                </ContentBox>
                <ArrowLeft to={'/music'} preventScrollReset={true}>
                    <img src={LeftArrow} alt="icon" />
                </ArrowLeft>
            </MainBox>
        </DetailsPageWrapper>
    )
}