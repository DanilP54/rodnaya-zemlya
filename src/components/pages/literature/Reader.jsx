import { HeaderDetails } from "../details/header-details/HeaderAbout.jsx";
import LeftArrow from '../../../../public/left-arrow.svg'
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useLayoutEffect, useState } from "react";
import { bookData } from './dataBook';

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
    //background-color: #00CED1; 
`

const MainBox = styled.main`
    background-color: rgba(0,0,0, .9);
    position: relative;
    flex: 1;
`

const ContentBox = styled.div`
    background-color: white;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    padding-top: 20px;
    display: flex;
    /* padding: 20px; */
    /* font-size: ${props => props.fontSize};
    font-weight: ${props => props.isBold ? 'bold' : 'normal'}; */
`

const ControlPanel = styled.div`
    display: flex;
    padding: 60px 40px 20px 40px;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    position: fixed;
    /* border: 1px solid red; */
    background-color: white;
    /* backdrop-filter: blur(20px); */
`

const Select = styled.select`
    margin-left: 20px;
    width: 50px;
    border-radius: 0;
`

const Button = styled.button`
    width: 30px;
    font-weight: bold;
    /* height: 20px; */
    outline: none;
    border: .2px solid black;
    border-radius: 3px;
    padding: 0;
    background-color: ${props => props.isBold ? 'rgba(250, 244, 211, 1)' : ''};
    box-shadow: ${props => props.isBold ? '0px 0px 2px #171716' : ''};
    /* margin-left: 10px; */
`

const Pagination = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: white;
    width: 70%;
    margin: 0px auto;
`;

const PageButton = styled.button`
    padding: 5px 10px; /* Уменьшенная высота */
    border: none;
    background-color: transparent;
    color: black; /* Цвет текста черный */
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
`;

export function ReaderPage({ color, href }) {
    const { pathname } = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const [fontSize, setFontSize] = useState('16px');
    const [isBold, setIsBold] = useState(false);

    useLayoutEffect(() => {
        if (pathname) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    const handlePageChange = (e) => {
        setCurrentPage(Number(e.target.value));
    };

    const handleChangePageButton = () => {}

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
                <HeaderBox>
                    <HeaderDetails color={color} />
                </HeaderBox>
                <MainBox>
                    <ContentBox fontSize={fontSize} isBold={isBold}>
                        <ControlPanel>
                            <div style={{
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
                                    <button disabled style={{
                                        height: '20px',
                                        fontSize: '12px',
                                        outline: 'none',
                                        padding: '0 3px',
                                        marginLeft: '15px'
                                    }} type="button">Перейти</button>
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
                            </div>
                            <span style={{
                                color: 'gray'
                            }}>{bookData.title}</span>
                        </ControlPanel>
                        <div style={{
                            marginTop: '150px',
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
                        
                        <Pagination>
                            <PageButton onClick={goToPreviousPage} disabled={currentPage === 1}>Назад</PageButton>
                            <PageButton onClick={goToNextPage} disabled={currentPage === bookData.pages.length}>Далее</PageButton>
                        </Pagination>
                    </ContentBox>

                    <ArrowLeft to={href} preventScrollReset={true}>
                        <img src={LeftArrow} alt="icon" />
                    </ArrowLeft>
                </MainBox>
            </DetailsPageWrapper>
        </>
    )
}