import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import srcImage from '../../../public/art/arts/44.jpg'
import { Text } from "@mantine/core"

import image1 from '../../../public/art/1.jpg'
import image2 from '../../../public/art/2.jpg'
import image3 from '../../../public/art/3.jpg'



const SectionWrapper = styled.main`
padding: 130px 40px 20px 40px;
    display: flex;
    flex-direction: column;
    gap: 100px;
    height: 100%;

`

const ImageBox = styled.div`
    & img {
        width: 300px;
        aspect-ratio: 1;
        object-fit: cover;
    }   
    
`

const TextBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
`

const AboutBox = styled.section`
      display: flex;
    justify-content: space-between;
    align-items: center;
`

const ArtSectionBox = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
`

const AlbumImageBox = styled.div`
    cursor: pointer;
    &:hover {
        filter: brightness(0.9);
    }
    position: relative;
    width: 300px;
& img {
    width: inherit;
    height: 230px;
    object-fit: cover;
    filter: brightness(0.8);
} 
`





export default function ArtSection({ category }) {

    const { pathname } = useLocation()


    return (
        <>
            <SectionWrapper>
                <AboutBox>
                    <ImageBox>
                        <img src={srcImage} alt="image" />
                    </ImageBox>
                    <TextBox>
                        <div>
                            <Text size={'40px'} fw={700}>Камиль Фурнье</Text>
                            <Text size="20px" fw={'400'} c='dimmed'>Camille Fournier</Text>
                            <Text mt={'30px'} size="20px">IRISH-BRITISH PAINTER</Text>
                        </div>
                    </TextBox>
                </AboutBox>
                <ArtSectionBox>
                    <Link to={`/app/${category}/art/1/details/henrietta-moraes`}>
                        <AlbumImageBox>
                            <img src={image1} alt="image" />
                            <div style={{ position: 'absolute', bottom: '10px', left: 0, display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 15px' }}>
                                <Text c={'white'} size="lg" fw={600}>Henrietta Moraes</Text>
                                <Text c={'white'} size="lg" fw={500}>8</Text>
                            </div>
                        </AlbumImageBox>
                    </Link>
                    <Link to={`/app/${category}/art/1/details/merchandise`}>
                        <AlbumImageBox>
                            <img src={image2} alt="image" />
                            <div style={{ position: 'absolute', bottom: '10px', left: 0, display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 15px' }}>
                                <Text c={'white'} size="lg" fw={600}>Merchandise</Text>
                                <Text c={'white'} size="lg" fw={500}>15</Text>
                            </div>
                        </AlbumImageBox>
                    </Link>
                    <Link to={`/app/${category}/art/1/details/design`}>
                        <AlbumImageBox>
                            <img src={image3} alt="image" />
                            <div style={{ position: 'absolute', bottom: '10px', left: 0, display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 15px' }}>
                                <Text c={'white'} size="lg" fw={600}>Design</Text>
                                <Text c={'white'} size="lg" fw={500}>5</Text>
                            </div>
                        </AlbumImageBox>
                    </Link>
                </ArtSectionBox>

            </SectionWrapper>
        </>
    )
}