import { HeaderDetails } from "../../header-details/HeaderAbout";
import LeftArrow from '../../../../public/left-arrow.svg'
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";


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
      background-color: #CD5C5C;
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


export function RedAlbumPage() {
    return (
        <DetailsPageWrapper>
            <HeaderBox>
                <HeaderDetails />
            </HeaderBox>
            <MainBox>
                <ContentBox>
                    <Outlet />
                </ContentBox>
                <ArrowLeft to={'#'}>
                    <img src={LeftArrow} alt="icon" />
                </ArrowLeft>
            </MainBox>


        </DetailsPageWrapper>
    )
}