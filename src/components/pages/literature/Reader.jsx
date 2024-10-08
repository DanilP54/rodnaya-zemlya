import { HeaderDetails } from "../details/header-details/HeaderAbout.jsx";
import LeftArrow from '../../../../public/left-arrow.svg'
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useLayoutEffect, useState } from "react";
import { bookData } from './dataBook';
import { useFullscreen } from "@mantine/hooks";
import { useThemeContext } from "../../../context/ThemeContext.jsx";
import { ThemeButton } from "../../header/header.jsx";

function FullScreenIcon({ fullscreen }) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={`${fullscreen ? 'yellow' : 'none'}`} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-fullscreen"><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /><rect width="10" height="8" x="7" y="8" rx="1" /></svg>
        </>
    )
}

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
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    padding-top: ${props => props.fullscreen ? '' : '20px'};
    display: flex;
`

const ControlPanel = styled.div`
    display: flex;
    padding: ${props => props.fullscreen ? '20px 40px 20px 40px' : '60px 40px 20px 40px'} ;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    position: fixed;
    background-color: ${props => props.theme === 'light' ? 'white' : '#161616'}; 

`

const Select = styled.select`
    margin-left: 20px;
    width: 50px;
    border-radius: 0;
`

const Button = styled.button`
    width: 30px;
    font-weight: bold;
    outline: none;
    border: .2px solid black;
    border-radius: 3px;
    padding: 0;
    background-color: ${props => props.isBold ? 'rgba(250, 244, 211, 1)' : ''};
    box-shadow: ${props => props.isBold ? '0px 0px 2px #171716' : ''};

`

const Pagination = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: ${props => props.theme === 'light' ? 'white' : '#161616'};
    width: 70%;
    margin: 0px auto;
`;

const PageButton = styled.button`
    padding: 5px 10px;
    font-size: 16px;
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }
`;
const ChapterTitle = styled.h2`
    text-align: center;
    `


const PageIndicator = styled.span`
    font-size: 16px;
    color: inherit;
`;

export function ReaderPage({ color, href }) {
    const { pathname } = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const [fontSize, setFontSize] = useState('16px');
    const [isBold, setIsBold] = useState(false);

    const { theme } = useThemeContext()


    const { toggle, fullscreen } = useFullscreen()
    console.log(fullscreen)

    useLayoutEffect(() => {
        if (pathname) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    const handlePageChange = (e) => {
        setCurrentPage(Number(e.target.value));
        window.scrollTo(0, 0);
    };



    const handleFontSizeChange = (e) => {
        setFontSize(e.target.value);
    };

    const toggleBold = () => {
        setIsBold(!isBold);
    };

    const goToNextPage = () => {
        if (currentPage < bookData.pages.length) {
            setCurrentPage(currentPage + 1);
            window.scrollTo(0, 0);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            window.scrollTo(0, 0);
        }
    };

    const currentPageContent = bookData.pages.find(page => page.page === currentPage)?.content || "Страница не найдена";
    const currentChapter = bookData.chapters.find(chapter => currentPage >= chapter.startPage && currentPage <= chapter.endPage);

    return (
        <>
            <DetailsPageWrapper>
                {
                    !fullscreen && <HeaderBox>
                        <HeaderDetails color={color} />
                    </HeaderBox>
                }
                <MainBox>
                    <ContentBox theme={theme} fullscreen={fullscreen} fontSize={fontSize} isBold={isBold}>
                        <ControlPanel theme={theme} fullscreen={fullscreen}>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '70px'
                                }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <label style={{
                                        lineHeight: 1
                                    }} htmlFor="page-select">cтраница </label>
                                    <Select id="page-select" value={currentPage} onChange={handlePageChange}>
                                        {bookData.pages.map(page => (
                                            <option key={page.page} value={page.page}>{page.page}</option>
                                        ))}
                                    </Select>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <Select id="font-size-select" value={fontSize} onChange={handleFontSizeChange}>
                                        <option selected value="16px">16</option>
                                        <option value="18px">18</option>
                                        <option value="20px">20</option>
                                        <option value="22px">22</option>
                                        <option value="24px">24</option>
                                    </Select>
                                    <Button isBold={isBold} onClick={toggleBold}>Ж</Button>
                                </div>
                                <div
                                    onClick={toggle}
                                    style={{
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                    <FullScreenIcon fullscreen={fullscreen} />
                                </div>
                                {
                                    fullscreen && <ThemeButton />
                                }

                            </div>
                            <span style={{
                                color: 'gray'
                            }}>{bookData.title}</span>
                        </ControlPanel>
                        <div style={{
                            marginTop: fullscreen ? '100px' : '150px',
                        }}>
                            <ChapterTitle>{currentChapter?.title}</ChapterTitle>
                        </div>
                        <div style={{
                            marginTop: '50px',
                            padding: '0 40px 0 40px',
                            flex: '1 1 0',
                            fontWeight: isBold ? 'bold' : 'normal',
                            fontSize: fontSize
                        }} dangerouslySetInnerHTML={{ __html: currentPageContent }}>
                        </div>

                        <Pagination theme={theme}>
                            <PageButton onClick={goToPreviousPage} disabled={currentPage === 1}>←</PageButton>
                            <PageIndicator>{currentPage}/{bookData.pages.length}</PageIndicator>
                            <PageButton onClick={goToNextPage} disabled={currentPage === bookData.pages.length}>→</PageButton>
                        </Pagination>
                    </ContentBox>
                    {
                        !fullscreen && <ArrowLeft to={href} preventScrollReset={true}>
                            <img src={LeftArrow} alt="icon" />
                        </ArrowLeft>
                    }

                </MainBox>
            </DetailsPageWrapper>
        </>
    )
}